import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { Chart } from 'node_modules/chart.js';
import { Movie } from 'src/app/models/movie.model';
import { UserMovieService } from 'src/app/services/user_movie.service';
import { LocalUser } from 'src/app/shared/local_user';
import { UserMovie } from 'src/app/models/user_movie.model';
import { MovieService } from 'src/app/services/movie.service';


@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.css']
})
export class MetricsComponent implements OnInit {

  public pieChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public pieChartData = [120, 150, 180, 90];
  public pieChartType = 'pie';

  public localUser: LocalUser;
  public last5Movies: Movie[] = [];
  public moviesIds: number[] = [];

  constructor(
    private router: Router,
    private storageService: StorageService,
    private userMovieService: UserMovieService,
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.localUser = this.storageService.getLocalUser()
    if (!this.localUser)
      this.router.navigate(['/']);
    else {
      /*var myChart = new Chart("myChart", {
        type: 'bar',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });*/
      this.getLast5Movies();
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
