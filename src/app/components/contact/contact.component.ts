import { Component, Directive } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-contact',
  imports: [ FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  fields = [
    { label: 'userName', value: '', focused: false },
    { label: 'userAge', value: '', focused: false },
    { label: 'userEmail', value: '', focused: false },
    { label: 'userPassword', value: '', focused: false }
  ];
}
