import { Injectable } from '@angular/core';
import Dexie from 'dexie';

import { DexieService } from './dexie.service';
import { Movie } from '../models/movie.model';

export interface MovieWithID extends Movie {
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  table: Dexie.Table<MovieWithID, number>;

  constructor(private dexieService: DexieService) {
    this.table = this.dexieService.table('movie');
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
