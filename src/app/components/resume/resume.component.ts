import { Component } from '@angular/core';
import { string } from "./resume.template"
import { animations } from "ack-angular-fx"

@Component({
  template: string,
  animations:animations
})
export class Resume {
}
