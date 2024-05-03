import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { Options } from '@angular-slider/ngx-slider';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-ngx-slider',
  standalone: true,
  imports: [NgxSliderModule,FormsModule],
  templateUrl: './ngx-slider.component.html',
  styleUrl: './ngx-slider.component.css',
})
export class NgxSliderComponent implements OnChanges {
  @Input() value: number = 40;
  @Input() highValue: number = 60;
  @Input() floor: number = 0;
  @Input() ceil: number = 50;
  options: Options = {
    floor: this.floor,
    ceil: this.ceil,
  };
  @Output() ValueChanged = new EventEmitter<number> ();
  @Output() HighValueChanged = new EventEmitter<number> ();
  ngOnChanges(changes: SimpleChanges): void {
    this.options.ceil = changes['ceil'].currentValue
    this.options.floor = changes['floor'].currentValue
  }
  // ngOnChanges(changes: SimpleChanges): void {
  //   changes['stepsArray'].currentValue.forEach((item: any, index: any) => {
  //     this.options.stepsArray?.push({
  //       legend: item,
  //       value: index,
  //     });
  //   });
  // }
  // @Input() stepsArray: any = [];
  // @Input() showTicksValues: boolean = false;
  // options: Options = {
  //   showTicksValues: true,
  //   stepsArray: [],
  // };
  
}
