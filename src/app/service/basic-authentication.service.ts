import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) {
  }

  executeAuthenticationService(username, password) {
    const basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    const headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    });

    return this.http.get<AuthenticationBean>(
      'http://localhost:8080/basicauth',
      {headers}
    ).pipe(
      map(
        data => {
          sessionStorage.setItem('authenticatedUser', username);
          return data;
        }
      )
    );
  }

  createBasicAuthorizationString() {
    const username = 'domi';
    const password = 'dummy';

    const basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    return basicAuthHeaderString;
  }
}

export class AuthenticationBean {
  constructor(
    public message: string
  ) {
  }
}
