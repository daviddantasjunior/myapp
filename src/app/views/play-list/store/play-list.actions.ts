import { Action } from '@ngrx/store';
import { Movie } from '../../../models/movie.model';

export const ADD_MOVIE = '[Play List] Add Movie';

export class AddMovie implements Action {
  readonly type = ADD_MOVIE;

  constructor(public payload: Movie) {}
}

export type PlayListActions =
  | AddMovie;
