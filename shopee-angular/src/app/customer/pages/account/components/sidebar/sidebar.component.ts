import { Component, OnInit } from '@angular/core';
// models
import { SidebarMenuInterface, SidebarSubMenuInterface } from '../../models/sidebar-menu.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menus: SidebarMenuInterface[] = [];

  constructor() { }

  ngOnInit() {
    this.init();
  }

  // functionalities
  init(): void {
    this.menus = [
      {
        url: '',
        title: 'Tài khoản của tôi',
        icon: 'https://cf.shopee.vn/file/ba61750a46794d8847c3f463c5e71cc4',
        isActive: true,
        subMenu: [
          { url: '', title: 'Hồ sơ', isActive: false, },
          { url: '', title: 'Địa chỉ', isActive: false, },
          { url: '', title: 'Đổi mật khẩu', isActive: false, }
        ],
      },
      {
        url: '',
        title: 'Đơn Mua',
        icon: 'https://cf.shopee.vn/file/f0049e9df4e536bc3e7f140d071e9078',
        isActive: false,
        subMenu: [],
      },
      {
        url: '',
        title: 'Thông báo',
        icon: 'https://cf.shopee.vn/file/e10a43b53ec8605f4829da5618e0717c',
        isActive: false,
        subMenu: [
          { url: '', title: 'Cập nhật đơn hàng', isActive: false, },
          { url: '', title: 'Khuyến mãi', isActive: false, },
          { url: '', title: 'Cập nhật Ví', isActive: false, },
          { url: '', title: 'Hoạt động', isActive: false, },
          { url: '', title: 'Cập nhật đánh giá', isActive: false, },
          { url: '', title: 'Cập nhật Shopee', isActive: false, }
        ],
      },
      {
        url: '',
        title: 'Kho Voucher',
        icon: 'https://cf.shopee.vn/file/84feaa363ce325071c0a66d3c9a88748',
        isActive: false,
        subMenu: [],
      },
      {
        url: '',
        title: 'Shopee Xu',
        icon: 'https://cf.shopee.vn/file/a0ef4bd8e16e481b4253bd0eb563f784',
        isActive: false,
        subMenu: [],
      },

    ]
  }
}
