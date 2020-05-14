import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayMoviesComponent } from './play-movies.component';

describe('PlayMoviesComponent', () => {
  let component: PlayMoviesComponent;
  let fixture: ComponentFixture<PlayMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
