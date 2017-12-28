import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AngularFireDatabase} from 'angularfire2/database';


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  content: string;
  key: any;

  constructor(private route: ActivatedRoute, private db: AngularFireDatabase) {
    route.params.subscribe(params => {
      this.key = params['id'];
      this.fetchPost();
    })
  }

  fetchPost() {
    const postRef = this.db.object('posts/' + this.key);
    postRef.valueChanges().subscribe(data => this.content = data['content']);
  }

  ngOnInit() {
  }

}
