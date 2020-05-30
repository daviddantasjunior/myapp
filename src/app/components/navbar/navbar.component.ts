import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showMenu: boolean = false;

  constructor(
    private userService: UserService,
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
    // Checks whether to display the navbar
    this.userService.showMenuEmitter.subscribe(
      show => this.showMenu = show
    );
    if (this.storageService.getLocalUser())
      this.showMenu = true;
  }

  logout() {
    // Delete the store and return to the login screen
    this.userService.logout();
    this.showMenu = false;
  }

}
