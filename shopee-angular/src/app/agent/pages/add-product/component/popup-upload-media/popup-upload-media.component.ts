import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup-upload-media',
  templateUrl: './popup-upload-media.component.html',
  styleUrls: ['./popup-upload-media.component.scss']
})
export class PopupUploadMediaComponent implements OnInit {

  currentTabIndex = 1;

  constructor() { }

  ngOnInit() {
  }

  // Handle Events
  handleChoseTab(indexTab: number): void {
    if(indexTab !== this.currentTabIndex) {
      this.currentTabIndex = indexTab
    }
  }

}
