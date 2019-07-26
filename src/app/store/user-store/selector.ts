import {createFeatureSelector, createSelector} from '@ngrx/store';
import {State} from './state';
import {UserLogin} from '../../models/user-login.model';

export const selectUserState = createFeatureSelector<State>('user');

export const selectUserList = createSelector(
    selectUserState,
    (state: State): UserLogin[] => state.userList
);

export const selectUser = createSelector(
    selectUserState,
    (state: State): UserLogin => state.user
);

export const selectUserError = createSelector(
    selectUserState,
    (state: State): any => state.error
);

export const selectUserIsLoader = createSelector(
    selectUserState,
    (state: State): boolean => state.isLoader
);

export const selectUserIsLoading = createSelector(
    selectUserState,
    (state: State): boolean => state.isLoading
);
