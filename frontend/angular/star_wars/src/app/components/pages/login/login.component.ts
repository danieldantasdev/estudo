import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuarios } from 'src/app/model/usuarios';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  usuario: Usuarios = new Usuarios();

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [Validators.required]);

  loginForm = new FormGroup({
    email: this.emailFormControl,
    password: this.passwordFormControl,
  });

  hide = true;
  email: string = 'usuario@gmail.com';
  password: string = '123456';

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.fazerLogin(this.email , this.password);
      console.log(this.usuario);
      this.router.navigate(['/home']);
    }
  }

  ngOnInit(): void {}
}
