import { MainMenu } from './components/main-menu/MainMenu.component'
import { Resume } from './components/resume/resume.component'
import { ResumeHighlights } from './components/resume-highlights/ResumeHighlights.component'
import { Demos } from './components/demos/Demos.component'
//import { ComingSoon } from './components/coming-soon/ComingSoon.component'
import { Intro } from './components/intro/Intro.component'
import { BundleStats } from './components/bundle-stats/BundleStats.component'
import { Life } from './components/life/Life.component'
import { Passion } from './components/passion/Passion.component'
import { Welcome } from './components/welcome/Welcome.component'
import { Purpose } from './components/purpose/Purpose.component'
import { IntroFamily } from './components/intro-family/IntroFamily.component'
import { Family } from './components/family/Family.component'
import { Route } from '@angular/router';

export const routes: Route[] = [{
  path:'',
  component:MainMenu,
  data:{
    title:'Main Menu',
    icon:'fas fa-th',
    titleBar:false
  }
},{
  path:'intro',
  component:Intro,
  data:{
    titleBar:false,
    swiping:false
  },children:[{
    path: "", redirectTo: "welcome", pathMatch:"full"
  },{
    path:'welcome',
    component:Welcome
  },{
    path:'purpose',
    component:Purpose
  },{
    path:'family',
    component:IntroFamily
  }]
},{
  path:'family',
  component:Family,
  data:{
    title:'Family Login',
    icon:'fas fa-users',
    titleClass:'bg-assertive'
  }
},{
  path:'life',
  component:Life,
  data:{
    title:'Life',
    icon:'fas fa-rocket'
  }
},{
  path:'career/highlights',
  component:ResumeHighlights,
  data:{
    title:'Resume Highlights',
    icon:'fas fa-file'
  }
},{
  path:'career/demos',
  component:Demos,
  data:{
    title:'Widget Demos',
    icon:'fas fa-cog'
  }
},{
  path:'career',
  component:Resume,
  data:{
    title:'Career',
    icon:'fas fa-rocket'
  }
},{
  path:'passion',
  component:Passion,
  data:{
    title:'Passion',
    icon:'fas fa-heart'
  }
},{
  path:'stats',
  component:BundleStats,
  data:{
    title:'Bundle Stats',
    icon:'fas fa-thermometer'
  }
}];
