import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from "../../services/data.service";
import { AuthService } from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'movies-item-details',
  templateUrl: './movies-item-details.component.html',
  styleUrls: ['./movies-item-details.component.css']
})
export class MoviesItemDetailsComponent implements OnInit {

  public image = '';
  public title?: string = '';
  public year?: string;
  public description?: string;
  public id?: string | undefined;

  constructor(private dataService: DataService, public authService: AuthService, private route: ActivatedRoute, private router: Router) {
    }


    ngOnInit() {
    	let id: string = '';
    	this.route.paramMap
      	.subscribe((params: any) => {
        	id = params.get('id');
      	});
    	this.dataService.getById(id).subscribe((res: any) => {
      	this.image = res['image'];
        this.title = res['title'];
        this.year = res['year'];
        this.description = res['description'];
    	});

      }

  delete() {
    let id: string = '';
    this.route.paramMap.subscribe((params: any) => {
        id = params.get('id');
    });
    this.dataService.deleteById(id);
    this.router.navigate(['/']);
    }

    editMovie() {
    let id: string = '';
        this.route.paramMap.subscribe((params: any) => {
            id = params.get('id');
        });
      this.router.navigate(['/edit/' + id]);
    }

}
