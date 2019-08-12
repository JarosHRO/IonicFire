import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { 
    path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) 
  },
  { path: 'people', loadChildren: './people/people.module#PeoplePageModule' },
  { path: 'addPeople', loadChildren: './people/add-people/add-people.module#AddPeoplePageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
