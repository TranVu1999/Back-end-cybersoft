import { Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
    selector: 'app-select-multi',
    templateUrl: './select-multi.component.html',
    styleUrls: ['./select-multi.component.scss']
})
export class SelectMultiComponent implements OnInit, OnDestroy {
    @ViewChild('mainElement') mainElement!: ElementRef;

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

    // Handle Events
    handleHideSelectionBox(): void {
        this.isShowSelectionsBox = false;
        this.handleClearListenerFunction();
    }

    handleShowSelectionBox(): void {
        this.isShowSelectionsBox = true;
        this.handleClearListenerFunction = this.renderer.listen('window', 'click', (e: Event) => {
            if(!this.mainElement.nativeElement.contains(e.target)) {
                this.handleHideSelectionBox();
                console.log('listener: ', 'SelectComponent');
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
