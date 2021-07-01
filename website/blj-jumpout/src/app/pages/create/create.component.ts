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
  private base64textString: string;

  constructor(
    private router: Router,
    private blogService: BlogService
  ) { }

  ngOnInit() {
  }

  safeBlogPost(){
    // @ts-ignore
    if(this.title && this.text.length >= 200){
      this.post.title = this.title;
      this.post.message = this.text;
      this.post.img = this.base64textString
      this.blogService.safeBlogPost(this.post);
      this.router.navigateByUrl('/blog')
    }
  }

  handleFileSelect(evt){
    var files = evt.target.files;
    var file = files[0];

    if (files && file) {
      var reader = new FileReader();

      reader.onload =this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.base64textString= btoa(binaryString);
    console.log(btoa(binaryString));
  }

}
