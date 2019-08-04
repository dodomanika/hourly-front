import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {BasicAuthenticationService} from '../service/basic-authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'in28minutes';
  password = '';
  invalidLogin = false;
  errorMessage = 'Invalid Credentials'

  constructor(
    private router: Router,
    private basicAuthenticationService: BasicAuthenticationService) {
  }

  ngOnInit() {
  }

  handleJWTAuthLogin() {
    this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['hours', 0]);
          this.invalidLogin = false;
        },

        // tslint:disable-next-line:no-shadowed-variable
        error => {
          console.log(error);
          this.invalidLogin = true;
        }
      );
  }

  handleBasicAuthLogin() {
    this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['hours', 0]);
          this.invalidLogin = false;
        },

        // tslint:disable-next-line:no-shadowed-variable
        error => {
          console.log(error);
          this.invalidLogin = true;
        }
      );
  }
}
