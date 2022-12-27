import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product.component';
import { AddProductRoutingModule } from './add-product-routing.module';
// Libraries
import {ModalModule} from 'ngx-bootstrap/modal';
// Modules
import { ComponentModule } from 'src/app/component/component.module';
// Components
import { PopupProductCategoryComponent } from './component/popup-product-category/popup-product-category.component';

@NgModule({
  imports: [
    CommonModule,
    AddProductRoutingModule,
    ComponentModule,
    ModalModule.forRoot(),
  ],
  declarations: [
    AddProductComponent,
    PopupProductCategoryComponent
  ]
})
export class AddProductModule { }
