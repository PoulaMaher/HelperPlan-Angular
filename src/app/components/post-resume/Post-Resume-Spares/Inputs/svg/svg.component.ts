import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg',
  standalone: true,
  imports: [],
  templateUrl: './svg.component.html',
  styleUrl: './svg.component.css'
})
export class SvgComponent {
  @Input() svgIconHref : string = '';
}
