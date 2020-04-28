import { ActionReducerMap } from '@ngrx/store';
import * as fromPlayList from '../views/play-list/store/play-list.reducer';

export interface AppState {
  playList: fromPlayList.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  playList: fromPlayList.playListReducer
};


