import {createAction, props} from '@ngrx/store';

export const login = createAction('[login] Login', props<{ payload: any }>());
export const loginSuccess = createAction('[loginSuccess] Login Success', props<{ payload: any }>());
export const loginFailure = createAction('[loginFailure] Login Fail', props<{ payload: any }>());
