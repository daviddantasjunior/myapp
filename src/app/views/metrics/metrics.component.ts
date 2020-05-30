import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { Movie } from 'src/app/models/movie.model';
import { UserMovieService } from 'src/app/services/user_movie.service';
import { LocalUser } from 'src/app/shared/local_user';
import { UserMovie } from 'src/app/models/user_movie.model';
import { MovieService } from 'src/app/services/movie.service';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

export interface Watch {
  image: string;
  nameMovie: string;
  users: Promise<User[]>
}

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.css']
})
export class MetricsComponent implements OnInit {

  public localUser: LocalUser;
  public last5Movies: Movie[] = [];
  public last3Users: User[] = [];
  public moviesIds: number[] = [];
  public usersIds: number[] = [];
  public userMoviesWatch: UserMovie[];
  public watched: Watch[];

  constructor(
    private router: Router,
    private storageService: StorageService,
    private userMovieService: UserMovieService,
    private movieService: MovieService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.localUser = this.storageService.getLocalUser()
    if (!this.localUser)
      this.router.navigate(['/']);
    else {
      this.getLast5Movies();
    }
  }

  async getLast5Movies() {
    let userMovies: UserMovie[];
    let moviesAll: Movie[];
    // Search the movies watched by the logged in user
    Promise.resolve(await this.userMovieService.getLast5Movies(this.localUser.id)
      .then(
        movies => {
          userMovies = movies;
          userMovies.forEach(value => {
            // Take only the ids of the last 5 movies
            if (this.moviesIds.length < 5 && this.moviesIds.indexOf(value.movieId) < 0) {
              this.moviesIds.push(value.movieId);
            }
          });
        })
    );

    // Search the 5 movies from the ids
    Promise.resolve(await this.movieService.getMoviesByIds(this.moviesIds)
      .then(movies => {
        moviesAll = movies;
      })
    );

    // Sort the 5 movies from the most recently watched
    this.last5Movies = this.mapOrder(moviesAll, this.moviesIds, 'id');
  }

  // Sort movies
  mapOrder(array: any, order: any, key: any) {
    array.sort((a: any, b: any) => {
      var A = a[key], B = b[key];

      if (order.indexOf(A) > order.indexOf(B)) {
        return 1;
      } else {
        return -1;
      }

    });
    return array;
  };

}
