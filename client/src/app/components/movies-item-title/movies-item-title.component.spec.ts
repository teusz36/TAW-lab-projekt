import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesItemTitleComponent } from './movies-item-title.component';

describe('MoviesItemTitleComponent', () => {
  let component: MoviesItemTitleComponent;
  let fixture: ComponentFixture<MoviesItemTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesItemTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesItemTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
