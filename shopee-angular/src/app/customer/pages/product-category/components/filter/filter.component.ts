import { Component, OnInit } from '@angular/core';
import { FilterObjectInterface} from '../../models/filter-object.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  listFilterObject: FilterObjectInterface[] = [];

  constructor() { }

  // life-cycles
  ngOnInit() {
    this.initialize();
  }


  // functionalities
  initialize(): void {
    this.listFilterObject = [
      {
        id: 1,
        title: 'Theo Danh Mục',
        isShowFull: false,
        listItem: [
          {id: 1, title: 'Chân váy', isSelected: true},
          {id: 2, title: 'Bộ', isSelected: true},
          {id: 3, title: 'Đầm/Váy', isSelected: false},
          {id: 4, title: 'Đồ truyền thống', isSelected: false},
          {id: 5, title: 'Áo', isSelected: false},
          {id: 6, title: 'Quần đùi', isSelected: false},
          {id: 7, title: 'Khác', isSelected: false},
          {id: 8, title: 'Áo khoác, Áo choàng & Vest', isSelected: false},
          {id: 9, title: 'Đồ bầu', isSelected: false},
          {id: 10, title: 'Thời trang nam', isSelected: false},
          {id: 11, title: 'Đồ liền thân', isSelected: false},
          {id: 12, title: 'Thời trang trẻ em', isSelected: false},
        ]
      },
      {
        id: 2,
        title: 'Nơi bán',
        isShowFull: false,
        listItem: [
          {id: 21, title: 'TP. Hồ Chí Minh', isSelected: false},
          {id: 22, title: 'Hà Nội', isSelected: false},
          {id: 23, title: 'Quận 1', isSelected: false},
          {id: 24, title: 'Quận 12', isSelected: false},
          {id: 25, title: 'Quận 10', isSelected: false},
          {id: 26, title: 'Quận 8', isSelected: false},
          {id: 27, title: 'Quận Gò Vấp', isSelected: false},
          {id: 28, title: 'Quận Tân Phú', isSelected: false},
          {id: 29, title: 'Đồ bầu', isSelected: false},
          {id: 30, title: 'Thành Phố Thủ Đức', isSelected: false},
          {id: 31, title: 'Quận Bình Thành', isSelected: false},
          {id: 32, title: 'Huyện Bình Chánh', isSelected: false},
        ]
      },
      {
        id: 4,
        title: 'Đơn vị vận chuyển',
        isShowFull: false,
        listItem: [
          {id: 41, title: 'Hỏa tốc', isSelected: false},
          {id: 42, title: 'Nhanh', isSelected: false},
          {id: 43, title: 'Tiết kiệm', isSelected: false},
        ]
      },
      {
        id: 5,
        title: 'Thương hiệu',
        isShowFull: false,
        listItem: [
          {id: 51, title: 'Madela', isSelected: false},
          {id: 52, title: 'CalieHouse', isSelected: false},
          {id: 53, title: 'Kamong', isSelected: false},
          {id: 54, title: 'SIKY', isSelected: false},
          {id: 55, title: 'Xuu', isSelected: false},
        ]
      }

    ];
  }

  // handle events
  handleChoseFilterItem(filterObjectId: number, filterObjectItemId: number): void {
    for(let i = 0; i < this.listFilterObject.length; i++) {
      if(this.listFilterObject[i].id === filterObjectId) {
        const listFilterObjectItem = this.listFilterObject[i].listItem;
        for(let j = 0; j < listFilterObjectItem.length; j++) {
          if(listFilterObjectItem[j].id === filterObjectItemId) {
            listFilterObjectItem[j].isSelected = !listFilterObjectItem[j].isSelected;
            break;
          }
        }
        break;
      }
    }
  }

}
