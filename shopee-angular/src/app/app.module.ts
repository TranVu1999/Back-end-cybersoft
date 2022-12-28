import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
// modules
import {CustomerModule} from './customer/customer.module';
import { AgentModule } from './agent/agent.module';
import { ComponentModule } from './component/component.module';
import { AuthorizationModule } from './authorization/authorization.module';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
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
    ComponentModule,
    AuthorizationModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
