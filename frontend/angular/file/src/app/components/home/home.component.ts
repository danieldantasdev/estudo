import { DemoimageService } from './../../services/demoimage.service';
import { Component, OnInit, Query, Sanitizer } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/model/User';
import {
  DomSanitizer,
  SafeResourceUrl,
  SafeUrl,
} from '@angular/platform-browser';
import { Observable, Observer, switchMap } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  usuario: User = new User();

  base64TrimmedURL: string = '';
  base64DefaultURL: string = '';
  generatedImage: string = '';
  windowOPen: boolean = false;

  constructor(
    private usuarioService: UserService,
    private domSanitizer: DomSanitizer,
    private demoImage: DemoimageService
  ) {}

  ngOnInit(): void {
    this.readAll();
    this.getImageWithoutWindowOpen(this.demoImage.imageBase64Url);
  }

  readAll = () => {
    this.usuarioService.readById(1).subscribe({
      next: async (record: User) => {
        this.usuario = record;

        // const blob: Blob = await this.base64ToBlob(record.photo, 'image/png');
        // const reader: FileReader = new FileReader();

        // reader.onload = (e: any) => {
        //   document.getElementById('photo')?.removeAttribute('hidden');
        //   document
        //     .getElementById('photo')
        //     ?.setAttribute('src', e.target.result);
        // };
        // // reader.readAsText(blob);
        // reader.readAsDataURL(blob);
        
        this.getImageWithoutWindowOpen(
          'data:image/jpeg;base64,' + String(record.photo)
        );
      },
    });
  };
  //74729f21-099b-44b6-b19e-df4fb5d9ae4d

  private blobToBase64(blob: Blob) {
    return Observable.create((observer: any) => {
      const reader = new FileReader();
      const binaryString = reader.readAsDataURL(blob);
      reader.onload = (event: any) => {
        console.log('Image in Base64: ', event.target.result);
        observer.next(event.target.result);
        observer.complete();
      };

      reader.onerror = (event: any) => {
        console.log('File could not be read: ' + event.target.error.code);
        observer.next(event.target.error.code);
        observer.complete();
      };
    });
  }

  private base64ToBlob = async (base64: any, type: any) => {
    return await fetch(`data:${type};base64,${base64}`).then((res) =>
      res.blob()
    );
  };

  private base64toBlob(base64Data: any, contentType: any): Blob {
    contentType = contentType || '';
    const sliceSize = 1024;
    const byteCharacters = atob(base64Data);
    const bytesLength = byteCharacters.length;
    const slicesCount = Math.ceil(bytesLength / sliceSize);
    const byteArrays = new Array(slicesCount);

    for (let sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
      const begin = sliceIndex * sliceSize;
      const end = Math.min(begin + sliceSize, bytesLength);

      const bytes = new Array(end - begin);
      for (let offset = begin, i = 0; offset < end; ++i, ++offset) {
        bytes[i] = byteCharacters[offset].charCodeAt(0);
      }
      byteArrays[sliceIndex] = new Uint8Array(bytes);
    }
    return new Blob(byteArrays, { type: contentType });
  }

  sanatizeUrl(generatedImageUrl: string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(generatedImageUrl);
  }

  /* Method to fetch image from Url */
  getBase64ImageFromURL(url: string): Observable<string> {
    return Observable.create((observer: Observer<string>) => {
      // create an image object
      let img = new Image();
      img.crossOrigin = 'Anonymous';
      img.src = url;
      if (!img.complete) {
        // This will call another method that will create image from url
        img.onload = () => {
          observer.next(this.getBase64Image(img));
          observer.complete();
        };
        img.onerror = (err) => {
          observer.error(err);
        };
      } else {
        observer.next(this.getBase64Image(img));
        observer.complete();
      }
    });
  }

  /* Method to create base64Data Url from fetched image */
  getBase64Image(img: HTMLImageElement): string {
    // We create a HTML canvas object that will create a 2d image
    var canvas: HTMLCanvasElement = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    let ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;
    // This will draw image
    ctx.drawImage(img, 0, 0);
    // Convert the drawn image to Data URL
    let dataURL: string = canvas.toDataURL('image/png');
    this.base64DefaultURL = dataURL;
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, '');
  }

  getImage(imageUrl: string) {
    this.windowOPen = true;
    this.getBase64ImageFromURL(imageUrl).subscribe((base64Data: string) => {
      this.base64TrimmedURL = base64Data;
      this.createBlobImageFileAndShow();
    });
  }

  getImageWithoutWindowOpen(imageUrl: string) {
    this.windowOPen = false;
    this.getBase64ImageFromURL(imageUrl).subscribe((base64Data: string) => {
      this.base64TrimmedURL = base64Data;
      this.createBlobImageFileAndShow();
    });
  }

  /**Method that will create Blob and show in new window */
  createBlobImageFileAndShow(): void {
    this.dataURItoBlob(this.base64TrimmedURL).subscribe((blob: Blob) => {
      const imageBlob: Blob = blob;
      const imageName: string = this.generateName();
      const imageFile: File = new File([imageBlob], imageName, {
        type: 'image/jpeg',
      });
      this.generatedImage = window.URL.createObjectURL(imageFile);
      // on demo image not open window
      if (this.windowOPen) {
        window.open(this.generatedImage);
      }
    });
  }

  /**Method to Generate a Name for the Image */
  generateName(): string {
    const date: number = new Date().valueOf();
    let text: string = '';
    const possibleText: string =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 5; i++) {
      text += possibleText.charAt(
        Math.floor(Math.random() * possibleText.length)
      );
    }
    // Replace extension according to your media type like this
    return date + '.' + text + '.jpeg';
  }

  /* Method to convert Base64Data Url as Image Blob */
  dataURItoBlob(dataURI: string): Observable<Blob> {
    return Observable.create((observer: Observer<Blob>) => {
      const byteString: string = window.atob(dataURI);
      const arrayBuffer: ArrayBuffer = new ArrayBuffer(byteString.length);
      const int8Array: Uint8Array = new Uint8Array(arrayBuffer);
      for (let i = 0; i < byteString.length; i++) {
        int8Array[i] = byteString.charCodeAt(i);
      }
      const blob = new Blob([int8Array], { type: 'image/jpeg' });
      observer.next(blob);
      observer.complete();
    });
  }
}
