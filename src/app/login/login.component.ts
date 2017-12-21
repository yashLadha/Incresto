import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  email: string;
  password: string;
  
  constructor(public afAuth: AngularFireAuth, private router: Router) { }
  
  ngOnInit() {
  }
  
  login() {
    if (this.email != '' && this.password != '') {
      this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password).then(data => {
        console.log(data);
        this.router.navigate(['home']);     
      }
      ).catch(err => console.error('Unable to authenticate'));
    }
  }
  logout() {
    this.afAuth.auth.signOut();
  }
  
}
