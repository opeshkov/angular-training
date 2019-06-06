import { Component } from '@angular/core';

@Component({
  selector: 'app-file-sizes-list',
  templateUrl: './file-sizes-list.component.html',
  styleUrls: ['./file-sizes-list.component.scss']
})
export class FileSizesListComponent{

  public fileSizes: string[];

  constructor() {
    this.fileSizes = [];
  }

  addItem(input: HTMLInputElement) {
    if (!input.value || parseInt(input.value) < 0) return
    this.fileSizes.push(input.value);
    input.value = '';
  }
}
