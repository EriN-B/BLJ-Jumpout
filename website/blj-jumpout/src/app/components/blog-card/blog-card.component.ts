import { Component, OnInit, Input } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { faRecordVinyl } from '@fortawesome/free-solid-svg-icons';
import {BlogPost} from "../../types/BlogPost";
import {ModalComponent} from "../../pages/modal/modal.component";
import {Router} from "@angular/router";
import {AngularFirestore} from "@angular/fire/firestore";
import {MatDialog} from "@angular/material/dialog";
import {BlogService} from "../../services/blog.service";
import {AuthService} from "../../services/auth.service";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit {

  liked: boolean ;

  @Input() blogEntry: BlogPost;
  faHeart = faHeart;
  faShare = faShare;

  constructor(
    private router: Router,
    private matDialog: MatDialog,
    private modalService: ModalService,
    private blogService: BlogService,
  ) { }

  ngOnInit() {
  }

  openDialog(item) {
    this.modalService.setBlog(item);
    const dialogRef = this.matDialog.open(ModalComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  likePost(id,like){
    this.liked = true
    return this.blogService.likePost(id,like);
  }
}
