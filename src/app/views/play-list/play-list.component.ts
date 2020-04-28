import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.css']
})
export class PlayListComponent implements OnInit {
  movies: Observable<{ movies: Movie[] }>;

  constructor(
    private store: Store<{ playList: { movies: Movie[] } }>
  ) { }

  ngOnInit(): void {
    this.movies = this.store.select('playList');
  }

}
