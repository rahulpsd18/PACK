import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-4-o4',
  templateUrl: './4-o4.component.html',
  styleUrls: ['./4-o4.component.css']
})
export class _4O4Component implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('Page not Found');
  }

  ngOnInit() {
  }

}
