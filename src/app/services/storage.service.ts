import { Injectable } from '@angular/core';
import { LocalUser } from '../shared/local_user';
import { STORAGE_KEYS } from '../config/storage_keys.config';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getLocalUser(): LocalUser {
    // Gets the user to local storage
    let usr = localStorage.getItem(STORAGE_KEYS.localUser);
    if (usr != null) {
      return JSON.parse(usr);
    } else {
      return null;
    }
  }

  setLocalUser(obj: LocalUser) {
    // Adds the user to the local storage
    if (obj != null) {
      localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj));
    } else {
      localStorage.removeItem(STORAGE_KEYS.localUser);
    }
  }
}
