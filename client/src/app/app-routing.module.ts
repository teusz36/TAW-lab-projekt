import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from "./components/movies/movies.component";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { EditMovieComponent } from './components/edit-movie/edit-movie.component';
import { MoviesHomeComponent } from './components/movies-home/movies-home.component';
import { MoviesItemDetailsComponent } from "./components/movies-item-details/movies-item-details.component";
import { AuthGuard } from "./services/auth.guard";

const routes: Routes = [
  {
  	path: '',
  	component: MoviesHomeComponent,

    },
    {
    path: 'movies/detail/:id',
    component: MoviesItemDetailsComponent,
    canActivate: [AuthGuard]
    },
    {
    path: 'login',
    component: LoginComponent
    },
    {
    	path: 'signup',
    	component: SignupComponent
    },
    {
      path: 'add',
      component: AddMovieComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'edit/:id',
      component: EditMovieComponent,
      canActivate: [AuthGuard]
    }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
