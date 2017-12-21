import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { 
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MarkdownModule } from 'angular2-markdown';
import * as firebase from 'firebase';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { environment } from '../environments/environment';
import { BlogComponent } from './blog/blog.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { CreateComponent } from './create/create.component';
import { PostDetailComponent } from './post-detail/post-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    BlogComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    CreateComponent,
    PostDetailComponent
  ],
  imports: [
    BrowserModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MarkdownModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
