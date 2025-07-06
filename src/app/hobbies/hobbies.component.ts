import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent {
  @Input() hobbiesList: string[] = [];
  @Input() nuevoHobbyValue: string = ''; 

  @Output() hobbyToAdd = new EventEmitter<string>(); 

  onAddHobbyClick() {
    this.hobbyToAdd.emit(this.nuevoHobbyValue);
    this.nuevoHobbyValue = '';
  }
}