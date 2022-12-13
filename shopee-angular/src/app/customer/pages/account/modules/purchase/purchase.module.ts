import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseRoutingModule } from './purchase-routing.module';
// components
import { PurchaseComponent } from './purchase.component';
import { PurchaseTypeComponent } from './components/purchase-type/purchase-type.component';
import { PurchaseItemComponent } from './components/purchase-item/purchase-item.component';

@NgModule({
  imports: [
    CommonModule,
    PurchaseRoutingModule
  ],
  declarations: [
    PurchaseComponent,
    PurchaseTypeComponent,
    PurchaseItemComponent
  ]
})
export class PurchaseModule { }
