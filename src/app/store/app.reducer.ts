import { ActionReducerMap } from '@ngrx/store';
import * as fromAuth from '../views/auth/store/auth.reducer';

export interface AppState {
  auth: fromAuth.State;
}

// Adds all reducers
export const appReducer: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer
};
