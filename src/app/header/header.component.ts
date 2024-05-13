import { Component, Input } from '@angular/core';
import { Userinfo } from '../models/userinfo.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() userinfo: Userinfo = new Userinfo('', '', '', '', '', '', 0);
}
