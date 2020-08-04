import { Component, OnDestroy } from '@angular/core';
import { animations } from 'ack-angular-fx';
import { ack } from 'ack-x/browser';

export interface dateDec {
  years: number;
  months: number;
  weeks: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

@Component({
  templateUrl: './life.template.html',
  animations
}) export class Life implements OnDestroy {
  nextB: Date;
  born = new Date(1982, 9, 10, 8, 0, 0, 0).getTime();
  dating = new Date(2002, 11, 12, 17, 0, 0, 0).getTime();
  married = new Date(2008, 2, 7, 18, 0, 0, 0).getTime();
  codingSince = new Date(2004, 0, 1, 0, 0, 0, 0).getTime();
  gradDate = new Date(2001, 7, 6, 19, 0, 0, 0).getTime();
  movedOn = new Date(2012, 8, 1, 0, 0, 0, 0).getTime();

  marriedFor: dateDec;
  movedFor: dateDec;
  datingFor: dateDec;
  aliveFor: dateDec;
  nextBday: dateDec;
  flStated: dateDec;
  graduated: dateDec;
  codingFor: dateDec;

  interval: any;

  constructor() {
    this.interval = setInterval(() => this.updateTime(), 1000);
    this.updateTime();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  updateTime() {
    const now = new Date();

    this.movedFor = ack.date(this.movedOn).diffStats(now);
    console.log('movedFor', this.movedFor);
    this.marriedFor = ack.date(this.married).diffStats(now);
    this.datingFor = ack.date(this.dating).diffStats(now);
    this.aliveFor = ack.date(this.born).diffStats(now);
    this.graduated = ack.date(this.gradDate).diffStats(now);
    this.codingFor = ack.date(this.codingSince).diffStats(now);

    // calc until dates
    const nBday = now.getMonth() > 10 ? now.getFullYear() + 1 : now.getFullYear();
    const nextB = ack.date(new Date('10/10/' + nBday)).gotoSod();
    this.nextB = nextB.date;
    const start = ack.date(now);
    this.nextBday = start.diffStats(nextB);
  }
}
