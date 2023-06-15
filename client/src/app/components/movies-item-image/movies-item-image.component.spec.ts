import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesItemImageComponent } from './movies-item-image.component';

describe('MoviesItemImageComponent', () => {
  let component: MoviesItemImageComponent;
  let fixture: ComponentFixture<MoviesItemImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesItemImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesItemImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
