import { Injectable } from '@angular/core';

import { Config } from '../interfaces';
import { config } from '../config';

@Injectable()
export class GlobalService {

  config: Config;
  constructor() {
    this.config = config;
  }

  isLoggedIn():boolean {
    if (localStorage.getItem('packtoken')){
        return true;
    }
    else {
      return false;
    }
  }
}
