import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  rememberMe: boolean = false;

  constructor(private router: Router) {
    const remembered = localStorage.getItem('remembered');
    if (remembered) {
      window.location.href = '/user-list';
    }
  }

  login() {
    localStorage.setItem('username', this.username);

    if (this.rememberMe) {
      localStorage.setItem('remembered', 'true');
    }
    return (window.location.href = '/user-list');
  }
}
