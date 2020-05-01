import { Injectable } from '@angular/core';
import Dexie from 'dexie';

import { DexieService } from './dexie.service';
import { Genre } from '../models/genre.model';

export interface GenreWithID extends Genre {
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  table: Dexie.Table<GenreWithID, number>;

  constructor(private dexieService: DexieService) {
    this.table = this.dexieService.table('genre');
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
