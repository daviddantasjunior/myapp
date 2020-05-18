import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayListComponent } from './play-list.component';
import { StoreModule, ActionReducer, MetaReducer, ActionReducerMap } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import * as fromApp from '../../store/app.reducer';
import { RouterTestingModule } from '@angular/router/testing';

const reducers: ActionReducerMap<fromApp.AppState> = {
  playList: fromApp.appReducer.playList,
  auth: fromApp.appReducer.auth
};

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({ keys: ['playList', 'auth'], rehydrate: true, storage: localStorage })(reducer);
}

const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];


describe('PlayListComponent', () => {
  let component: PlayListComponent;
  let fixture: ComponentFixture<PlayListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        StoreModule.forRoot(reducers, { metaReducers })
      ],
      declarations: [ PlayListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
