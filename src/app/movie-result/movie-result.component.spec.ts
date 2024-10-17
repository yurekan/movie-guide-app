import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieResultComponent } from './movie-result.component';

describe('MovieResultComponent', () => {
  let component: MovieResultComponent;
  let fixture: ComponentFixture<MovieResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieResultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
