import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common"

import { declarations } from './declarations'
import { routes } from './routes'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations:declarations,
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
