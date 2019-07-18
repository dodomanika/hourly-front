import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'domi';
  password = '';

  constructor(
    private router: Router) {
  }

  ngOnInit() {
  }

  handleLogin() {
    console.log('login');
    this.router.navigate(['hours', 0]);
  }
}
