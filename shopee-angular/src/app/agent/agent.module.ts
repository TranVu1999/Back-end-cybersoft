import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentComponent } from './agent.component';
import { AgentRoutingModule } from './agent-routing.module';
// Components
import { HeaderComponent } from './layouts/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    AgentRoutingModule
  ],
  declarations: [
    AgentComponent,
    HeaderComponent
  ]
})
export class AgentModule { }
