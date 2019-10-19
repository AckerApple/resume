import { Family } from './components/family/Family.component'
import { FamilyLogin } from './components/family-login/FamilyLogin.component'
import { FamilyMain } from './components/family-main/FamilyMain.component'
import { FamilyUsers } from './components/family-users/FamilyUsers.component';
import { FamilyResume } from './components/family-resume/FamilyResume.component';

export const route = {
  path:'family',
  component:Family,
  data:{
    title:'Family Login',
    icon:'fas fa-users',
    titleClass:'bg-assertive'
  },
  children:[{
    path:'',
    component:FamilyMain,
    data:{    
      title:'Our Family Cloud',
      icon:'fas fa-users'
    }
  },{
    path:'login',
    component:FamilyLogin,
    data:{    
      title:'Family Login',
      icon:'fas fa-users'
    }
  },{
    path:'users',
    component:FamilyUsers,
    data:{    
      title:'Family Users',
      icon:'fas fa-users'
    }
  },{
    path:'resume',
    component:FamilyResume,
    data:{    
      title:'Resume Gallery',
      icon:'fas fa-user-graduate'
    }
  }]
}