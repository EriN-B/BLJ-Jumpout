import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {BlogPost} from '../types/BlogPost';
import {Router} from '@angular/router';
import {readPackageTree} from '@angular/cli/utilities/package-tree';
import {Observable, Subscription} from 'rxjs';
import firebase from "firebase";
import firestore = firebase.firestore;



@Injectable({
  providedIn: 'root'
})
export class BlogService {

  array = [];

  constructor(
    private afs: AngularFirestore,
    private router: Router
  ) { }

  safeBlogPost(post) {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();

    const dateToday = dd + '.' + mm + '.' + yyyy;

    return this.afs.collection('Blogs').add({
      title: post.title,
      date: firestore.Timestamp.now(),
      message: post.message,
      likes: 1,
      img: post.img
    });
 }

 likePost(id,like) {
    let likes = like+=1;
    console.log(likes);
    return this.afs.collection('Blogs').doc(id).update({
      likes: likes
    });

    return likes;
 }
  dislikePost(id,like) {
    let likes = like-=1;
    console.log(likes);
    return this.afs.collection('Blogs').doc(id).update({
      likes: likes
    });

    return likes;
  }


  public async getAllBlogEntries(): Promise<BlogPost[]> {
    const res = [];
    await this.afs.collection('Blogs', ref => ref.orderBy('date','desc')).get().subscribe((snapshot) => {
        snapshot.docs.forEach((doc) => {
          const temp: BlogPost = new BlogPost(
            doc.id,
            // @ts-ignore
            doc.data().title,
            // @ts-ignore
            new Date(Number(doc.data().date.seconds+"000")).toLocaleDateString("en-CH"),
            // @ts-ignore
            doc.data().message,
            // @ts-ignore
            doc.data().likes,
            // @ts-ignore
            doc.data().img
            );
          res.push(temp);
        });
      }
    );
    return res;
  }

  data(){
    this.afs.collection('Blogs', ref => ref.where('likes', '==', 'o'));

  }
}
