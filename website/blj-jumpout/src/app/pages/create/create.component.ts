import { Component, OnInit } from '@angular/core';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import {Router} from "@angular/router";
import {BlogService} from "../../services/blog.service";
import {Observable} from "rxjs";
import {BlogPost} from "../../types/BlogPost";
import {count} from "rxjs/operators";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  post: BlogPost = <BlogPost>{};

  faCheck = faCheck;
  faTimes = faTimes;

  text: string;

  title: string;

  constructor(
    private router: Router,
    private blogService: BlogService
  ) { }

  ngOnInit() {
  }

  safeBlogPost(){
    // @ts-ignore
    if(this.title && this.text.length >= 300){
      this.post.title = this.title;
      this.post.message = this.text;
      this.blogService.safeBlogPost(this.post);
    }
  }

}
