import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppData } from '../../AppData';
import { animations } from 'ack-angular-fx';
import { FxTracker } from 'ack-angular-fx/dist/components/FxTracker.directive';

@Component({
  templateUrl: './intro.template.html',
  animations
}) export class Intro {
  page = 0;
  nextLink = 'purpose';

  constructor(
    public AppData: AppData,
    public activatedRoute: ActivatedRoute
  ) {}

  continueByTracker(fx: FxTracker) {
    const orderArray = fx.orderArray;
    const currentIndex = fx.orderIndex || 0;
    const index = currentIndex + 1;
    const url = orderArray[index] as string;

    this.AppData.log({
      message: 'intro nav continue',
      orderArray: orderArray.length,
      currentIndex,
      index,
      url
    });

    this.navTo(url);
  }

  runSwipeLeft(fx: FxTracker) {
    const currentIndex = fx.orderIndex || 0;

    if (currentIndex === fx.orderArray.length - 1) {
      this.navTo('../');
    } else {
      if (currentIndex == null) {
        this.navTo('purpose');
        return;
      }

      const index = currentIndex + 1;
      const orderArray = fx.orderArray;
      const url = orderArray[index] as string;

      this.AppData.log({
        message: 'nav history forward by swipe left',
        currentIndex,
        index,
        url
      });

      this.navTo(url);
    }
  }

  runSwipeRight(fx: FxTracker) {
    const orderArray = fx.orderArray;
    const currentIndex = fx.orderIndex || 0;
    if (currentIndex === 0) {
      const index = currentIndex - 1;
      const url = orderArray[index] as string;

      this.AppData.log({
        message: 'nav history forward by swipe right',
        orderArray: orderArray.length,
        index,
        url
      });

      this.navTo(url);
    } else {
      this.AppData.log({
        message: 'nav history swipe right skipped',
        orderArray: orderArray.length,
        currentIndex
      });
    }
  }

  navTo(url: string) {
    this.AppData.navTo(url, this.activatedRoute);
    return true;
  }

  makeNextLink() {
    const steps = ['welcome', 'purpose', 'family']
    const firstChild = this.activatedRoute.firstChild;

    if (!firstChild) {
      this.nextLink = '/';
      return;
    }

    const rc = firstChild.routeConfig;
    const current = steps.indexOf(rc.path.toLowerCase());

    if (current === steps.length - 1) {
      this.nextLink = '/';
      return;
    }

    this.nextLink = steps[current + 1];
  }
}
