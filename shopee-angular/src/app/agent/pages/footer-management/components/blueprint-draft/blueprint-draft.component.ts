import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-blueprint-draft',
    templateUrl: './blueprint-draft.component.html',
    styleUrls: ['./blueprint-draft.component.scss']
})
export class BlueprintDraftComponent implements OnInit {
    blueprint = [
        {
            footerLayout: 'footer-row',
            orderNumber: 2,
            footerItems: [
                { orderNumber: 1, type: 'paragraph' },
                { orderNumber: 2, type: 'paragraph' },
                { orderNumber: 3, type: 'paragraph' },
                { orderNumber: 4, type: 'paragraph' },
            ]
        },
        {
            orderNumber: 3,
            footerLayout: 'footer-row',
            footerItems: []
        }
    ];

    constructor() { }

    ngOnInit() {
    }

}
