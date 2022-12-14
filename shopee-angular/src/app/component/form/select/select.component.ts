import { Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
// Models
import { OptionInterface } from 'src/app/model/option.interface';

@Component({
    selector: 'app-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit, OnDestroy {
    @ViewChild('mainElement') mainElement!: ElementRef;

    data: OptionInterface[] = [];
    result: OptionInterface | null = null;
    isShowSelectionsBox = false;
    isShowFormAddNewProperty = false;

    constructor(
        private renderer: Renderer2
    ) { }

    ngOnInit() {
        this.prepareData();

    }

    ngOnDestroy(): void {
        this.handleClearListenerFunction();
    }

    // Functionalities
    prepareData(): void {
        this.data = [
            { id: 1, title: 'AJIMAL' },
            { id: 2, title: 'AKUBA' },
            { id: 3, title: 'ALAMODEvn' },
            { id: 4, title: 'ALICE TO' },
            { id: 5, title: 'AMADO' },
            { id: 6, title: 'ANLY' },
            { id: 7, title: 'ANN CHERY' },
            { id: 8, title: 'ANN SARA' },
            { id: 9, title: 'ANNACOCO' },
            { id: 10, title: 'AJIMAL' }
        ]
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

    handleChoseOption(option: OptionInterface): void {
        this.result = option;
        this. handleHideSelectionBox();
    }

    handleClearListenerFunction(): void {}



}
