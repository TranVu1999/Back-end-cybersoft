import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterManagementComponent } from './footer-management.component';

const routes: Routes = [
  {
    path: '',
    component: FooterManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FooterManagementRoutingModule { }
