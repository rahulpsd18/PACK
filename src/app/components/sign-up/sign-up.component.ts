import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { ApiService } from '../../services/api.service';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  requestSignUpForm: FormGroup;
  errMsg:any;

  constructor(public globalService: GlobalService, public apiService: ApiService, public formBuilder: FormBuilder, public router: Router, private titleService: Title) {
    this.titleService.setTitle('Sign up');
    if(globalService.isLoggedIn()){
      router.navigate(['/']);
    }
  }

  signUp(){
    let data = this.requestSignUpForm.value;
    // console.log('data submitted:',data);
    this.apiService.requestSignUp(data)
          .subscribe((res) => {
            this.errMsg=null;
            this.router.navigate(['/signin']);
          },
          err => {
            this.errMsg = JSON.parse(err._body);
            // console.log('Error Message:',this.errMsg);
          }
        );
  }

  route(){
    this.router.navigate(['/signin']);
  }

  ngOnInit() {
    this.requestSignUpForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

}
