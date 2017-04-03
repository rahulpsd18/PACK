import { Component } from '@angular/core';

import { GlobalService } from './services/global.service';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Home page';

  constructor(public globalService: GlobalService, public apiService: ApiService){
  }
}
