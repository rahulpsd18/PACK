import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { ApiService } from '../../services/api.service';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  requestSignInForm: FormGroup;
  errMsg:any;

  constructor(public globalService: GlobalService, public apiService: ApiService, public formBuilder: FormBuilder, public router: Router, private titleService: Title) {
    this.titleService.setTitle('Sign in');
    if(globalService.isLoggedIn()){
      router.navigate(['/']);
    }
  }

  signIn(){
    let data = this.requestSignInForm.value;
    // console.log('data submitted:',data);
    this.apiService.requestSignIn(data)
          .subscribe((res) => {
            this.errMsg=null;
            localStorage.setItem('packtoken','Token '+res.token);
            localStorage.setItem('packname',res.name);
            localStorage.setItem('packemail',res.email);
            localStorage.setItem('packuname',res.username);
            // console.log(res,res.name);
            // console.log('Success',res);
            this.router.navigate(['']);
          },
          err => {
            this.errMsg = JSON.parse(err._body).message;
            console.log('Error Message:',this.errMsg);
          }
        );
  }

  route(){
    this.router.navigate(['/signup']);
  }

  ngOnInit() {
    this.requestSignInForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

}
