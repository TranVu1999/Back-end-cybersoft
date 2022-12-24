import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// models
import { PurchaseTypeInterface } from '../../models/purchase-type.interface';

@Component({
  selector: 'app-purchase-type',
  templateUrl: './purchase-type.component.html',
  styleUrls: ['./purchase-type.component.scss']
})
export class PurchaseTypeComponent implements OnInit {
  purchaseTypes: PurchaseTypeInterface[] = [];
  indexActiveTab: number = 0;

  constructor(
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.initialize();
    this.handleRouteChange();
  }

  // functionalities
  initialize(): void {
    this.purchaseTypes = [
      { id: 1, title: 'Tất cả', url: ''},
      { id: 2, title: 'Chờ xác nhận', url: '' },
      { id: 3, title: 'Chờ lấy hàng', url: '' },
      { id: 4, title: 'Đang giao', url: '' },
      { id: 5, title: 'Đã giao', url: '' },
      { id: 6, title: 'Đã hủy', url: '' },
    ]
  }

  // handle events
  handleRouteChange(): void {
    this.activeRoute.queryParamMap.subscribe(params => {
      this.indexActiveTab = Number(params.get('type')) || 1;
    })
  }

}
