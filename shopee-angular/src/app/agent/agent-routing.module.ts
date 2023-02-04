import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentComponent } from './agent.component';

const routes: Routes = [
  {
    path: '',
    component: AgentComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/add-product/add-product.module').then(m => m.AddProductModule)
      },
      {
        path: 'footer-management',
        loadChildren: () => import('./pages/footer-management/footer-management.module').then(m => m.FooterManagementModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule { }
