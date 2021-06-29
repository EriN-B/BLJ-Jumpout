import { Component, OnInit } from '@angular/core';
import {BlogService} from "../../services/blog.service";
import {BlogPost} from "../../types/BlogPost";


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  post: BlogPost;

  constructor(
    private blogService: BlogService
  ) { }

  ngOnInit() {
    this.post = this.blogService.getSafedBlogPost();
  }

}
