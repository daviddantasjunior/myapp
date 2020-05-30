import { Injectable, EventEmitter } from '@angular/core';
import Dexie from 'dexie';

import { DexieService } from './dexie.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { LocalUser } from '../shared/local_user';
import { StorageService } from './storage.service';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as AuthActions from '../views/auth/store/auth.actions';
import { CountryService } from './country.service';
import { Country } from '../models/country.model';

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
  countries: Country[];

  constructor(
    private router: Router,
    private dexieService: DexieService,
    private countryService: CountryService,
    private storageService: StorageService,
    private store: Store<fromApp.AppState>
  ) {
    this.table = this.dexieService.table('user');
  }

  async getAll() {
    return await this.table.toArray();
  }

  async login(email: string) {
    /*
     * Log in to the application if the user is already registered,
     * otherwise, go to the signup screen
     */
    let user = await this.table.where('email').equals(email).first();
    if (user) {
      this.countries = await this.countryService.getAll();
      let local_user: LocalUser = {
        id: user.id,
        email: user.email,
        name: user.name,
        photo: user.photo,
        country: this.countries[user.countryId - 1].name
      }
      this.store.dispatch(new AuthActions.Login({
        email: user.email,
        name: user.name,
        photo: user.photo,
        userId: user.id,
        country: this.countries[user.countryId - 1].name
      }));
      this.storageService.setLocalUser(local_user);
      this.userLogged = true;
      this.showMenuEmitter.emit(true);
      this.router.navigate(['/movie-selection']);
    } else {
      this.userLogged = false;
      this.showMenuEmitter.emit(false);
      this.router.navigate(['/signup']);
    }
  }

  logout() {
    // Delete the store and return to the login screen
    this.storageService.setLocalUser(null);
    this.store.dispatch(new AuthActions.Logout());
    this.router.navigate(['/']);
  }

  async getUsersByIds(id: number[]): Promise<User[]> {
    return await this.table.where('id').anyOf(id).toArray();
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
