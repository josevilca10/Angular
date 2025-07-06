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
  webpage = "https://www.unsa.edu.pe";
  hobbies: string[] = []; 
  nuevoHobby: string = ''; 

  constructor() { }
}