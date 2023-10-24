import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  inputValue: string = '';

  @Input() title: string;

  constructor() {
    this.title = '';
  }

  @Output() queryParams = new EventEmitter();

  searchByWord() {
    if (this.inputValue.trim() !== '') {
      this.queryParams.emit(this.inputValue);
      this.inputValue = '';
    }
  }
}
