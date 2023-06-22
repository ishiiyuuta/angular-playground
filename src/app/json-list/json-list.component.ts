import { Component, OnInit } from '@angular/core';
// import jsonData from '../../data.json';

@Component({
  selector: 'app-json-list',
  templateUrl: './json-list.component.html',
  styleUrls: ['./json-list.component.scss']
})
export class JsonListComponent implements OnInit {
  jsonData = {
    "id1": "Value 1",
    "id2": "Value 2",
    "id3": "Value 3",
    "id4": "Value 4",
    "id5": "Value 5"
  }
  items: { key: string, value: string }[] = Object.entries(this.jsonData)
    .map(([key, value]) => ({ key, value }));

  selectedItems: string[] = [];
  searchTerm: string = '';

  constructor() { }

  ngOnInit(): void { }

  selectItem(item: string): void {
    if (this.isSelected(item)) {
      this.selectedItems = this.selectedItems.filter(i => i !== item);
    } else {
      this.selectedItems.push(item);
    }
  }

  isSelected(item: string): boolean {
    return this.selectedItems.includes(item);
  }
}
