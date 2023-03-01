import { Component, OnDestroy, OnInit} from '@angular/core';
// Components
import { SelectBaseComponent } from '../select-base/select-base.component';
// Models
import { OptionInterface } from 'src/app/model/option.interface';

@Component({
    selector: 'app-select-single',
    templateUrl: './select-single.component.html',
    styleUrls: ['../select-base/select-base.component.scss']
})
export class SelectSingleComponent extends SelectBaseComponent implements OnInit, OnDestroy {
    result: OptionInterface | null = null;

    override ngOnInit(): void {
        this.result = null;
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

    //  Handle Events
    handleChoseOption(option: OptionInterface): void {
        this.result = option;
        this. handleHideSelectionBox();
    }
}
