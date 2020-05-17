import { Component, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(
    private router: Router,
    private userService: UserService,
    private storageService: StorageService,
  ) { }

  showMenuEmitter = new EventEmitter<boolean>();

  ngOnInit(): void {
    if (this.storageService.getLocalUser())
      this.router.navigate(['/movie-selection']);
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    this.userService.login(email);

    form.reset();
  }
}
