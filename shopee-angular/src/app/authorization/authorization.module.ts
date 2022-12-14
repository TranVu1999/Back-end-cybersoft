import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationComponent } from './authorization.component';
// modules
import { AuthorizationRoutingModule } from './authorization-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
// Components
import { HeaderComponent } from './component/header/header.component';
import { FormLoginComponent } from './component/form-login/form-login.component';
import { FormSignUpComponent } from './component/form-sign-up/form-sign-up.component';

@NgModule({
	imports: [
		CommonModule,
		AuthorizationRoutingModule,
        ReactiveFormsModule
	],
	declarations: [
		AuthorizationComponent,
		HeaderComponent,
    FormLoginComponent,
    FormSignUpComponent
	]
})
export class AuthorizationModule { }
