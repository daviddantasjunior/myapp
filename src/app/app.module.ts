import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule, ActionReducer, MetaReducer, ActionReducerMap } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayListComponent } from './views/play-list/play-list.component';
import { localStorageSync } from 'ngrx-store-localstorage';
import * as fromApp from './store/app.reducer';

const reducers: ActionReducerMap<fromApp.AppState> = {
  playList: fromApp.appReducer.playList
};

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  console.log(reducer);
  return localStorageSync({ keys: ['playList'], rehydrate: true, storage: localStorage })(reducer);
}

const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  declarations: [
    AppComponent,
    PlayListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
