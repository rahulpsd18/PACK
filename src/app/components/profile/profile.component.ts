import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username = localStorage.getItem('packuname');
  name = localStorage.getItem('packname');
  email = localStorage.getItem('packemail');
  articles = localStorage.getItem('packarticles');

  constructor(public router: Router, private titleService: Title) {
    this.titleService.setTitle(this.name + ' | Profile');
  }

  signOut(){
    localStorage.removeItem('packtoken');
    this.router.navigate(['/signin']);
  }

  ngOnInit() {
    console.log(this.username,this.name,this.email,this.articles);
  }

}
