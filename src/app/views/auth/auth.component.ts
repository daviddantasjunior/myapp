import { Component, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import * as fromApp from '../../store/app.reducer';
import * as AuthActions from './store/auth.actions';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(
    private router: Router,
    private userService: UserService,
    private store: Store<fromApp.AppState>
  ) { }

  private userAuthentication: boolean = false;
  showMenuEmitter = new EventEmitter<boolean>();

  ngOnInit(): void {

  }

  async onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;

    // TODO IN SERVICE
    /*this.store.dispatch(
      new AuthActions.LoginStart({ email })
    );*/

    await this.userService.login(email);

    form.reset();
  }
}
