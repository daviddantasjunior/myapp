import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PlayListComponent } from './play-list.component';



@NgModule({
  declarations: [PlayListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: PlayListComponent }])
  ],
  providers: []
})
export class PlayListModule { }
