export class UserMovie {
  id?: number;
  userId: number;
  movieId: number;

  constructor(userId: number, movieId: number, id?:number) {
    this.userId = userId;
    this.movieId = movieId;
    if (id) this.id = id;
  }
}

