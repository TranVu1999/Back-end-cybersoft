import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
// modules
import {CustomerModule} from './customer/customer.module';
import { AppRoutingModule } from './app-routing.module';
// components
import { AppComponent } from './app.component';
import { SelectComponent } from './component/form/select/select.component';
import { SelectMultiComponent } from './component/form/select-multi/select-multi.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectComponent,
    SelectMultiComponent
   ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    CustomerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
