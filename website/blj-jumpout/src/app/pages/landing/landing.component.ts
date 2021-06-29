import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {AngularFirestore} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {AngularFireList} from "@angular/fire/database";
import {BlogPost} from "../../types/BlogPost";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {


  items: Observable<BlogPost[]>

  constructor(
    private router: Router,
    private afs: AngularFirestore
  ) {
  }

  ngOnInit() {
    // @ts-ignore
    this.items = this.afs.collection('Blogs').valueChanges();
  }

}
