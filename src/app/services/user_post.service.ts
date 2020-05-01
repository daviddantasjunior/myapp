import { Injectable } from '@angular/core';
import Dexie from 'dexie';

import { DexieService } from './dexie.service';
import { UserPost } from '../models/user_post.model';

export interface UserPostWithID extends UserPost {
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class UserPostService {
  table: Dexie.Table<UserPostWithID, number>;

  constructor(private dexieService: DexieService) {
    this.table = this.dexieService.table('user_post');
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
