import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-play-movies',
  templateUrl: './play-movies.component.html',
  styleUrls: ['./play-movies.component.css']
})
export class PlayMoviesComponent implements OnInit {

  public movie: Movie = new Movie();
  @ViewChild('videoPlayer') videoplayer: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private storageService: StorageService,
    private movieService: MovieService
  ) { }

  async ngOnInit() {
    if (!this.storageService.getLocalUser())
      this.router.navigate(['/']);
    else
      await this.loadVideo();
  }

  private loadVideo() {
    this.route.paramMap.pipe(
      switchMap(params => this.movieService.getById(+params.get('id')))
    )
    .subscribe(
      (movie) => {
        this.movie = movie;
      },
      (error) => alert('An error has occurred.')
    )
  }

  toggleVideo() {
    this.videoplayer.nativeElement.load();
    this.videoplayer.nativeElement.controls = true;
  }
}
