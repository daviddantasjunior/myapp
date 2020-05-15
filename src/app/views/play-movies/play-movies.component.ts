import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-play-movies',
  templateUrl: './play-movies.component.html',
  styleUrls: ['./play-movies.component.css']
})
export class PlayMoviesComponent implements OnInit {

  public movie: User = new User();

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.loadVideo();
  }

  private loadVideo() {
    this.route.paramMap.pipe(
      switchMap(params => this.userService.getById(+params.get('id')))
    )
    .subscribe(
      (movie) => {
        this.movie = movie;
        console.log(this.movie);
      },
      (error) => alert('Ocorreu um erro no servidor, tente mais tarde.')
    )

  }

}
