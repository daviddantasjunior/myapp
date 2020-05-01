import { Injectable } from '@angular/core';
import Dexie from 'dexie';

import { DexieService } from './dexie.service';
import { User } from '../models/user.model';

export interface UserWithID extends User {
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  table: Dexie.Table<UserWithID, number>;

  constructor(private dexieService: DexieService) {
    this.table = this.dexieService.table('user');
  }

  async getAll() {
    return await this.table.toArray();
  }

  async add(data) {
    return await this.table.add(data);
  }

  async update(id, data) {
    return await this.table.update(id, data);
  }

  async remove(id) {
    return await this.table.delete(id);
  }
}
