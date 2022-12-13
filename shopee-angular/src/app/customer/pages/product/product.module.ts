import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductRoutingModule } from './product-routing.module';
// components
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ProductSummaryComponent } from './components/product-summary/product-summary.component';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  declarations: [
    ProductComponent,
    BreadcrumbComponent,
    ProductSummaryComponent
  ]
})
export class ProductModule { }
