import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie.model';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-movie-selection',
  templateUrl: './movie-selection.component.html',
  styleUrls: ['./movie-selection.component.css']
})
export class MovieSelectionComponent implements OnInit {

  movies: Movie[];

  constructor(
    private movieService: MovieService,
    private router: Router,
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
    if (!this.storageService.getLocalUser())
      this.router.navigate(['/']);
    else
      this.getAllMovies();
  }

  async getAllMovies() {
    this.movies = await this.movieService.getAll();
  }

}
