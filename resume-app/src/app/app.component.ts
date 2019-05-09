import { Component } from '@angular/core';
import { string } from "./app.template"

@Component({
  selector: 'app-root',
  template: string
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'resume-app';
}
