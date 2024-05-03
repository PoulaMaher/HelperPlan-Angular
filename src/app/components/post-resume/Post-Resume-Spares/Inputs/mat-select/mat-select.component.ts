import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import {
  MatAutocompleteModule,
  MatAutocompleteSelectedEvent,
} from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

/**
 * @title Highlight the first autocomplete option
 */
@Component({
  selector: 'app-search-select',
  templateUrl: 'mat-select.component.html',
  styleUrl: 'mat-select.component.css',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
  ],
})
export class MatSelectComponent implements OnInit {
  InitialValue = new FormControl();
  @Input() PlaceHolder: string = '';
  @Input() class: string = '';
  @Input() Options: string[] = [];
  @Input() ReceivedValue: string = '';
  @Output() ValueSelected = new EventEmitter<string>();
  filteredOptions!: Observable<string[]>;
  ngOnInit() {
    this.filteredOptions = this.InitialValue.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
    if (this.ReceivedValue == null) {
      this.InitialValue.setValue(this.Options[0]);
    } else {
      this.InitialValue.setValue(this.ReceivedValue);
    }
    this.ValueSelected.emit(this.InitialValue.value);
  }
  optionSelected(event: MatAutocompleteSelectedEvent) {
    this.ValueSelected.emit(this.InitialValue.value);
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.Options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
