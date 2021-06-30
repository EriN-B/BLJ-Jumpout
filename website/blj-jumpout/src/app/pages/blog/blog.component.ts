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
    private router: Router,
    private afs: AngularFirestore,
    private matDialog: MatDialog,
    private blogService: BlogService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    // @ts-ignore
    this.items = this.afs.collection('Blogs').valueChanges();
  }

  openDialog() {
    const dialogRef = this.matDialog.open(ModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  addBlogPost(){
    this.afs.collection('Blogs').add({
      title: "test 1",
      date: "12.12.12",
      message: "qweqewqwe",
      likes: 0
    })
  }

  test(item){
    this.blogService.safeBlogPost(item);
  }

}
