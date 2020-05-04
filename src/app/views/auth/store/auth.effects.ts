/*import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
//import { HttpClient } from '@angular/common/http';
//import { environment } from '../../../environments/environment';

import * as AuthActions from './auth.actions';
import { UserService } from 'src/app/services/user.service';

export interface AuthResponseData {
  email: string;
  registered?: boolean;
}

@Injectable()
export class AuthEffects {
  @Effect()
  authLogin = this.actions$.pipe(
    ofType(AuthActions.LOGIN_START),
    switchMap((authData: AuthActions.LoginStart) => {
      return this.userService.getByEmail(authData.payload.email)
        .then(resData =>
         new AuthActions.Login({
              email: resData.email,
              userId: resData.id,
              name: resData.name
            });
          ).catch(errorRes => {
            let errorMessage = 'Error auth';
            console.error(errorMessage)
            return of(new AuthActions.LoginFail(errorMessage));
          })
        );
        });
      };

  @Effect({ dispatch: false })
  authSuccess = this.actions$.pipe(
    ofType(AuthActions.LOGIN),
    tap(() => {
      this.router.navigate(['/play-list']);
    })
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private userService: UserService
  ) {}
}*/
