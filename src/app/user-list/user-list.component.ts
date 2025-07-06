import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service'; 

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  usuarios: string[] = [];
  nuevoUsuarioInput: string = '';

  constructor(private userDataService: UserDataService) { }

  ngOnInit(): void {
    this.usuarios = this.userDataService.getUsuarios();
  }

  borrarUsuario(usuarioParaBorrar: string) {
    this.userDataService.deleteUsuario(usuarioParaBorrar);
    this.usuarios = this.userDataService.getUsuarios();
  }

  agregarUsuario() {
    this.userDataService.addUsuario(this.nuevoUsuarioInput);
    this.nuevoUsuarioInput = '';
    this.usuarios = this.userDataService.getUsuarios();
  }
}