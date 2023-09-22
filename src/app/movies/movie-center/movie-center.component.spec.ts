import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCenterComponent } from './movie-center.component';

describe('MovieCenterComponent', () => {
  let component: MovieCenterComponent;
  let fixture: ComponentFixture<MovieCenterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieCenterComponent]
    });
    fixture = TestBed.createComponent(MovieCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
