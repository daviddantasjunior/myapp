import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayMoviesComponent } from './play-movies.component';
import { StoreModule, ActionReducer, MetaReducer, ActionReducerMap } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import * as fromApp from '../../store/app.reducer';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

const reducers: ActionReducerMap<fromApp.AppState> = {
  playList: fromApp.appReducer.playList,
  auth: fromApp.appReducer.auth
};

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({ keys: ['playList', 'auth'], rehydrate: true, storage: localStorage })(reducer);
}

const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

describe('PlayMoviesComponent', () => {
  let component: PlayMoviesComponent;
  let fixture: ComponentFixture<PlayMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        StoreModule.forRoot(reducers, { metaReducers })
      ],
      declarations: [ PlayMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
