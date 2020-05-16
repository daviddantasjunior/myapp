import { Injectable } from '@angular/core';
import { LocalUser } from '../shared/local_user';
import { STORAGE_KEYS } from '../config/storage_keys.config';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getLocalUser(): LocalUser {
    let usr = localStorage.getItem(STORAGE_KEYS.localUser);
    if(usr != null) {
        return JSON.parse(usr);
    } else {
        return null;
    }
  }

  setLocalUser(obj : LocalUser) {
      if(obj != null) {
          localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj));
      } else {
          localStorage.removeItem(STORAGE_KEYS.localUser);
      }
  }
}
