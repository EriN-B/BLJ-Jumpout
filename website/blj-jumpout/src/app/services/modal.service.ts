import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {Router} from "@angular/router";
import {BlogPost} from "../types/BlogPost";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  blog: BlogPost;

  constructor(
    private afs: AngularFirestore,
    private router: Router
  ) { }

  setBlog(blog){
    this.blog = blog;
  }

  getBlog(){
    return this.blog;
  }
}
