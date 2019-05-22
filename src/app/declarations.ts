//import { AppComponent } from './components/app/app.component';
import { MainMenu } from './components/main-menu/MainMenu.component';
import { Resume } from './components/resume/resume.component';
import { ResumeHighlights } from './components/resume-highlights/ResumeHighlights.component';
//import { GotoTop } from './components/goto-top/GotoTop.directive';
import { Passion } from './components/passion/Passion.component';
import { ComingSoon } from './components/coming-soon/ComingSoon.component';
import { Life } from './components/life/Life.component';
import { BundleStats } from './components/bundle-stats/BundleStats.component';

import { AckMeter } from './components/ack-meter/AckMeter.component';
import { AckMeterDisplay } from './components/ack-meter-display/AckMeterDisplay.component';

export const declarations = [
  AckMeterDisplay,
  AckMeter,

  ResumeHighlights,
  BundleStats,
  Passion,
  ComingSoon,
  MainMenu,
  Life,
  //GotoTop,
  Resume
]