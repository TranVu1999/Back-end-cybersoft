import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// components
import { AccountComponent } from './account.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      {
        path: 'profile',
        component: UserProfileComponent
      },
      {
        path: 'address',
        loadChildren: () => import('./modules/list-address/list-address.module').then(m => m.ListAddressModule)
      },
      {
        path: 'purchase',
        loadChildren: () => import('./modules/purchase/purchase.module').then(m => m.PurchaseModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule { }
