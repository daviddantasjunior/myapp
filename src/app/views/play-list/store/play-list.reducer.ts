import { Movie } from '../../../models/movie.model';
import * as PlayListActions from './play-list.actions';

export interface State {
  movies: Movie[];
}

const initialState: State = {
  movies: [
    new Movie('Avangers', 1, 1),
    new Movie('Spiderman', 2, 2),
    new Movie('IT', 3, 3)
  ]
};

export function playListReducer(
  state: State = initialState,
  action: PlayListActions.PlayListActions) {
  switch (action.type) {
    case PlayListActions.ADD_MOVIE:
      return {
        ...state,
        movies: [...state.movies, action.payload]
      };
    default:
      return state;
  }
}
