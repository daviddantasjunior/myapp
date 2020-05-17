import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { StorageService } from 'src/app/services/storage.service';
import { map } from 'rxjs/operators';
import * as fromApp from '../../store/app.reducer';
import { Auth } from 'src/app/models/auth.model';
import { CountryService } from 'src/app/services/country.service';
import { Country } from 'src/app/models/country.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  isAuthenticated = false;
  userAuth: Auth;
  country: Country;

  constructor(
    private router: Router,
    private countryService: CountryService,
    private storageService: StorageService,
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit() {
    if (!this.storageService.getLocalUser())
      this.router.navigate(['/']);
    else {
      this.store
      .select('auth')
      .pipe(map(authState => this.userAuth = authState.auth))
      .subscribe(user => {
        this.isAuthenticated = !!user;
        //Promise.resolve(this.countryService.getById(this.userAuth.countryId).then(country => { this.country = country; console.log(country) }))
      });
    }
  }
}
