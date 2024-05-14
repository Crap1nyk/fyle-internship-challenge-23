import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  @Output() searchedTextEvent = new EventEmitter<string>();

  getSearchText(searchedText: string) {
    this.searchedTextEvent.emit(searchedText);
  }
}