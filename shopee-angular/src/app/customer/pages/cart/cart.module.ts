import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartRoutingModule } from './cart-routing.module';
// components
import { ShopCartComponent } from './components/shop-cart/shop-cart.component';
import { TotalCartComponent } from './components/total-cart/total-cart.component';

@NgModule({
  imports: [
    CommonModule,
    CartRoutingModule
  ],
  declarations: [
    CartComponent,
    ShopCartComponent,
    TotalCartComponent
  ]
})
export class CartModule { }
