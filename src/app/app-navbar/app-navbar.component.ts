import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {

  isCollapsed: boolean

  constructor(public af:AngularFireAuth) { }

  ngOnInit() {
    this.isCollapsed = true;
  }

  logout() {
    this.af.auth.signOut();
  }
}
