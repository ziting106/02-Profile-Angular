import { Component, Inject, Injectable } from '@angular/core';

@Injectable()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = '02-Profile-Angular';
  constructor() {}
}
