import { Component, OnInit } from '@angular/core';
import {BlogService} from "../../services/blog.service";
import {BlogPost} from "../../types/BlogPost";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {ModalService} from "../../services/modal.service";
import { faHeart } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  blog: BlogPost;

  faHeart = faHeart;

  constructor(
    public blogService: BlogService,
    public route: ActivatedRoute,
    public modalService: ModalService
  ) { }

  ngOnInit() {
    this.blog = this.modalService.getBlog();
  }

}
