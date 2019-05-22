import { MainMenu } from './components/main-menu/MainMenu.component'
import { Resume } from './components/resume/resume.component'
import { ResumeHighlights } from './components/resume-highlights/ResumeHighlights.component'
//import { ComingSoon } from './components/coming-soon/ComingSoon.component'
import { BundleStats } from './components/bundle-stats/BundleStats.component'
import { Life } from './components/life/Life.component'
import { Passion } from './components/passion/Passion.component'
import { Route } from '@angular/router';

export const routes: Route[] = [{
  path:'',
  component:MainMenu,
  data:{
    title:'Main Menu',
    icon:'fas fa-th'
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
