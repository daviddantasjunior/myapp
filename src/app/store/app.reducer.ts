import { ActionReducerMap } from '@ngrx/store';
import * as fromPlayList from '../views/play-list/store/play-list.reducer';
import * as fromAuth from '../views/auth/store/auth.reducer';

export interface AppState {
  playList: fromPlayList.State;
  auth: fromAuth.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  playList: fromPlayList.playListReducer,
  auth: fromAuth.authReducer
};


