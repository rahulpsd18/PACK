import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id:string;
  data: any;
  open: boolean = false;
  result:any;

  constructor(route: Router, activatedRoute: ActivatedRoute, public apiService: ApiService, public router: Router,private titleService: Title) {
    // console.log(activatedRoute.snapshot.params);
    this.id = activatedRoute.snapshot.params['id'];
    this.fetchDetail(this.id);
  }

  fetchDetail(id:string){
    this.apiService.fetchDetailView({},id)
          .subscribe((res) => {
            this.data = res;
            this.titleService.setTitle(this.data.title);
          },
          err => {
            this.router.navigate(['/']);
            // localStorage.removeItem('packtoken');
            // this.router.navigate(['/signin']);
          }
        );
  }

  handler(event) {
	 	event.stopPropagation();
    this.open = !this.open;
  }

  delete(){
    this.apiService.deleteArticle({},this.id)
          .subscribe((res) => {
            // this.result = res;
            // console.log(this.result);
            this.router.navigate(['/']);
          },
          err => {
            // console.log(err);
            this.router.navigate(['/']);
            // localStorage.removeItem('packtoken');
            // this.router.navigate(['/signin']);
          }
        );
  }

  signOut(){
    localStorage.removeItem('packtoken');
    this.router.navigate(['/signin']);
  }

  ngOnInit() {
  }

}
