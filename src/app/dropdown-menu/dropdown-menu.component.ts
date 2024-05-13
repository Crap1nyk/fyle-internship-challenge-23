import { Component,Output,EventEmitter,Input} from '@angular/core';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss'],
})
export class DropdownMenuComponent {
  dropdownOpen = false; // Property to track the dropdown state
  @Output() pageSizeEvent = new EventEmitter<number>();
  @Input() pageSize: number = 10;

  ngOnChanges(changes: any) {
    if (changes.pageSize)
      this.pageSize = changes.pageSize.currentValue;
  }

  getSelectedPageSize(pageSize: number) {
    this.pageSizeEvent.emit(pageSize);
  }

  constructor() {}

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen; 
  }
}
