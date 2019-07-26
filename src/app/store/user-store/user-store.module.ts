import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {reducer} from './reducer';
import {UserStoreEffects} from './effects';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forFeature('user', reducer),
        EffectsModule.forFeature([UserStoreEffects])
    ]
})
export class UserStoreModule {
}
