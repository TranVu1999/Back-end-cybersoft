import { Component, OnInit } from '@angular/core';
import { BreadcrumbInterface } from '../../models/breadcrumb.interface';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  breadcrumb: BreadcrumbInterface[] = [];
  constructor() { }

  ngOnInit() {
    this.initialize();
  }

  // functionalities
  initialize(): void {
    this.breadcrumb = [
      { title: 'Shopee', url: '' },
      { title: 'Thời Trang Nữ', url: '' },
      { title: 'Chân Váy', url: '' },
      { title: 'Chân váy dài công sở KRfashion SK2106 Hàn Quốc bút chì đẹp có 2 lớp, váy nữ dài ôm midi đen cao cấp dáng dài', url: '' }
    ]
  }

}
