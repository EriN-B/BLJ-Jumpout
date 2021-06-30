import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import { faPersonBooth, faPassport } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from "../../services/auth.service";
import {User} from "../../types/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: User = <User>{};

  username: string ;

  password: string;

  rpassword: string;

  faPersonBooth = faPersonBooth;
  faPassport = faPassport;

  constructor(
    private authService: AuthService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  register(){
    if(this.password == this.rpassword){
      this.user.email = this.username;
      this.user.password = this.rpassword;
      this.authService.createUserWithEmailAndPassword(this.user);
      this.router.navigateByUrl('/landing');
    }
  }

}
