import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Movie } from 'src/app/models/movie.model';
import { db, Movie as Mo } from 'src/app/database/appdb';

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
    this.clearDb();
    this.saveInDb();
  }

  async clearDb() {
    try {
      await Promise.all([db.movies.clear()]);
      console.log("Clearing database...");
    } catch (ex) {
        console.error(ex);
    }
  }

  async saveInDb() {
    await db.transaction('rw', db.movies, async function () {
      // Populate a contact
      let id = await db.movies.add(new Mo('David', 'Dantas'));

      console.log(`ID: ${id}`);
    });
  }

}
