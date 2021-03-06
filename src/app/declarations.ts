import { declarations as familyDecs } from './family/declarations'

//import { AppComponent } from './components/app/app.component';
import { HeaderTemplates } from './components/header-templates/HeaderTemplates.directive';
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

import { Demos } from './components/demos/Demos.component';
import { DeviceOrientation } from './components/device-orientation/DeviceOrientation.component';
import { UserMediaDemo } from './components/user-media-demo/UserMediaDemo.component';
import { DeviceLocation } from './components/device-location/DeviceLocation.component';
import { SocialSharing } from './components/social-sharing/SocialSharing.component';
import { ShareButton } from './components/share-button/ShareButton.directive';

import { Intro } from './components/intro/Intro.component';
import { IntroFamily } from './components/intro-family/IntroFamily.component';
import { Welcome } from './components/welcome/Welcome.component';
import { Purpose } from './components/purpose/Purpose.component';

import { TakePhoto } from './components/take-photo/TakePhoto.directive';
import { AngularFirestoreStorageUrl } from './storageUrl.pipe'

export const declarations = [
  AngularFirestoreStorageUrl,

  ...familyDecs,
  HeaderTemplates,
  Demos,
  AckMeterDisplay,
  AckMeter,

  ResumeHighlights,
  UserMediaDemo,
  DeviceOrientation,
  SocialSharing,
  DeviceLocation,
  ShareButton,
  BundleStats,
  Passion,
  ComingSoon,
  MainMenu,
  Life,
  
  Intro,
  Welcome,
  Purpose,
  IntroFamily,
  //GotoTop,
  Resume,
  TakePhoto
]