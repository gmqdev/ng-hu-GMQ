import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  @Input() name: string;
  @Input() lastname: string;
  @Output() selected = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  onClick() {
    this.selected.emit({
      nombre: this.name,
      apellido: this.lastname
    });
  }
}
