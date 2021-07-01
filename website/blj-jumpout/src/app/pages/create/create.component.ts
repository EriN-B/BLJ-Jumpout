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

  post: BlogPost;

  faCheck = faCheck;
  faTimes = faTimes;

  text: string;

  title: string;

  file: File;

  constructor(
    private router: Router,
    private blogService: BlogService
  ) { }

  ngOnInit() {
  }

  safeBlogPost() {
    const reader = new FileReader();
    reader.readAsDataURL(this.file);
    reader.onload = () => {
      console.log(reader.result);
    };
    // @ts-ignore
    if (this.title && this.text.length >= 300 && this.file) {
      this.post.title = this.title;
      this.post.message = this.text;
      this.blogService.safeBlogPost(this.post).then(async () => {
        await this.router.navigateByUrl('/blog');
      });
    }
  }


  deleteImg() {
    this.file = undefined;
  }

}
