import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// modules
import { ListAddressRoutingModule } from './list-address-routing.module';
// components
import { ListAddressComponent } from './list-address.component';
import { AddressComponent } from './components/address/address.component';

@NgModule({
  imports: [
    CommonModule,
    ListAddressRoutingModule
  ],
  declarations: [
    ListAddressComponent,
    AddressComponent
  ]
})
export class ListAddressModule { }
