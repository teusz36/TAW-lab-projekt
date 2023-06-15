import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'movies-item',
  templateUrl: './movies-item.component.html',
  styleUrls: ['./movies-item.component.css']
})
export class MoviesItemComponent implements OnInit {

  @Input() image?: string;
  @Input() title?: string;
  @Input() id?: number;

  ngOnInit() {
    }
}
