import { UserMovie } from './user_movie.model';

export class User {
  id?: number;
  name: string;
  email: string;
  photo: string;
  countryId: number;
  user_movies: UserMovie[];

  constructor(name?: string, email?: string, photo?: string, countryId?: number, id?:number) {
    this.name = name;
    this.email = email;
    this.photo = photo;
    this.countryId = countryId;
    if (id) this.id = id;
    Object.defineProperties(this, {
      user_movies: {value: [], enumerable: false, writable: true }
    });
  }
}
