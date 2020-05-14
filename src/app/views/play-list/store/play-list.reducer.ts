import { Movie } from '../../../models/movie.model';
import * as PlayListActions from './play-list.actions';

export interface State {
  movies: Movie[];
}

const initialState: State = {
  movies: [
    new Movie('Avangers', 'image', 'video', 1, 1),
    new Movie('Spiderman', 'image', 'video', 2, 2),
    new Movie('IT', 'image', 'video', 3, 3)
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
