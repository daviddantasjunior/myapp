import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Movie } from 'src/app/models/movie.model';
//import { db, Movie as Movies } from 'src/app/database/appdb';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.css']
})
export class PlayListComponent implements OnInit {
  movies: Observable<{ movies: Movie[] }>;
  auth: Observable<{ auth: User }>;

  constructor(
    private store: Store<{ 
      playList: { movies: Movie[] },
      auth: { auth: User }
   }>,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.movies = this.store.select('playList');
    this.auth = this.store.select('auth');
    console.log(this.auth);
    //this.clearDb();
    //this.saveInDb();
//    this.userService.add(new User('daviddantas', 'david@uesb.edu.br', 'url', 1, 1));

/*    this.userService.table.where({name: "daviddantas", email: 'david@uesb.edu.br'}).first(user => {
      console.log("Found David, UESB: " + JSON.stringify(user));
    }).catch(error => {
        console.error(error.stack || error);
    });
*/
    //console.log('Valor: '+ this.getUser());
  }

  async getUser() {
    return await this.userService.getByEmail('david@uesb.edu.br');
  }



  /*async clearDb() {
    try {
      await Promise.all([db.movies.clear()]);
      console.log("Clearing database...");
    } catch (ex) {
        console.error(ex);
    }
  }

  async saveInDb() {
    await db.transaction('rw', db.movies, async function () {
      // Populate a contact
      let id = await db.movies.add(new Movies('Avengers', 'Action'));

      console.log(`ID: ${id}`);
    });
  }*/

}
