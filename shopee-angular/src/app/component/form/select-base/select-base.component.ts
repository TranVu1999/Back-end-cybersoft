import { Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';
// Models
import { OptionInterface } from 'src/app/model/option.interface';

@Component({
    selector: 'app-select-base',
    template: 'Select single base'
})
export class SelectBaseComponent implements OnInit, OnDestroy {
    @ViewChild('mainElement') mainElement!: ElementRef;

    data: OptionInterface[] = [];
    isShowSelectionsBox = false;
    isShowFormAddNewProperty = false;

    constructor(
        private renderer: Renderer2
    ) { }

    ngOnInit() {

    }

    ngOnDestroy(): void {
        this.handleClearListenerFunction();
    }

    // Functionalities
    prepareData(): void {
    }

    // Handle Events
    handleHideSelectionBox(): void {
        this.isShowSelectionsBox = false;
        this.handleClearListenerFunction();
    }

    handleShowSelectionBox(): void {
        this.isShowSelectionsBox = true;
        this.handleClearListenerFunction = this.renderer.listen('window', 'click', (e: Event) => {
            console.log('listener: ', this.mainElement.nativeElement.contains(e.target));
            if(!this.mainElement.nativeElement.contains(e.target)) {
                this.handleHideSelectionBox();
            }
        })
    }

    handleHideFormAddNewProperty(): void {
        this.isShowFormAddNewProperty = false;
    }

    handleShowFormAddNewProperty(): void {
        this.isShowFormAddNewProperty = true;
    }

    handleClearListenerFunction(): void {}



}
