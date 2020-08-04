import {
  HostListener, Directive
} from '@angular/core';

import {
  PageScrollOptions,
  PageScrollService,
  PageScrollInstance
} from 'ngx-page-scroll-core';

@Directive({
  selector: '[goto-top]'
}) export class GotoTop {
  constructor(
    public PageScrollService: PageScrollService
  ){}

  @HostListener('click')
  onClick(){
    this.top();
  }

  top(){
    const options: PageScrollOptions = {
      document,
      scrollTarget: '#top',
      duration: 300
    };

    const pageScrollInstance: PageScrollInstance = new PageScrollInstance(options);
    this.PageScrollService.start(pageScrollInstance);
  }
}
