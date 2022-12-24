import { Component, OnDestroy, OnInit} from '@angular/core';
// Components
import { SelectBaseComponent } from '../select-base/select-base.component';
// Models
import { OptionInterface } from 'src/app/model/option.interface';

@Component({
    selector: 'app-select-multi',
    templateUrl: './select-multi.component.html',
    styleUrls: ['../select-base/select-base.component.scss']
})
export class SelectMultiComponent extends SelectBaseComponent implements OnInit, OnDestroy {
    result: OptionInterface[] = [];

    override ngOnInit(): void {
        this.result = [
            { id: 1, title: 'AJIMAL' },
            { id: 2, title: 'AKUBA' },
            { id: 3, title: 'ALAMODEvn' }
        ];
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
        ];
    }

    // Functionalities
    checkIsChecked(option: OptionInterface): boolean {
        return this.result.some(selection => selection.id === option.id);
    }

    //  Handle Events
    handleChoseOption(option: OptionInterface): void {
        const idx = this.result.findIndex(selection => option.id === selection.id);
        if(idx === -1) {
            this.result.push(option);
        } else {
            const tempResult: OptionInterface[] = [];
            this.result.forEach(selection => {
                if(selection.id !== option.id) {
                    tempResult.push(selection);
                }
            });

            this.result = structuredClone(tempResult);
        }
    }

}
