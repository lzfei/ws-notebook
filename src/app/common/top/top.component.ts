import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {

  nowHref: string;
  constructor() { }

  ngOnInit() {
    this.setActive();
  }

  setActive(): void {
    const href = window.location.pathname;
    const index = href.indexOf('/');
    if (index !== -1) {
      this.nowHref = href.substring(index, href.length);
    }
    console.log(this.nowHref);
  }
}
