import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'movies-home',
  templateUrl: './movies-home.component.html',
  styleUrls: ['./movies-home.component.css']
})
export class MoviesHomeComponent implements OnInit {

  public filterText: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  getName($event: string): void {
	this.filterText = $event;
  }
}

