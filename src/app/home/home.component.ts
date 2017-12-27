import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  baseHref: string;
  
  constructor() {
    this.getBaseHref();
  }
  
  getBaseHref() {
    const arr = window.location.href.split('/');
    const len = arr.length;
    this.baseHref = '';
    for (let i = 0; i < len - 1; i++) {
      if (arr[i] == "") {
        this.baseHref += '/';
      } else {
        this.baseHref += arr[i] + '/';
      }
    }
  }

  ngOnInit() {
  }
  
}
