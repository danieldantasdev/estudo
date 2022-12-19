import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class AlertsService {
  constructor(private _snackBar: MatSnackBar, private _router: Router) {}

  onSuccess() {
    this._router.navigate(['/home']);
    this._snackBar.open('Usuário salvo com sucesso!', '', { duration: 5000 });
  }

  onError() {
    this._snackBar.open('Erro ao salvar curso.', '', { duration: 5000 });
  }
}
