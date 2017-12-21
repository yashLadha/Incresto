import { Component, OnInit, ViewChild } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import * as firebase from 'firebase';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  @ViewChild("thumbnail") thumbnailFile: any;
  title: string;
  author: string;
  content: string;
  draft: boolean;
  storageRef: any;

  constructor(private db:AngularFireDatabase) {
    this.storageRef = firebase.storage().ref();
  }
  
  ngOnInit() {
  }
  
  submitPost() {
    const file = this.thumbnailFile.nativeElement.files[0];
    const extension = file.name.split(".")[1];
    this.storageRef.child('posts/' + this.title + '.' + extension)
      .put(file)
      .then(snapShot => {
        return snapShot.downloadURL;
      })
      .then(link => {
        let itemRef: any;
        if (!this.draft) {
          itemRef = this.db.object('posts/'+this.db.createPushId());
        } else {
          itemRef = this.db.object('drafts/'+this.db.createPushId());
        }
        itemRef.set({
          title: this.title,
          author: this.author,
          content: this.content,
          link: link
        }).then(_ => console.log('Succesfully Posted data'))
          .catch(err => console.error('Unable to push data'));
      })
      .catch(err => console.error(err));
  }
  
}
