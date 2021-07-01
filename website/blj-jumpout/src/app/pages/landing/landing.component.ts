import {Component, HostListener, OnInit} from '@angular/core';
import { Router } from "@angular/router";
import {AngularFirestore} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {AngularFireList} from "@angular/fire/database";
import {BlogPost} from "../../types/BlogPost";
import {MatDialog} from '@angular/material/dialog';
import {ModalComponent} from "../modal/modal.component";
import {BlogService} from "../../services/blog.service";
import { faHeart, faCode } from '@fortawesome/free-solid-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { faRecordVinyl } from '@fortawesome/free-solid-svg-icons';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {


  innerWidth:number;

  faHeart = faHeart;
  faCode = faCode;
  faShare = faShare;
  faRecordVinyl = faRecordVinyl;

  loggedIn: boolean = false;

    items: Promise<BlogPost[]>;

  constructor(
    public router: Router,
    public afs: AngularFirestore,
    public matDialog: MatDialog,
    public blogService: BlogService,
    public authService: AuthService
  ) {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  async ngOnInit() {
    // @ts-ignore
    this.items = this.blogService.getAllBlogEntries();
    await this.blogService.getAllBlogEntries();
  }

  reload(){
    this.items = this.blogService.getAllBlogEntries();
  }

  openDialog() {
    const dialogRef = this.matDialog.open(ModalComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  test(item){
   this.blogService.safeBlogPost(item);
  }
}
