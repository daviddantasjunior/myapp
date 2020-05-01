import { UserMovie } from './user_movie.model';

export class Movie {
  id?: number;
  name: string;
  genreId: number;
  user_movies: UserMovie[];

  constructor(name: string, genreId: number, id?:number) {
    this.name = name;
    this.genreId = genreId;
    if (id) this.id = id;
    Object.defineProperties(this, {
      user_movies: {value: [], enumerable: false, writable: true }
    });
  }
}
