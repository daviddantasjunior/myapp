import { Movie } from '../../../models/movie.model';
import * as PlayListActions from './play-list.actions';

const initialState = {
  movies: [
    new Movie(1, 'Avangers', 'Action'),
    new Movie(2, 'Spiderman', 'Adventure'),
    new Movie(3, 'IT', 'Horror')
  ]
};

export function playListReducer(state = initialState, action: PlayListActions.AddMovie) {
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
