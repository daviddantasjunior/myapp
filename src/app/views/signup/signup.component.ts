import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { Country } from 'src/app/models/country.model';
import { CountryService } from 'src/app/services/country.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  countries: Country[];

  constructor(
    private router: Router,
    private userService: UserService,
    private countryService: CountryService,
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
    if (this.storageService.getLocalUser())
      this.router.navigate(['/movie-selection']);
    else
      this.getAllCountries();
  }

  onSignup(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const { email, username, country } = form.value;
    this.userService.add(new User(username, email, '../../../assets/profile-netflix.png', country, null));
    this.userService.login(email);
  }

  async getAllCountries() {
    this.countries = await this.countryService.getAll();
  }

}
