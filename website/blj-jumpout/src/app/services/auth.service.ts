import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {User} from "../types/user";
import {Router} from "@angular/router";
import {AngularFireAuthGuard} from "@angular/fire/auth-guard";
import firebase from "firebase";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  User: Observable<firebase.User>;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) {
    this.User = this.afAuth.user;
  }

  async loginWithEmailAndPassword (user: User) {
    try{
      const res = await this.afAuth.signInWithEmailAndPassword(user.email, user.password);
      this.router.navigateByUrl('landing');
    }catch (e) {
      console.log(e);
    }
  }

  async createUserWithEmailAndPassword (user: User) {
    try{
      const res = await this.afAuth.createUserWithEmailAndPassword(user.email, user.password);
    }catch (e) {
      console.log(e);
    }
  }

  logout(){
    this.afAuth.signOut();
  }
}
