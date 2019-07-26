import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as featureActions from './actions';
import { of, Observable } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Action } from '@ngrx/store';
@Injectable()
export class UserStoreEffects {
    constructor(private actions$: Actions) {}

    login$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(featureActions.login),
        mergeMap(action => of(action)
          .pipe(
            map(login => featureActions.loginSuccess({payload: login})),
            catchError(error => of(featureActions.loginFailure( {payload: error} )))
          ))
        )
      );

}
