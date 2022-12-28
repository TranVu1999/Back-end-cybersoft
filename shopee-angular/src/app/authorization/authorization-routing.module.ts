import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationComponent } from './authorization.component';
import { FormLoginComponent } from './component/form-login/form-login.component';
import { FormSignUpComponent } from './component/form-sign-up/form-sign-up.component';

const routes: Routes = [
  {
    path: '',
    component: AuthorizationComponent,
    children: [
      {
        path: 'sign-in',
        component: FormLoginComponent,
        title: 'Đăng nhập tài khoản  - Mua sắm Online | Shopee Việt Nam'
      },
      {
        path: 'sign-up',
        component: FormSignUpComponent,
        title: 'Đăng ký ngay | Shopee Việt Nam'
      },
      {
        path: '',
        component: FormLoginComponent,
        title: 'Đăng nhập tài khoản  - Mua sắm Online | Shopee Việt Nam'
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorizationRoutingModule { }
