import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {Ng2PaginationModule} from 'ng2-pagination';

import { routing } from './app.routing';

import { AppComponent } from './app.component';

import { GlobalService } from './services/global.service';
import { ApiService } from './services/api.service';
import { LoginGuard } from './services/login.guard';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DetailComponent } from './components/detail/detail.component';
import { ProfileComponent } from './components/profile/profile.component';
import { _4O4Component } from './components/4-o4/4-o4.component';

import {
  Config,
  requestRegisterParams,
  requestLoginParams
 } from './interfaces';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    ArticleListComponent,
    NavbarComponent,
    DetailComponent,
    ProfileComponent,
    _4O4Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routing,
    Ng2PaginationModule
  ],
  providers: [GlobalService,ApiService,LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
