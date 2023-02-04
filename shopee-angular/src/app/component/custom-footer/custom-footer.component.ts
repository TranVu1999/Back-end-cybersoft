import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-custom-footer',
    templateUrl: './custom-footer.component.html',
    styleUrls: ['./custom-footer.component.scss']
})
export class CustomFooterComponent implements OnInit {

    isShowBlueprintInput = false;

    constructor() { }

    ngOnInit() {
    }

    // Handle Events
    handleShowBlueprintInput(): void {
        this.isShowBlueprintInput = !this.isShowBlueprintInput;

    }

}
