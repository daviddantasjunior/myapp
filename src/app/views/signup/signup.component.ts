import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  async onSignup(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const { email, username, country } = form.value;
    await this.userService.add(new User(username, email, 'photo', country, null));
    this.router.navigate(['/play-list']);
  }

}
