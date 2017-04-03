import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { GlobalService } from './services/global.service';
import { ApiService } from './services/api.service';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { DetailComponent } from './components/detail/detail.component';
import { ProfileComponent } from './components/profile/profile.component';
import { _4O4Component } from './components/4-o4/4-o4.component';

import { LoginGuard } from './services/login.guard';

const appRoutes: Routes = [
    { path:'', component: ArticleListComponent, canActivate:[LoginGuard] },
    { path:'signup', component: SignUpComponent },
    { path:'signin', component: SignInComponent },
    { path:'profile', component: ProfileComponent, canActivate:[LoginGuard] },
    { path:'detail/:id', component: DetailComponent, canActivate:[LoginGuard] },
    { path:'detail', redirectTo: '' },
    { path:'**', component: _4O4Component }
    // { path:'checkout', component: CheckoutComponent, canActivate:[LoginGuard] }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
