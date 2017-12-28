import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AngularFireDatabase} from 'angularfire2/database';
import { Post } from '../shared/post';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  content: Post;
  key: any;
  bgImage: any;

  constructor(private route: ActivatedRoute, private db: AngularFireDatabase, private sanitizer: DomSanitizer) {
    route.params.subscribe(params => {
      this.key = params['id'];
      this.fetchPost();
    });
  }

  fetchPost() {
    const postRef = this.db.object('posts/' + this.key);
    postRef.valueChanges().subscribe(data => {
      this.content = new Post().deserialize(data);
      this.bgImage = this.sanitizer.bypassSecurityTrustStyle(`url(${this.content.thumbnailLink})`);
    });
  }

  ngOnInit() {
  }

}
