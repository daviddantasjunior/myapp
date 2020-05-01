import { Injectable } from '@angular/core';
import Dexie from 'dexie';

import { DexieService } from './dexie.service';
import { Country } from '../models/country.model';

export interface CountryWithID extends Country {
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  table: Dexie.Table<CountryWithID, number>;

  constructor(private dexieService: DexieService) {
    this.table = this.dexieService.table('country');
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
