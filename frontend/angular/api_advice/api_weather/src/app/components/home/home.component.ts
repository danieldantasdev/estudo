import { Component, OnInit } from '@angular/core';
import { AdviceService } from 'src/app/services/advice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  advices!: any;
  date: Date = new Date();

  constructor(private adviceService: AdviceService) {}

  ngOnInit(): void {
    // this.adivices();
  }

  adivices = () => {
    this.adviceService.getAdvices().subscribe((res) => {
      this.advices = res;
      console.log(res);
    });
  };

  advicesById = () => {
    let input = (document.getElementById('input') as HTMLInputElement).value;
    sessionStorage.setItem('advices', input);

    this.adviceService.getAdvicesById(input).subscribe((res) => {
      this.advices = res;
      console.log(this.advices);
    });
  };

  buscar = () => {
    sessionStorage.getItem('adivices')
  };
}
