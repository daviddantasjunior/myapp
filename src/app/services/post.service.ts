import { Injectable } from '@angular/core';
import Dexie from 'dexie';

import { DexieService } from './dexie.service';
import { Post } from '../models/post.model';

export interface PostWithID extends Post {
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  table: Dexie.Table<PostWithID, number>;

  constructor(private dexieService: DexieService) {
    this.table = this.dexieService.table('post');
  }

  getAll() {
    return this.table.toArray();
  }

  add(data) {
    return this.table.add(data);
  }

  update(id, data) {
    return this.table.update(id, data);
  }

  remove(id) {
    return this.table.delete(id);
  }
}
