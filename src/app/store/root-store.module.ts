import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {UserStoreModule} from './user-store';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        UserStoreModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        StoreDevtoolsModule.instrument({
            maxAge: 25 // Retains last 25 states
        })
    ]
})
export class RootStoreModule {
}
