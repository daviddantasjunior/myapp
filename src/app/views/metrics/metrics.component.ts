import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { Chart } from 'node_modules/chart.js';
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

  public pieChartLabels = ['Action', 'Adventure', 'Drama'];
  public pieChartData = [120, 150, 180];
  public pieChartType = 'pie';

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
      /*Promise.resolve(this.movieService.getAll()
        .then(movies => movies.forEach(movie => {
          let watch: Watch;
          watch = {
            image: movie.image,
            nameMovie: movie.name,
            users: this.getLast3Users(movie.id)
          }
          this.watched.push(watch);
        })));*/
      //this.getLast3Users(movieId);
      //this.getWatchedGenre();
    }
  }

  async getLast5Movies() {
    let userMovies: UserMovie[];
    let moviesAll: Movie[];
    Promise.resolve(await this.userMovieService.getLast5Movies(this.localUser.id)
      .then(
        movies => {
          userMovies = movies;
          userMovies.forEach(value => {
            if (this.moviesIds.length < 5 && this.moviesIds.indexOf(value.movieId) < 0) {
              this.moviesIds.push(value.movieId);
            }
          });
        })
    );

    Promise.resolve(await this.movieService.getMoviesByIds(this.moviesIds)
      .then(movies => {
        moviesAll = movies;
      })
    );

    this.last5Movies = this.mapOrder(moviesAll, this.moviesIds, 'id');
  }

  async getLast3Users(movieId: number) {
    let usersAll: User[];
    Promise.resolve(await this.userMovieService.getLast3Users(movieId)
      .then(
        movies => {
          this.userMoviesWatch = movies;
          this.userMoviesWatch.forEach(value => {
            if (this.usersIds.length < 3 && this.usersIds.indexOf(value.userId) < 0) {
              this.usersIds.push(value.userId);
            }
          });
        })
    );

    Promise.resolve(await this.userService.getUsersByIds(this.usersIds)
      .then(users => {
        usersAll = users;
      })
    );
    this.userMoviesWatch = [];
    this.usersIds = [];
    this.last3Users = usersAll;
  }

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
