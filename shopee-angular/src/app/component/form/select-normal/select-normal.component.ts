import { Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
// Components
import { SelectBaseComponent } from '../select-base/select-base.component';
// Models
import { OptionInterface } from 'src/app/model/option.interface';

@Component({
    selector: 'app-select-normal',
    templateUrl: './select-normal.component.html',
    styleUrls: ['../select-base/select-base.component.scss']
})
export class SelectNormalComponent extends SelectBaseComponent implements OnInit, OnDestroy {
  result: OptionInterface | null = null;

  override ngOnInit(): void {
    this.result = null;
    this.data = [
      { id: 1, title: 'Mới' },
      { id: 2, title: 'Đã sử dụng' }
    ];
  }

  //  Handle Events
  handleChoseOption(option: OptionInterface): void {
      this.result = option;
      this. handleHideSelectionBox();
  }
}
