import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from 'rxjs/Rx';

import { GlobalService } from './global.service';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(public globalService: GlobalService, public router: Router){
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    if (this.globalService.isLoggedIn()) {
      return true;
    }
    else {
      this.router.navigate(['/signin']);
      return false;
    }
  }
}
