import { RepoInfo } from '../models/repoInfo.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() repoInfo: RepoInfo= new RepoInfo("",0,"",[]);
}