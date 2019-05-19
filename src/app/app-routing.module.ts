import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common"
import { AckModule } from 'ack-angular/AckModule';

import { declarations } from './declarations'
import { routes } from './routes'

export const routeConfig = {
  useHash:true//,
  //initialNavigation:true,
  //enableTracing:false
}

@NgModule({
  imports: [
    CommonModule,
    AckModule.forRoot(),
    RouterModule.forRoot(routes, routeConfig)
  ],
  declarations:declarations,
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
