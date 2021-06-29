import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import {BlogPost} from "../types/BlogPost";


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(
    private afs: AngularFirestore,
    private blogPost: BlogPost
  ) { }

  addBlogPost(){
    return this.afs.collection('Blogs').add({
      title:"",
      date: "",
      message: "",
      likes: 10
    })
  }
}
