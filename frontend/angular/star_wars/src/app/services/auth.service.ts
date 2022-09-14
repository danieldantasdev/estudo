import { EventEmitter, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Usuarios } from '../model/usuarios';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  fazerLogin(email: string, password: string) {
    if (email === 'usuario@email.com' && password === '123456') {
      this.usuarioAutenticado = true;

      this.mostrarMenuEmitter.emit(true);

      this.router.navigate(['home']);
    } else {
      this.usuarioAutenticado = false;

      this.mostrarMenuEmitter.emit(false);
    }
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }
}
