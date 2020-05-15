import { Injectable, EventEmitter } from '@angular/core';
import Dexie from 'dexie';

import { DexieService } from './dexie.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

export interface UserWithID extends User {
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userLogged: boolean = false;
  table: Dexie.Table<UserWithID, number>;
  showMenuEmitter = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private dexieService: DexieService
  ) {
    this.table = this.dexieService.table('user');
  }

  async getAll() {
    return await this.table.toArray();
  }

  async login(email: string) {
    let user = await this.table.where('email').equals(email).first();
    if (user) {
      this.userLogged = true;
      this.showMenuEmitter.emit(true);
      this.router.navigate(['/movie-selection']);
    } else {
      this.userLogged = false;
      this.showMenuEmitter.emit(false);
      this.router.navigate(['/signup']);
    }
  }

  async getByEmail(email: string) {
    let user = await this.table.where('email').equals(email).first()
    return JSON.stringify(user);
  }

  async getById(id: number): Promise<User> {
    return await this.table.where('id').equals(id).first()
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
