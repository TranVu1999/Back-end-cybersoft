import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// modules
import { CustomerRoutingModule } from './customer-routing.module';
import { AccountModule } from './pages/account/account.module';
import { ComponentModule } from '../component/component.module';
// components
import { CustomerComponent } from './customer.component';
import { HeaderComponent } from './layouts/header/header.component';

@NgModule({
	imports: [
		CommonModule,
		CustomerRoutingModule,
		AccountModule,
		ComponentModule
	],
	declarations: [
		CustomerComponent,
		HeaderComponent
	]
})
export class CustomerModule { }
