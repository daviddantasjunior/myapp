import { UserMovie } from './user_movie.model';

export class Movie {
  id?: number;
  name: string;
  description: string;
  image: string;
  video: string;
  genreId: number;
  user_movies: UserMovie[];

  constructor(name: string, description: string, image: string, video: string, genreId: number, id?:number) {
    this.name = name;
    this.description = description;
    this.image = image;
    this.video = video;
    this.genreId = genreId;
    if (id) this.id = id;
    Object.defineProperties(this, {
      user_movies: {value: [], enumerable: false, writable: true }
    });
  }
}
