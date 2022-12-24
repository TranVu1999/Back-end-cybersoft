import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
// modules
import {CustomerModule} from './customer/customer.module';
import { AgentModule } from './agent/agent.module';
import { ComponentModule } from './component/component.module';
import { AppRoutingModule } from './app-routing.module';
// components
import { AppComponent } from './app.component';
// Pipes
import { SafeHtmlPipe } from './pipe/safe-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    // Pipes
    SafeHtmlPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    CustomerModule,
    AgentModule,
    ComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
