import { Action } from '@ngrx/store';
import { Movie } from '../../../models/movie.model';

export const ADD_MOVIE = 'ADD_MOVIE';

export class AddMovie implements Action {
  readonly type = ADD_MOVIE;
  payload: Movie;
}
