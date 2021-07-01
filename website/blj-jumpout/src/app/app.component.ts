import { Component } from '@angular/core';
import { MenuItems } from "./types/menu-items";
import { Router } from "@angular/router";
import {AngularFirestore} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {AngularFireList} from "@angular/fire/database";
import {BlogPost} from "./types/BlogPost";
import {MatDialog} from '@angular/material/dialog';
import {BlogService} from "./services/blog.service";
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { faRecordVinyl } from '@fortawesome/free-solid-svg-icons';
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    public router: Router,
    public afs: AngularFirestore,
    public matDialog: MatDialog,
    public blogService: BlogService,
    public authService: AuthService
  ) {
    this.authService.User.subscribe(user =>{
      if(user !== null){
        this.loggedIn = true;
      }else{
        this.loggedIn = false;
      }
    });
  }

  faHeart = faHeart;

  loggedIn: boolean = false;

  title = 'blj-jumpout';

  menuItems: MenuItems[] = [
    {
      label: 'Home',
      icon: 'home',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true,
      link: '/home'
    },
    {
      label: 'Overview',
      icon: 'layers',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: false,
      link: '/overview'
    }
  ];
}
