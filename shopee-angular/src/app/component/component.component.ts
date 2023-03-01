import { Component, OnInit, ViewContainerRef } from '@angular/core';
// Services
import { DynamicModalService } from './modal/dynamic-modal/dynamic-modal.service';

@Component({
    selector: 'app-component',
    templateUrl: './component.component.html',
    styleUrls: ['./component.component.scss']
})
export class ComponentComponent implements OnInit {

    constructor(
        private modalService: DynamicModalService,
        private viewContainerRef: ViewContainerRef
    ) {
    }

    ngOnInit() {
    }

    openModal() {
        this.modalService.setRootViewContainerRef(this.viewContainerRef);
        this.modalService.addDynamicComponent('modal title', 'modal text');
    }

}
