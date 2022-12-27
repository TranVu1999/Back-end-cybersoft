import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-popup-product-category',
  templateUrl: './popup-product-category.component.html',
  styleUrls: ['./popup-product-category.component.scss']
})
export class PopupProductCategoryComponent implements OnInit {
  @Output() closePopup: EventEmitter<any> = new EventEmitter();
  listCategories: any[] = [];

  constructor() { }

  ngOnInit() {
    this.listCategories = [
      {id: 1, title: 'Thời trang nữ'},
      {id: 2, title: 'Thời trang nam'},
      {id: 3, title: 'Sắc đẹp'},
      {id: 4, title: 'Sức khỏe'},
      {id: 5, title: 'Phụ kiện thời trang'},
      {id: 6, title: 'Thiết bị điện gia dụng'},
      {id: 7, title: 'Giày dép nam'},
      {id: 8, title: 'Điện thoại & Phụ kiện'},
      {id: 9, title: 'Du lịch & Hành lý'},
      {id: 10, title: 'Túi ví nữ'},
      {id: 1, title: 'Thời trang nữ'},
      {id: 2, title: 'Thời trang nam'},
      {id: 3, title: 'Sắc đẹp'},
      {id: 4, title: 'Sức khỏe'},
      {id: 5, title: 'Phụ kiện thời trang'},
      {id: 6, title: 'Thiết bị điện gia dụng'},
      {id: 7, title: 'Giày dép nam'},
      {id: 8, title: 'Điện thoại & Phụ kiện'},
      {id: 9, title: 'Du lịch & Hành lý'},
      {id: 10, title: 'Túi ví nữ'},
    ]
  }

  // Handle Events
  handleClosePopup(): void {
    if(!this.closePopup) return;
    this.closePopup.emit();
  }

}
