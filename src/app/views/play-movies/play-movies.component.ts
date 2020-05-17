import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { switchMap, map } from "rxjs/operators";
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';
import { StorageService } from 'src/app/services/storage.service';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post.model';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import { Auth } from 'src/app/models/auth.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-play-movies',
  templateUrl: './play-movies.component.html',
  styleUrls: ['./play-movies.component.css']
})
export class PlayMoviesComponent implements OnInit {

  @ViewChild('videoPlayer') videoplayer: ElementRef;
  movie: Movie = new Movie();
  posts: Post[];
  isAuthenticated = false;
  userAuth: Auth;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private storageService: StorageService,
    private store: Store<fromApp.AppState>,
    private movieService: MovieService,
    private postService: PostService
  ) { }

  ngOnInit() {
    if (!this.storageService.getLocalUser())
      this.router.navigate(['/']);
    else
      this.loadVideo();
      this.store
      .select('auth')
      .pipe(map(authState => this.userAuth = authState.auth))
      .subscribe(user => {
        this.isAuthenticated = !!user;
      });
  }

  private loadVideo() {
    this.route.paramMap.pipe(
      switchMap(params => this.movieService.getById(+params.get('id')))
    )
    .subscribe(
      (movie) => {
        this.movie = movie;
        this.getAllPosts();
      },
      (error) => alert('An error has occurred.')
    )
  }

  toggleVideo() {
    this.videoplayer.nativeElement.load();
    this.videoplayer.nativeElement.controls = true;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    let post: Post = {
      author: this.userAuth.name,
      text: form.value.inputPost,
      movieId: this.movie.id
    }

    this.postService.add(post);
    this.getAllPosts();

    form.reset();
  }

  getAllPosts() {
    Promise.resolve(this.postService.getByMovie(this.movie.id))
          .then(posts => this.posts = posts);
  }
}
