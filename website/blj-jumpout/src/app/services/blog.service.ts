import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {BlogPost} from '../types/BlogPost';
import {Router} from '@angular/router';
import {readPackageTree} from '@angular/cli/utilities/package-tree';
import {Observable, Subscription} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

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

    console.log(post.title)

    return this.afs.collection('Blogs').add({
      title: post.title,
      date: dateToday.toString(),
      message: post.message,
      likes: 0,
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

  public async getAllBlogEntries(): Promise<BlogPost[]> {
    const res = [];
    await this.afs.collection('Blogs').get().subscribe((snapshot) => {
        snapshot.docs.forEach((doc) => {
          const temp: BlogPost = new BlogPost(
            doc.id,
            // @ts-ignore
            doc.data().title,
            // @ts-ignore
            doc.data().date,
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
}
