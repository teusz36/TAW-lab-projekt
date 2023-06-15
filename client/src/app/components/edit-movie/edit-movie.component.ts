import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

   public newEditedMovie = {
       id: '',
       title: '',
       year: '',
       image: '',
       description: ''
     };

     public logged?: boolean;
     public logout?: boolean;

     constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) {
     }


     ngOnInit(): void {
        let id: string = '';
        this.route.paramMap.subscribe((params: any) => {
            id = params.get('id');
        });
        this.dataService.getById(id).subscribe((res: any) => {
            this.newEditedMovie.id = res['id'];
            this.newEditedMovie.title = res['title'];
            this.newEditedMovie.year = res['year'];
            this.newEditedMovie.image = res['image'];
            this.newEditedMovie.description = res['description'];
        });
     }

     editMovie() {
        this.dataService.createOrUpdate(this.newEditedMovie).subscribe((result) => {
          this.router.navigate(['/'])
        })
     }
}
