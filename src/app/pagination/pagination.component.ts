import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  @Input() totalRepo: number = 1;
  @Input() currentPageNumber: number = 1;

  @Output() newPageNumber = new EventEmitter<number>();

  getNewPageNumber(move: number) {
   const  updatedPageNumber:number = this.currentPageNumber+move
    if(updatedPageNumber>0&&updatedPageNumber<=this.totalRepo)
    this.newPageNumber.emit(updatedPageNumber);
  }

  ngOnChanges(changes: any) {
    if (changes.currentPageNumber)
      this.currentPageNumber = changes.currentPageNumber.currentValue;
  }
}