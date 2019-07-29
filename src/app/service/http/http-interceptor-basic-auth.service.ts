import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BasicAuthenticationService} from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor(
    private basicAuthorisationService: BasicAuthenticationService
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    /*const username = 'domi';
    const password = 'dummy';*/
    // const basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    const basicAuthHeaderString = this.basicAuthorisationService.getAuthenticatedToken();
    const username = this.basicAuthorisationService.getAuthenticatedUser();

    if (basicAuthHeaderString && username) {

      request = request.clone({
        setHeaders: {
          Authorization: basicAuthHeaderString
        }
      });
    }

    return next.handle(request);
  }
}
