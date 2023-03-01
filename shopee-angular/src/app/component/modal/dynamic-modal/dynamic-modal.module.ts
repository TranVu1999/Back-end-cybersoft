import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { DynamicModalComponent } from './dynamic-modal.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [DynamicModalComponent],
    exports: [DynamicModalComponent]
})
export class DynamicModalModule { }
