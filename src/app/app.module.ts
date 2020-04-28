import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayListComponent } from './views/play-list/play-list.component';
import { playListReducer } from './views/play-list/store/play-list.reducer';

@NgModule({
  declarations: [
    AppComponent,
    PlayListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({playList: playListReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
