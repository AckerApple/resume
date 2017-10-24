import { NgModule, Component } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
//import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./components/app.component"
export { AppComponent } from "./components/app.component"

@NgModule({
  imports:[
    BrowserModule//,
    //BrowserAnimationsModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap:[ AppComponent ]
}) export class AppModule {}