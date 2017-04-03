import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GlobalService } from '../../services/global.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  errMsg:string;

  constructor(public globalService: GlobalService, public apiService: ApiService, public router: Router) { }

  ngOnInit() {
  }

  signOut(){
    // console.log('signOut');
    localStorage.removeItem('packtoken');
    this.router.navigate(['/signin']);

    // // AS DECIDED TO NOT LOG OUT FROM SERVER BUT TO SIGNOUT LOCALLY

    // this.apiService.requestLogOut({})
    //       .subscribe((res) => {
    //         localStorage.removeItem('packtoken');
    //         this.router.navigate(['/signin']);
    //       },
    //       err => {
    //         this.errMsg = JSON.parse(err._body);
    //         console.log('Error Message:',err);
    //       }
    //     );
    // this.router.navigate(['/signin']);
  }

}
