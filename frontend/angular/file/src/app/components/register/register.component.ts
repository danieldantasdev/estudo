import { User } from './../../model/User';
import { UserService } from '../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  loginForm!: FormGroup;
  isSubmitted: boolean = false;
  hidePassword: boolean = true;
  isLoading: boolean = false;
  // usuario: User = {
  //   id: 0,
  //   name: '',
  //   // photo: new File(),
  //   password: '',
  // };
  usuario: User = new User();
  // foto: File | null = null;
  foto!: File;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private _snackBar: MatSnackBar
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
          this.onSuccess();
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

  selecionarFoto(event: any): void {
    this.foto = event.target.files[0] as File;
    const reader: FileReader = new FileReader();
    reader.onload = function (e: any) {
      document.getElementById('foto')?.removeAttribute('hidden');
      document.getElementById('foto')?.setAttribute('src', e.target.result);
    };
    reader.readAsDataURL(this.foto);
  }

  private onSuccess() {
    // this.router.navigate(['/home']);
    this._snackBar.open('Usuário salvo com sucesso!', '', { duration: 5000 });
  }

  private onError() {
    this._snackBar.open('Erro ao salvar curso.', '', { duration: 5000 });
  }
}
