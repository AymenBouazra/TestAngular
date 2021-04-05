import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { ListPostComponent } from './list-post/list-post.component';
import { Page404Component } from './page404/page404.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome-page',
    pathMatch: 'full'
  },
  {
    path: 'welcome-page',
    component: WelcomePageComponent
  },
 
  {
    path: 'list-post',
    component: ListPostComponent
  },
  {
    path: 'add-post',
    component: AddPostComponent
  },
  {
    path: 'update-post/:i',
    component: UpdatePostComponent
  },
  {
    path: '**',
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
