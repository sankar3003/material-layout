import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { PostComponent } from './modules/post/post.component';
import { DefaultComponent } from './layouts/default/default.component';
import { FullwidthComponent } from './layouts/fullwidth/fullwidth.component';
import { LoginComponent } from './modules/login/login.component';

const routes: Routes = [

  {
    path:'',
    component:DefaultComponent,
    children:[

      {
        path:'',
        component:HomeComponent,

      },{
        path:'post',
        component:PostComponent
      }
    ]
  },


  {
    path:'',
    component:FullwidthComponent,
    children:[
{
        path:'login',
        component:LoginComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
