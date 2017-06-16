import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Aplicación de Selección';
  userSelected: any;

  onSelected(user: any) {
    this.userSelected = user;
  }

}