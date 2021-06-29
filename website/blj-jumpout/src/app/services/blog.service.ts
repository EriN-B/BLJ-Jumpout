import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import {BlogPost} from "../types/BlogPost";


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  post: BlogPost;

  constructor(
  ) { }

  safeBlogPost(post){
    this.post = post;
 }

 getSafedBlogPost(){
    return this.post;
 }
}
