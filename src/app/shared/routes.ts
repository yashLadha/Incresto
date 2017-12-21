import { Routes } from '@angular/router';

import { BlogComponent } from '../blog/blog.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { LoginComponent } from '../login/login.component';
import { CreateComponent } from '../create/create.component';
import { PostDetailComponent } from '../post-detail/post-detail.component';

export const routes: Routes = [
    { path: 'blog', component: BlogComponent, pathMatch: 'full' },
    { path: 'home', component: HomeComponent, pathMatch: 'full' },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'about', component: AboutComponent, pathMatch: 'full' },
    { path: 'login', component: LoginComponent, pathMatch: 'full' },
    { path: 'create', component: CreateComponent, pathMatch: 'full' },
    { path: 'blog/:id', component: PostDetailComponent, pathMatch: 'full' }
]