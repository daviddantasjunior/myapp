import Dexie from 'dexie';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DexieService extends Dexie {
  constructor() {
    // Creating the database and its tables
    super('mini_netflix');
    this.version(1).stores({
      country: '++id, name',
      user: '++id, name, email, photo, countryId',
      genre: '++id, name',
      movie: '++id, name, description, image, video, genreId',
      user_movie: '++id, userId, movieId',
      post: '++id, author, text, movieId',
    });
  }
}
