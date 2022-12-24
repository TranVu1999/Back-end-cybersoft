import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product.component';
import { AddProductRoutingModule } from './add-product-routing.module';
// Modules
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    AddProductRoutingModule,
    ComponentModule
  ],
  declarations: [
    AddProductComponent
  ]
})
export class AddProductModule { }
