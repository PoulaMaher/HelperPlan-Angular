import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  IDropdownSettings,
  NgMultiSelectDropDownModule,
} from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-multiple-search-select',
  standalone: true,
  imports: [NgMultiSelectDropDownModule],
  templateUrl: './multiple-search-select.component.html',
  styleUrl: './multiple-search-select.component.css',
})
export class MultipleSearchSelectComponent {
  @Input() Data: string[] = [];
  @Input() AllowSingleSelection: boolean = false;
  @Input() PlaceHolder: string = '';
  @Input() ChoicesLimit: number = Infinity;
  @Input() selectAllText: string = 'Select All';
  @Output() SelectedItemsChanged = new EventEmitter<any>();
  selectedItems: string[] = [];
  selectedItem: string = '';
  dropdownSettings: IDropdownSettings = {};
  selectedOptions: any;
  otherOption: any;
  ngOnInit() {
    this.selectedItems = [];
    this.dropdownSettings = {
      singleSelection: this.AllowSingleSelection,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: this.selectAllText,
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
  }
  OnDeleteAll() {
    this.selectedItems = [];
    this.SelectedItemsChanged.emit(this.selectedItems);
  }
  OnDelete(item: any) {
    let index = this.selectedItems.indexOf(item);
    this.selectedItems.splice(index, 1);
    this.SelectedItemsChanged.emit(
      this.AllowSingleSelection ? "" : this.selectedItems
    );
  }
  onItemSelect(item: any) {
    this.selectedItems.push(item);
    this.SelectedItemsChanged.emit(this.AllowSingleSelection ? item : this.selectedItems);
  }
  onSelectAll(items: any) {
    this.selectedItems = [...items];
    this.SelectedItemsChanged.emit(this.selectedItems);
  }
}
