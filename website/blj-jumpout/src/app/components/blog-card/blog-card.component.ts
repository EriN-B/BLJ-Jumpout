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
    public router: Router,
    public matDialog: MatDialog,
    public modalService: ModalService,
    public blogService: BlogService,
  ) { }

  ngOnInit() {

  }

  checkLike(item){
    if(localStorage.getItem(item.id) == '1'){
      return true;
    }else{
      return false;
    }
  }

  openDialog(item) {
    this.modalService.setBlog(item);
    const dialogRef = this.matDialog.open(ModalComponent);
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  likePost(id, like) {
    if(localStorage.getItem(id) == '1'){
      localStorage.setItem(id, '0');
      return this.blogService.dislikePost(id,like);
    }else{
      localStorage.setItem(id, '1');
      return this.blogService.likePost(id, like);
    }
    //
  }
}
