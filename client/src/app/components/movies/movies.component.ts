import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {

  @Input() filterText: string = '';
  public items$: any;

  constructor(private service: DataService) {

  }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
      this.service.getAll().subscribe(response => {
        this.items$ = response;
    });
   }

}
