import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() {
     this.show();
  }

  ngOnInit() {
    console.log('ngOnInit运行了');
  }
  private show() {
    console.log('constructor运行了');
  }
}
