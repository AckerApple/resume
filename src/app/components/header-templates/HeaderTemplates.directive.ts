import {
  ContentChildren, Directive,
  TemplateRef, ElementRef, QueryList
} from '@angular/core';

import { AppData } from '../../AppData'

@Directive({
  selector:"header-templates"
}) export class HeaderTemplates {
  @ContentChildren("append") appends:QueryList<TemplateRef<ElementRef>>

  constructor(public AppData:AppData){
    this.AppData.headerTemplates.directives.push(this)
  }

  ngOnDestroy(){
    const dirs = this.AppData.headerTemplates.directives
    for(let x=dirs.length-1; x >= 0; --x){
      if( dirs[x]===this ){
        dirs.splice(x,1)
        break;
      }
    }
  }
}