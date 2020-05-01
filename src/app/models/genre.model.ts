import { Movie } from './movie.model';

export class Genre {
  id?: number;
  name: string;
  movies: Movie[];

  constructor(name: string, id?:number) {
    this.name = name;
    if (id) this.id = id;
    Object.defineProperties(this, {
      movies: {value: [], enumerable: false, writable: true }
    });
  }
}
