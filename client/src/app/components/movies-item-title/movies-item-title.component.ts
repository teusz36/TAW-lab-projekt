import { Component, Input } from '@angular/core';

@Component({
  selector: 'movies-item-title',
  templateUrl: './movies-item-title.component.html',
  styleUrls: ['./movies-item-title.component.css']
})
export class MoviesItemTitleComponent {
  @Input() title?: string;
  @Input() id?: number;
}
