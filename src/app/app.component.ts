import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mi-proyecto-angular';
  name = "JOSE ARMANDO VILCA MAMANI";
  email = "jvilcamam@unsa.edu.pe";
  webpage = "http://www.unsa.edu.pe";
  hobbies: string[] = [];
  nuevoHobby: string = '';

  constructor() { }

  showHobbies(): boolean {
    return this.hobbies.length > 0;
  }

  addHobby() {
    if (this.nuevoHobby.trim() !== '') {
      this.hobbies.push(this.nuevoHobby.trim());
      this.nuevoHobby = '';
    }
  }
}