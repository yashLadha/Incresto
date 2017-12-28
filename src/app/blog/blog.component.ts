import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AngularFireDatabase} from 'angularfire2/database';

import {Post} from '../shared/post';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  items: Observable<any[]>;
  posts: Post[];

  constructor(private db: AngularFireDatabase) {
    this.retrievePosts();
  }

  retrievePosts() {
    const itemRef = this.db.object('posts').valueChanges();
    itemRef.subscribe(data => {
      this.posts = [];
      for (const item in data) {
        const objectRef = new Post().deserialize(data[item]);
        objectRef.setId(item);
        const elem = this.posts.push(objectRef);
      }
    });
  }

  ngOnInit() {
  }

}
