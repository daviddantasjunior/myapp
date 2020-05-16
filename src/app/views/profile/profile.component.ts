import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { StorageService } from 'src/app/services/storage.service';
import { Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as fromApp from '../../store/app.reducer';
import { Auth } from 'src/app/models/auth.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

  userSub: Subscription;
  isAuthenticated = false;
  auth: Observable<{ auth: Auth }>;
  userAuth: Auth;

  constructor(
    private router: Router,
    private storageService: StorageService,
    private store: Store<fromApp.AppState>
  ) { }

  async ngOnInit() {
    if (!this.storageService.getLocalUser())
      this.router.navigate(['/']);
    else {
      this.userSub = await this.store
      .select('auth')
      .pipe(map(authState => this.userAuth = authState.auth))
      .subscribe(user => {
        this.isAuthenticated = !!user;
      });
    }
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
