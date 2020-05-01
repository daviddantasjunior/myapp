import { UserPost } from './user_post.model';

export class Post {
  id?: number;
  text: string;
  user_posts: UserPost[];

  constructor(text: string, id?:number) {
    this.text = text;
    if (id) this.id = id;
    Object.defineProperties(this, {
      user_posts: {value: [], enumerable: false, writable: true }
    });
  }
}
