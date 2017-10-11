import { Component, OnInit } from '@angular/core';

export class Line {
  lineId: string;
  lineName: string;
  stations: any;
}
const _dataList: Line[] = [{
  'lineId': '1',
  'lineName': '1号线',
  'stations': [{'siteId': '100', 'siteName': '国贸站'}, {'siteId': '101', 'siteName': '国贸站'}, {'siteId': '102', 'siteName': '国贸站'}]
}, {
  'lineId': '2',
  'lineName': '2号线',
  'stations': [{'siteId': '100', 'siteName': '国贸站'}]
}, {
  'lineId': '3',
  'lineName': '3号线',
  'stations': [{'siteId': '100', 'siteName': '国贸站'}]
}];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  dataList = _dataList;
  selectedLine: string;
  isShow = false;
  constructor() { }

  ngOnInit() {
  }

  switch(line: Line): void {
    this.selectedLine = line.lineId;
    // this.isShow = !this.isShow;
    if (this.selectedLine === line.lineId) {
      this.isShow = !this.isShow;
    }
  }
}
