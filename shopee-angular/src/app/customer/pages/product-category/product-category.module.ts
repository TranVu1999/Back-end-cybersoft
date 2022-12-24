import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCategoryRoutingModule } from './product-category-routing.module';
import { FormsModule } from '@angular/forms';
// components
import { FilterComponent } from './components/filter/filter.component';
import { ProductCategoryComponent } from './product-category.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { SortBarComponent } from './components/sort-bar/sort-bar.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProductCategoryRoutingModule
  ],
  declarations: [
    ProductCategoryComponent,
    FilterComponent,
    ListProductComponent,
    SortBarComponent
  ]
})
export class ProductCategoryModule { }
