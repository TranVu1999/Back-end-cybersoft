import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-blueprint-sidebar',
    templateUrl: './blueprint-sidebar.component.html',
    styleUrls: ['./blueprint-sidebar.component.scss']
})
export class BlueprintSidebarComponent implements OnInit {

    itemTypeFocused = 'FooterRow'

    constructor() { }

    ngOnInit() {
    }

    // Handle Events
    handleChooseFooterItem(footerItemType: string): void {
        this.itemTypeFocused = footerItemType;
    }

}

