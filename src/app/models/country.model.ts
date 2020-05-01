import { User } from './user.model';

export class Country {
  id?: number;
  name: string;
  users: User[];

  constructor(name: string, id?:number) {
    this.name = name;
    if (id) this.id = id;
    Object.defineProperties(this, {
      users: {value: [], enumerable: false, writable: true }
    });
  }
}
