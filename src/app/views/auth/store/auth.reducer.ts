
import { Auth } from 'src/app/models/auth.model';
import * as AuthActions from './auth.actions';

export interface State {
  auth: Auth;
  authError: string;
  loading: boolean;
}

const initialState: State = {
  auth: null,
  authError: null,
  loading: false
};

export function authReducer(
  state = initialState,
  action: AuthActions.AuthActions
) {
  switch (action.type) {
    case AuthActions.LOGIN:
      const auth = new Auth(
        action.payload.email,
        action.payload.name,
        action.payload.userId
      );
      return {
        ...state,
        authError: null,
        auth: auth,
        loading: false
      };
    case AuthActions.LOGOUT:
      return {
        ...state,
        auth: null
      };
    case AuthActions.LOGIN_START:
      return {
        ...state,
        authError: null,
        loading: true
      };
    case AuthActions.LOGIN_FAIL:
      return {
        ...state,
        auth: null,
        authError: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
