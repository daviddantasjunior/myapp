import { Component, OnInit, OnDestroy } from '@angular/core';
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

  ngOnInit(): void {
    const test = this.findUser('david@uesb.edu.br');
    if (!test)
      this.userService.add(new User('daviddantas', 'david@uesb.edu.br', 'url', 1, 1));
  }

  async onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;

    // TODO
    /*this.store.dispatch(
      new AuthActions.LoginStart({ email })
    );*/


    const auth = /*JSON.stringify(*/await this.userService.getByEmail(email)/*)*/;
    if (auth) {
      this.router.navigate(['/play-list']);
      /*this.store.dispatch(
        new AuthActions.LOGIN({
          email: auth.email,
          name: auth.name,
          userId: auth.id 
        });
      );*/
    }
    else console.log('Not found');
    console.log(auth);
    form.reset();
  }

  async findUser(email: string): Promise<string> {
    return this.userService.getByEmail(email);
  }

}
