import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Modules
import { ReactiveFormsModule } from '@angular/forms';
import { FooterManagementRoutingModule } from './footer-management-routing.module';
// Components
import { FooterManagementComponent } from './footer-management.component';
import { BlueprintSidebarComponent } from './components/blueprint-sidebar/blueprint-sidebar.component';
import { BlueprintInputComponent } from './components/blueprint-input/blueprint-input.component';
import { BlueprintDraftComponent } from './components/blueprint-draft/blueprint-draft.component';

@NgModule({
    imports: [
        CommonModule,
        FooterManagementRoutingModule,
        ReactiveFormsModule
    ],
    declarations: [
        FooterManagementComponent,
        BlueprintSidebarComponent,
        BlueprintInputComponent,
        BlueprintDraftComponent
    ]
})
export class FooterManagementModule { }
