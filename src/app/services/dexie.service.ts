import Dexie from 'dexie';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DexieService extends Dexie {
  constructor() {
    super('mini_netflix');
    this.version(1).stores({
      post: '++id, text',
      country: '++id, name',
      user: '++id, name, email, photo, countryId',
      user_post: '++id, userId, postId',
      genre: '++id, name',
      movie: '++id, name, genreId',
      user_movie: '++id, userId, movieId',
    });
  }
}
