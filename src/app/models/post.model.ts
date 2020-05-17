export class Post {
  id?: number;
  author: string;
  text: string;
  movieId: number;

  constructor(author: string, text: string, movieId: number, id?:number) {
    this.author = author;
    this.text = text;
    this.movieId = movieId;
    if (id) this.id = id;
  }
}
