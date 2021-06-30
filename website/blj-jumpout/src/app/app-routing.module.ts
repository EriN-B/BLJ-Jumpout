import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {LandingComponent} from "./pages/landing/landing.component";
import {BlogComponent} from "./pages/blog/blog.component";
import {RegisterComponent} from "./pages/register/register.component";
import {CreateComponent} from "./pages/create/create.component";
import {AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo} from "@angular/fire/auth-guard";
import {NavbarComponent} from "./pages/navbar/navbar.component";

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/landing']);
const redirectLoggedInToRoot = () => redirectLoggedInTo(['landing']);



const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'landing', component: LandingComponent
  },
  {
    path: 'blog', component: BlogComponent
  },
  {
    path: 'blog/create', component: CreateComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: '', component: LandingComponent
  },
  {
    path: 'navbar', component: NavbarComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
