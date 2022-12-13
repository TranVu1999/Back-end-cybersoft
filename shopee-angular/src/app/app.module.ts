import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// modules
import {CustomerModule} from './customer/customer.module';
import { AppRoutingModule } from './app-routing.module';
// components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
