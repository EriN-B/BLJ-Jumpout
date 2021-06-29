import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {LandingComponent} from "./pages/landing/landing.component";
import {BlogComponent} from "./pages/blog/blog.component";


const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'landing', component: LandingComponent
  },
  {
    path: 'blog', component: BlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
