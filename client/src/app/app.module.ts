import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { DataService } from "./services/data.service";
import { MoviesItemComponent } from './components/movies-item/movies-item.component';
import { MoviesItemTitleComponent } from './components/movies-item-title/movies-item-title.component';
import { MoviesItemImageComponent } from './components/movies-item-image/movies-item-image.component';
import { MoviesItemDetailsComponent } from './components/movies-item-details/movies-item-details.component';
import { SummaryPipe } from './pipes/summary.pipe';
import { AuthService } from "./services/auth.service";
import {FormsModule} from "@angular/forms";
import { AuthInterceptor } from './services/auth.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { EditMovieComponent } from './components/edit-movie/edit-movie.component';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import { MoviesHomeComponent } from './components/movies-home/movies-home.component';
import { FilterTextPipe } from './pipes/filter-text.pipe';
import { TitleFormatDirective } from './directives/title-format.directive';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MoviesItemComponent,
    MoviesItemImageComponent,
    MoviesItemTitleComponent,
    MoviesItemDetailsComponent,
    SummaryPipe,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    AddMovieComponent,
    EditMovieComponent,
    SearchBarComponent,
    MoviesHomeComponent,
    FilterTextPipe,
    TitleFormatDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthService,
    DataService,
    {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true
        }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
