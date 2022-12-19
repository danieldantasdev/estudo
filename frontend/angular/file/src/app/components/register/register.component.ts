import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';
import { User } from './../../model/User';
import { AlertsService } from './../../shared/alerts/alerts.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  loginForm!: FormGroup;
  isSubmitted: boolean = false;
  hidePassword: boolean = true;

  usuario: User = new User();
  photo!: File | string | any;
  base64Output: string = '';
  foto!: File;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private alertsService: AlertsService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      password: ['', Validators.required],
      photo: ['', Validators.required],
    });
  }

  get formControls() {
    return this.loginForm.controls;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.userService.create(this.loginForm.value).subscribe({
        next: (result) => {
          this.alertsService.onSuccess();
        },
        error: (erro) => {
          alert('Usuário ou Senha inválido(s)!');
          console.log(erro);
        },
      });
    } else {
      return;
    }
  }

  onUpload = () => {
    if (this.photo) {
      this.userService.convertFile(this.photo).subscribe({
        next: (res) => {
          this.base64Output = res;
        },
      });

      this.userService.savePhoto(this.photo).subscribe({
        next: (res) => {
          this.foto = res;
        },
      });
    }
  };

  selecionarFoto(event: any): void {
    this.photo = event.target!.files[0] as File;
    const reader: FileReader = new FileReader();
    reader.onload = function (e: any) {
      document.getElementById('foto')?.removeAttribute('hidden');
      document.getElementById('foto')?.setAttribute('src', e.target.result);
    };
    reader.readAsDataURL(this.photo);
  }
}
