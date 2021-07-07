import { Component, OnInit } from '@angular/core';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import {Router} from "@angular/router";
import {BlogService} from "../../services/blog.service";
import {Observable} from "rxjs";
import {BlogPost} from "../../types/BlogPost";
import {count} from "rxjs/operators";
import firebase from "firebase";
import TIMESTAMP = firebase.database.ServerValue.TIMESTAMP;

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
  private base64textString: string;

  constructor(
    public router: Router,
    public blogService: BlogService
  ) { }

  ngOnInit() {
  }

  safeBlogPost(){
    // @ts-ignore
    if(this.title){
      this.post.title = this.title;
      this.post.message = this.text;
      this.post.img = this.base64textString;
      this.blogService.safeBlogPost(this.post);
      this.router.navigateByUrl('/blog');
    }
  }

  handleFileSelect(evt) {
    const files = evt.target.files;
    const file = files[0];

    if (files && file) {
      const reader = new FileReader();

      reader.onload = this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
    console.log(btoa(binaryString));
  }

}
