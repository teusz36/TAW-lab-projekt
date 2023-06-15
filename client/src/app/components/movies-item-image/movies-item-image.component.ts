import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'movies-item-image',
  templateUrl: './movies-item-image.component.html',
  styleUrls: ['./movies-item-image.component.css']
})
export class MoviesItemImageComponent implements OnInit {

  @Input() image?: string;

  constructor() { }

    ngOnInit(): void {
    }
}
