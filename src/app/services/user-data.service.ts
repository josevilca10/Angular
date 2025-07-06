import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' 
})
export class UserDataService {
  private usuarios: string[] = ['Ryan', 'Joe', 'Cameron', 'John'];

  constructor() { }

  getUsuarios(): string[] {
    return [...this.usuarios]; 
  }

  addUsuario(nombre: string): void {
    if (nombre.trim() !== '') {
      this.usuarios.push(nombre.trim());
    }
  }

  deleteUsuario(nombre: string): void {
    this.usuarios = this.usuarios.filter(usuario => usuario !== nombre);
  }
}