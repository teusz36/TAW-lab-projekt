import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";
import { Router } from "@angular/router";

@Component({
  selector: 'add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

   public newMovie = {
       title: '',
       year: '',
       image: '',
       description: ''
     };

     public logged?: boolean;
     public logout?: boolean;

     constructor(private dataService: DataService, private router: Router) {
     }


     ngOnInit(): void {
     }

     addMovie() {
        this.dataService.createOrUpdate(this.newMovie).subscribe((result) => {
          this.router.navigate(['/'])
        })
     }
}
