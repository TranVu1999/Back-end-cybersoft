import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
// components
import { AccountComponent } from './account.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule
  ],
  declarations: [
    AccountComponent,
    SidebarComponent,
    UserProfileComponent
  ]
})
export class AccountModule { }
