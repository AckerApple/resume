import { Component } from '@angular/core';
import { string } from "./demos.template"
import { animations } from "ack-angular-fx"

@Component({
  template: string,
  animations:animations
})
export class Demos {
  shows:any = {}
}