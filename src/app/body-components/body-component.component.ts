
import { Component,Input } from '@angular/core';
@Component({
  selector: 'app-body',
  templateUrl: './body-component.component.html',
  styleUrls: ['./body-component.component.scss'],
})
export class BodyComponent {
  @Input() counterArray: any;
}