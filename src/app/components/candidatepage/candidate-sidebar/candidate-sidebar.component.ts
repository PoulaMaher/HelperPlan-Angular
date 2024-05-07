import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, SimpleChanges } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../../../app.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { HttpClientModule } from '@angular/common/http';
import { ICandidate } from '../../../models/ICandidate';
import { IFiltercandidate } from '../../../models/ifiltercandidate';
import { FcandidateService } from '../../../services/fcandidate.service';

@Component({
  selector: 'app-candidate-sidebar',
  standalone: true,
  imports: [FormsModule,CommonModule,AppComponent,HttpClientModule,NgMultiSelectDropDownModule],
  templateUrl: './candidate-sidebar.component.html',
  styleUrl: './candidate-sidebar.component.css'
})
export class CandidateSidebarComponent implements OnInit {
  contractDropdownList: any = [];
  contractSelectedItems: any = [];
  languageDropdownList: any = [];
  languageSelectedItems: any = [];
  skillsDropdownList: any = [];
  skillsSelectedItems: any = [];
  dropdownSettings!: IDropdownSettings
  @Output() ontotalorder:EventEmitter<IFiltercandidate> = new EventEmitter();

  testing:ICandidate[]=[]
  testingfilter!:IFiltercandidate
  testingfilterclone!:IFiltercandidate
  myownfiltered!:ICandidate
  constructor(private mytestservice:FcandidateService) { }
  ngOnInit(): void {
    // this.contractDropdownList = [
    //   { item_id: 1, item_text: 'Mumbai' },
    //   { item_id: 2, item_text: 'Bangaluru' },
    //   { item_id: 3, item_text: 'Pune' },
    //   { item_id: 4, item_text: 'Navsari' },
    //   { item_id: 5, item_text: 'New Delhi' }
    // ];
    // this.contractSelectedItems = [
    //   { item_id: 3, item_text: 'Pune' },
    //   { item_id: 4, item_text: 'Navsari' }
    // ];
    this.languageDropdownList = [
      { item_id: 1, item_text: 'philipo' },
      { item_id: 2, item_text: 'arabic' },
      { item_id: 3, item_text: 'Mandarin Chinese' },
      { item_id: 4, item_text: 'Japanese' },
      { item_id: 5, item_text: 'Korean' },
      { item_id: 6, item_text:  'Cantonese Chinese' },
      { item_id: 7, item_text: 'hindi' },
      { item_id: 8, item_text: 'Vietnamese' },
      { item_id: 9, item_text: 'Taiwanese Hokkien' },
      { item_id: 10, item_text:  'Tagalog (Filipino)' },
      { item_id: 11, item_text: 'Thai' },
      { item_id: 12, item_text: 'Burmese' },
      { item_id: 13, item_text:  'Khmer (Cambodian)'},
      { item_id: 14, item_text: 'Malay' },

    ];

    this.languageSelectedItems = [

    ];
    this.skillsDropdownList = [
      { item_id: 1, item_text: 'Cleaning' },
      { item_id: 2, item_text: 'Cooking' },
      { item_id: 3, item_text: 'Laundry' },
      { item_id: 4, item_text: 'Ironing' },
      { item_id: 5, item_text: 'Childcare' },
      { item_id: 6, item_text: 'Elderly care' },
      { item_id: 7, item_text: 'Pet care' },
      { item_id: 8, item_text: 'Grocery shopping' },
      { item_id: 9, item_text: 'Organizing' },
      { item_id: 10, item_text: 'Household management' },
      { item_id: 11, item_text: 'Communication skills' },
      { item_id: 12, item_text: 'Time management' },
      { item_id: 13, item_text: 'Basic first aid' },
      { item_id: 14, item_text: 'Driving' },


    ];

    this.skillsSelectedItems = [

    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    this.testingfilter=this.mytestservice.testingfilter
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.mytestservice.setfiltered(this.testingfilter)
  }
  onItemSelect(item: any) {
    this.testingfilter.Language.push(item.item_text)
    this.filt()
 }
 onItemDeselect(item: any) {
  this.testingfilter.Language=this.testingfilter.Language.filter(lang=>lang!=item.item_text)
   this.filt()
 }
 onSelectAll(items: any) {
  items.forEach((item: { item_text: string; })=>{
    this.testingfilter.Language.push(item.item_text)
  })
   this.filt()
 }
 onDeselectAll(items: any)
 {
  this.testingfilter.Language.length=0
  this.filt()
 }
 /////for skills
 onItemSelect2(item: any) {
  this.testingfilter.Mainskills.push(item.item_text)
  this.filt()
}
onItemDeselect2(item: any) {
this.testingfilter.Mainskills=this.testingfilter.Mainskills.filter(main=>main!=item.item_text)
 this.filt()
}
onSelectAll2(items: any) {
items.forEach((item: { item_text: string; })=>{
  this.testingfilter.Mainskills.push(item.item_text)
})
 this.filt()
}
onDeselectAll2(items: any)
{
this.testingfilter.Mainskills.length=0
this.filt()
}
empty(){
  this.testingfilter.Mainskills.length=0
  this.testingfilter.Language.length=0
  this.testingfilter.Age=0
  this.testingfilter.Gender=''
  this.testingfilter.Jobtype=''
  this.testingfilter.Position=''
  this.testingfilter.Workexperience=0
  this.testingfilter.StartDate=new Date(2000, 0, 1);

 console.log(this.skillsSelectedItems)
this.filt()

}

  filt()
  {
    this.testingfilter.Ischange=!this.testingfilter.Ischange
    this.testingfilter.StartDate = new Date(this.testingfilter.StartDate);
     this.ontotalorder.emit(this.testingfilter)
     console.log(this.testingfilter)

  }






}
