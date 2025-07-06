import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  @Input() userName: string = '';
  @Input() userEmail: string = '';
  @Input() userWebpage: string = '';

  constructor() { }
}