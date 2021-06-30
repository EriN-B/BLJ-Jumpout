import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import { faPersonBooth, faPassport } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from "../../services/auth.service";
import {User} from "../../types/user";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = <User>{};

  username: string = '';

  password: string = '';

  faPersonBooth = faPersonBooth;
  faPassport = faPassport;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  login(){
    this.user.email = this.username;
    this.user.password = this.password;
    this.authService.loginWithEmailAndPassword(this.user);
  }

}
