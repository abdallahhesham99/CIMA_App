import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLogin: boolean = false;

  constructor(private _AuthService: AuthService,) {

    _AuthService.currentUser.subscribe((data) => {

      if (data != null) {

        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    })

  }

  logout() {
    this._AuthService.logout();
  }
  ngOnInit(): void {
  }

}