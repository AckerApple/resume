import { Component } from '@angular/core';
import { string } from "./resume-highlights.template"
import { animations } from "ack-angular-fx"

@Component({
  template: string,
  animations:animations
})
export class ResumeHighlights {
}
