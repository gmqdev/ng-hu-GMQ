import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
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
