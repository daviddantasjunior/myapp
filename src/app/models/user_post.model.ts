export class UserPost {
  id?: number;
  userId: number;
  postId: number;

  constructor(userId: number, postId: number, id?:number) {
    this.userId = userId;
    this.postId = postId;
    if (id) this.id = id;
  }
}

