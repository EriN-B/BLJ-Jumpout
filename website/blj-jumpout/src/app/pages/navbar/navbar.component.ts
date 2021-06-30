import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {AngularFirestore} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {AngularFireList} from "@angular/fire/database";
import {BlogPost} from "../../types/BlogPost";
import {MatDialog} from '@angular/material/dialog';
import {ModalComponent} from "../modal/modal.component";
import {BlogService} from "../../services/blog.service";
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { faRecordVinyl } from '@fortawesome/free-solid-svg-icons';
import {AuthService} from "../../services/auth.service";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  faHeart = faHeart;

  loggedIn: boolean = false;

  constructor(
    private router: Router,
    private afs: AngularFirestore,
    private matDialog: MatDialog,
    private blogService: BlogService,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

}
