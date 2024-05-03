import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown'; // Import NgMultiSelectDropDownModule
import { MultipleSearchSelectComponent } from '../../post-resume/Post-Resume-Spares/Inputs/multiple-search-select/multiple-search-select.component';
import { SideBarServiceService } from './SideBarService/side-bar-service.service';
import { QueryParams } from './Query-Params/query-params';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    FormsModule,
    NgMultiSelectDropDownModule,
    MultipleSearchSelectComponent,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  SideBarServiceService: SideBarServiceService = new SideBarServiceService();
  queryParams: QueryParams = new QueryParams();
  @Output() ApplyChanges = new EventEmitter<QueryParams>();
  constructor() {}
}
