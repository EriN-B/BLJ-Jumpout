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
import {AuthService} from "../../services/auth.service";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  faHeart = faHeart;
  faShare = faShare;

  items: Observable<BlogPost[]>

  constructor(
    public router: Router,
    public afs: AngularFirestore,
    public matDialog: MatDialog,
    public blogService: BlogService,
    public authService: AuthService,
    public modalService: ModalService
  ) { }

  ngOnInit() {
    // @ts-ignore
    this.items = this.blogService.getAllBlogEntries();
  }

  openDialog(item) {
    this.modalService.setBlog(item);
    const dialogRef = this.matDialog.open(ModalComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
