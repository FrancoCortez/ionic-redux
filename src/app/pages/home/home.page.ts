import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {RootStoreState, UserActions} from '../../store';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html'
})
export class HomePage implements OnInit, OnDestroy {
    constructor(private store: Store<RootStoreState.AppState>) {
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
    }

    public execute() {
        this.store.dispatch(UserActions.login({payload: {user: 'name'}}));
    }

}
