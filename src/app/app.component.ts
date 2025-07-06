import { Component } from '@angular/core';
import { UserDataService } from './services/user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mi-proyecto-angular';
  name = "JOSE ARMANDO VILCA MAMANI";
  email = "jvilcamam@unsa.edu.pe";
  webpage = "https://www.unsa.edu.pe";
  hobbies: string[] = [];
  nuevoHobby: string = '';

  usuarios: string[] = []; 
  nuevoUsuarioInput: string = '';

  constructor(private userDataService: UserDataService) { } 

  ngOnInit() {
    this.usuarios = this.userDataService.getUsuarios(); 
  }

  showHobbies(): boolean {
    return this.hobbies.length > 0;
  }

  addHobby() {
    if (this.nuevoHobby.trim() !== '') {
      this.hobbies.push(this.nuevoHobby.trim());
      this.nuevoHobby = '';
    }
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