import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { fromPromise } from  'rxjs/observable/fromPromise';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import {RequestOptions} from '@angular/http';
// import { of } from 'rxjs/observable/of';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/concatMap';

@Injectable()
export class ProfileService { 

  public chatid;

  public chatProfile = new BehaviorSubject({});
  currentChatProfile = this.chatProfile.asObservable();

  public searchData = new BehaviorSubject({});
  searchResult = this.searchData.asObservable();

  constructor(
    private http: HttpClient,
    private storage: Storage) {}

 getProfileDetails()  {
    let profileURL = "http://globstage.com/api?action=profile";

    return fromPromise(this.storage.get('current_user'))
    .map((jwt)=>{
      if (jwt) {
        return {
          headers: new HttpHeaders({
            "X-Jwt-Auth": "Bearer " + jwt.jwtToken
          })
        }
      }        
    }).concatMap((options) => {
      return this.http.get(profileURL, options)
    });    
  }

  editMyPageMain()  {
    let profileURL = "http://globstage.com/api?action=editmypagemain";
    let data = {lang: 'en'};

    return fromPromise(this.storage.get('current_user'))
    .map((jwt)=>{
        console.log(jwt);
        return {
            headers: new HttpHeaders({
                "X-Jwt-Auth": "Bearer " + jwt.jwtToken
              }),
        };
        
    }).concatMap((options) => {
      return this.http.post(profileURL, data, options)
    });
    
  }

  getMessages()  {
    let profileURL = "http://globstage.com/api?action=getwrittenfriends";

    return fromPromise(this.storage.get('current_user'))
    .map((jwt)=>{
      console.log(jwt);
        return {
            headers: new HttpHeaders({
                "X-Jwt-Auth": "Bearer " + jwt.jwtToken
              }),
        };
        
    }).concatMap((options) => {
      return this.http.post(profileURL, {}, options)
    });
    
  }

  getFriends()  {
    let profileURL = "http://globstage.com/api?action=getFriends";

    return fromPromise(this.storage.get('current_user'))
    .map((jwt)=>{
      console.log(jwt);
        return {
            headers: new HttpHeaders({
                "X-Jwt-Auth": "Bearer " + jwt.jwtToken
              }),
        };
        
    }).concatMap((options) => {
      return this.http.post(profileURL, {}, options)
    });
    
  }

  getSearch(searchresult): Observable<any> {
    let profileURL = "http://globstage.com/api?action=search";
    return fromPromise(this.storage.get('current_user'))
    .map((jwt)=>{
      console.log(jwt);
        return {
            headers: new HttpHeaders({
                "X-Jwt-Auth": "Bearer " + jwt.jwtToken
              }),
        };
        
    }).concatMap((options) => {
      return this.http.post(profileURL, searchresult, options)
    });
    
  }

  getNews()  {
    let profileURL = "http://globstage.com/api?action=news";

    return fromPromise(this.storage.get('current_user'))
    .map((jwt)=>{
      console.log(jwt);
        return {
            headers: new HttpHeaders({
                "X-Jwt-Auth": "Bearer " + jwt.jwtToken
              }),
        };
        
    }).concatMap((options) => {
      return this.http.post(profileURL, {}, options)
    });
    
  }


  saveInterests(user): Observable<any> {
    let registerURL = 'http://globstage.com/api?action=editInterests';

    return fromPromise(this.storage.get('current_user'))
    .map((jwt)=>{
      console.log(jwt);
        return {
            headers: new HttpHeaders({
                "X-Jwt-Auth": "Bearer " + jwt.jwtToken
              }),
        };
        
    }).concatMap((options) => {
      return this.http.post(registerURL, user, options)
    });
      
  }

  sendMessages(message): Observable<any> {
    let registerURL = 'http://globstage.com/api?action=write_message';

    return fromPromise(this.storage.get('current_user'))
    .map((jwt)=>{
      console.log(jwt);
        return {
            headers: new HttpHeaders({
                "X-Jwt-Auth": "Bearer " + jwt.jwtToken
              }),
        };
        
    }).concatMap((options) => {
      return this.http.post(registerURL, message, options)
    });
      
  }

  getChat(chatid){
    let profileURL = "http://globstage.com/api?action=messages";
    this.chatid = chatid;
    

    return fromPromise(this.storage.get('current_user'))
    .map((jwt)=>{
      console.log(jwt);
        return {
            headers: new HttpHeaders({
                "X-Jwt-Auth": "Bearer " + jwt.jwtToken
              }),
        };        
    }).concatMap((options) => {
      return this.http.post(profileURL, {'from_user_id':chatid}, options)
    });  
      
  }
  getPins()  {
    let profileURL = "http://globstage.com/api?action=getPins";

    return fromPromise(this.storage.get('current_user'))
    .map((jwt)=>{
      console.log(jwt);
        return {
            headers: new HttpHeaders({
                "X-Jwt-Auth": "Bearer " + jwt.jwtToken
              }),
        };
        
    }).concatMap((options) => {
      return this.http.post(profileURL, {}, options)
    });
    
  }


  setChatProfile(profile){
    this.chatProfile.next(profile);
  }

  setsearchData(searchRes){
    this.searchData.next(searchRes);
  }

}

export interface Profile  {
    "user_email": String,
    "user_name": String,
  }
