import { Component, OnInit, TemplateRef  } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
// Component
import { PopupProductCategoryComponent } from './component/popup-product-category/popup-product-category.component';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}

  ngOnInit() {
    this.modalRef = this.modalService.show(
      PopupProductCategoryComponent,
      {
        class: 'modal-lg',
        initialState: {
          closePopup: () => {
            console.log("close popup");
          }
        }
      }
    );
  }
}
