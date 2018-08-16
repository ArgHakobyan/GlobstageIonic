import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { catchError, retry } from 'rxjs/operators';
// import { appConfig } from '../../app/app.config';


@Injectable()
export class UserService {

  // urlOnlyForOauth = appConfig.apiOauth;
  // apiUrl = appConfig.apiUrl;

  // private regURL = "http://glogstage/api/register";

  constructor(
    private http: HttpClient
  ) { }

  register(user): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type":  "application/json"
      })
    };
    let registerURL = 'http://globstage.com/api?action=register';
    return this.http.post(registerURL, user, httpOptions)
      .pipe(
        // catchError(this.handleError('addHero', user))
      );
  }

  login(user){
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type":  "application/json"
      })
    };
    let loginURL = 'http://api-globstage.atero.solutions/v1//users/token';
    return this.http.post(loginURL, user, httpOptions)
      .pipe(
        // catchError(this.handleError('addHero', user))
      );
  }

}
