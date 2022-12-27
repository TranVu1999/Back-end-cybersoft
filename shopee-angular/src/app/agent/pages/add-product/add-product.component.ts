import { Component, OnInit, TemplateRef  } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
// Component
import { PopupProductCategoryComponent } from './component/popup-product-category/popup-product-category.component';
import { PopupUploadMediaComponent } from './component/popup-upload-media/popup-upload-media.component';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  modalRef?: BsModalRef;
  attributes: AttributeInterface[] = [];
  limitNumShowAttribute = 9;

  constructor(
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    this.prepareData();
    this.handleOpenPopupUploadMendia();
  }

  // Functionalities
  prepareData(): void{
    this.attributes = [
      {id: 1, title: 'Chất liệu'},
      {id: 2, title: 'Tên tổ chức chịu trách nhiệm sản xuất'},
      {id: 3, title: 'Rất lớn'},
      {id: 4, title: 'Phong cách'},
      {id: 5, title: 'Petite'},
      {id: 6, title: 'Chiều dài áo'},
      {id: 7, title: 'Xuất xứ'},
      {id: 8, title: 'Mùa'},
      {id: 9, title: 'Mẫu'},
      {id: 10, title: 'Cropped Top'},
    ]
  }

  // Handle Events
  handleOpenPopupProductCategory(): void {
    this.modalRef = this.modalService.show(
      PopupProductCategoryComponent,
      {
        class: 'modal-lg',
        initialState: {

        }
      }
    );
  }

  handleOpenPopupUploadMendia(): void {
    this.modalRef = this.modalService.show(
      PopupUploadMediaComponent,
      {
        class: 'modal-md',
        initialState: {

        }
      }
    );
  }

  handleToggleShowFullListAttribute(): void {
    this.limitNumShowAttribute =  this.limitNumShowAttribute === 9 ? this.attributes.length : 9;
  }
}

interface AttributeInterface {
  id: number;
  title: string;
}
