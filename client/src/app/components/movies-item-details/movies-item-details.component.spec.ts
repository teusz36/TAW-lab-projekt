import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesItemDetailsComponent } from './movies-item-details.component';

describe('MoviesItemDetailsComponent', () => {
  let component: MoviesItemDetailsComponent;
  let fixture: ComponentFixture<MoviesItemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesItemDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
