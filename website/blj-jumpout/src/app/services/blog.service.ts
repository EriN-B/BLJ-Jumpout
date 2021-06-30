import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import {BlogPost} from "../types/BlogPost";
import {Router} from "@angular/router";
import {readPackageTree} from "@angular/cli/utilities/package-tree";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(
    private afs: AngularFirestore,
    private router: Router
  ) { }

  safeBlogPost(post){
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    let dateToday = dd + '.' + mm + '.' + yyyy;

    return this.afs.collection('Blogs').add({
      title: post.title,
      date: dateToday.toString(),
      message: post.message,
      likes: 1
    });
 }

 addLike(){

 }

  public async getAllBlogEntries(): Promise<BlogPost[]> {
    const res = [];
    await this.afs.collection('Blogs').get().subscribe((snapshot) => {
        snapshot.docs.forEach((doc) => {
          const temp:BlogPost = new BlogPost(
            doc.id,
            doc.data().title,
            doc.data().date,
            doc.data().message,
            doc.data().likes,
            doc.data().img
            )

          res.push(temp);
        });
      }
    );
    return res;
  }
}
