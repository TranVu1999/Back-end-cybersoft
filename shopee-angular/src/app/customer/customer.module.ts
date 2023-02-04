import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// modules
import { CustomerRoutingModule } from './customer-routing.module';
import { AccountModule } from './pages/account/account.module';
import { ComponentModule } from '../component/component.module';
// components
import { CustomerComponent } from './customer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';

@NgModule({
	imports: [
		CommonModule,
		CustomerRoutingModule,
		AccountModule,
		ComponentModule
	],
	declarations: [
		CustomerComponent,
		HeaderComponent,
		FooterComponent
	]
})
export class CustomerModule { }
