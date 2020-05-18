import { Injectable } from '@angular/core';
import Dexie from 'dexie';

import { DexieService } from './dexie.service';
import { UserMovie } from '../models/user_movie.model';

export interface UserMovieWithID extends UserMovie {
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class UserMovieService {
  table: Dexie.Table<UserMovieWithID, number>;

  constructor(private dexieService: DexieService) {
    this.table = this.dexieService.table('user_movie');
    this.table.mapToClass(UserMovie);
  }

  async getLast5Movies(id: number) {
    return await this.table.where('userId').equals(id).distinct().reverse().toArray();
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
