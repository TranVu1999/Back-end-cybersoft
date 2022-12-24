import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Modules
import  {ComponentRoutingModule} from './component-routing.module';
// Components
import { ComponentComponent } from './component.component';
import {SelectBaseComponent} from './form/select-base/select-base.component';
import {SelectMultiComponent} from './form/select-multi/select-multi.component';
import {SelectSingleComponent} from './form/select-single/select-single.component';
import { SelectNormalComponent } from './form/select-normal/select-normal.component';

@NgModule({
    declarations: [
      ComponentComponent,
      SelectBaseComponent,
      SelectMultiComponent,
      SelectSingleComponent,
      SelectNormalComponent
    ],
    exports: [
      SelectBaseComponent,
      SelectMultiComponent,
      SelectSingleComponent,
      SelectNormalComponent
    ],
    imports: [
      CommonModule,
      ComponentRoutingModule
    ],
})
export class ComponentModule { }
