import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { ApiService } from '../../services/api.service';
import { GlobalService } from '../../services/global.service';


@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles:any;
  uname:string;
  num = 8;
  xyz = 1
  txt:string = 'Latest';
  constructor(public globalService: GlobalService, public apiService: ApiService, public router: Router, private titleService: Title) {
    this.titleService.setTitle('Home');
  }

  fetch(){
    let data = {};
    this.apiService.fetchArticleList(data)
          .subscribe((res) => {
            this.articles = res;
            this.sortL();
            this.uname = localStorage.getItem('packname');
            // console.log(res.length,'Articles loaded.');
            localStorage.setItem('packarticles',res.length);
          },
          err => {
            localStorage.removeItem('packtoken');
            localStorage.removeItem('packname');
            this.router.navigate(['/signin']);
          }
        );
  }

  setnum(num:number){
    this.num=num;
  }

  toggle(){
    if(this.xyz==1){
      this.sortO();
    } else {
      this.sortL();
    }
  }

  sortL(){
    this.articles.sort( function(name1, name2) {
    if ( name1.id < name2.id ){
      return 1;
    }else if( name1.id > name2.id ){
        return -1;
    }else{
      return 0;
    }
   });
   this.xyz=1;
   this.txt='Latest';
  }

  sortO(){
    this.articles.sort( function(name1, name2) {
    if ( name1.id < name2.id ){
      return -1;
    }else if( name1.id > name2.id ){
        return 1;
    }else{
      return 0;
    }
   });
   this.xyz=0;
   this.txt='Oldest';
  }

  ngOnInit() {
    this.fetch();
  }

}
