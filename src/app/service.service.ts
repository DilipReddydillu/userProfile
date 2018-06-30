import { Injectable, EventEmitter } from '@angular/core';
import {HttpClientModule, HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import  'rxjs/add/operator/catch';
import  'rxjs/add/observable/throw';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ServiceService {
  constructor(private http: HttpClient) {}

  register(data) {
      let body = JSON.stringify(data);
      console.log(data)
      let url = 'http://localhost:8585/api/registerUser';
      return this.http.post(url, body, httpOptions);
  }
  loginUser(data) {
      let body = JSON.stringify(data);
      console.log(data)
      let url = 'http://localhost:8585/api/loginUser';
      console.log(url)
      return this.http.post(url, body, httpOptions);
  }

  getProfile() {
      let url = 'http://localhost:8585/api/getProfile';
      return this.http.get(url);
  };
  getUsers() {
      let url = 'http://localhost:8585/api/getUsers';
      return this.http.get(url);
  };
  saveProfile(profile) {
      console.log(profile)
      let url = 'http://localhost:8585/api/saveProfile';
      var headers = new HttpHeaders();
      headers.append('Content-Type', 'application/form-data');
      headers.append('Accept', 'application/json');
      return this.http.post(url, profile, {headers: headers })
   }


}
