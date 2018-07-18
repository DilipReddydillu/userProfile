import { Injectable, EventEmitter } from '@angular/core';
import {HttpClientModule, HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CookieService } from 'ngx-cookie-service';
import  'rxjs/add/operator/catch';
import  'rxjs/add/observable/throw';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ServiceService {
  constructor(private http: HttpClient, private cookie:CookieService) {

  }
  public dispValue = this.cookie.get('mobile') ? 'LogOut' : 'Login/Register';
  public userMobile = this.cookie.get('mobile');
  public roleVal = this.cookie.get('role');

    private userlogin = new BehaviorSubject<string>(this.dispValue);
    userCheck = this.userlogin.asObservable();
    changeUserCheck(userCheck: string) {
       console.log('userCheck:'+userCheck);
       this.userlogin.next(userCheck);
     }

     private role = new BehaviorSubject<string>(this.roleVal);
     userRole = this.role.asObservable();
     changeRole(userRole: string) {
        console.log('userRole:'+userRole);
        this.role.next(userRole);
      }

  register(data) {
      let body = JSON.stringify(data);
      console.log(data)
      let url = 'http://localhost:8080/api/registerUser/false';
      return this.http.post(url, body, httpOptions);
  }
  loginUser(data) {
      let body = JSON.stringify(data);
      console.log(data)
      let url = 'http://localhost:8080/api/loginUser';
      console.log(url)
      return this.http.post(url, body, httpOptions);
  }

  getProfile(userMobile,role) {
    console.log('getProfileuserMobile:'+userMobile+' getProfile roleVal:'+role);
      let url = 'http://localhost:8080/api/getProfile/'+userMobile+'/'+role;
      return this.http.get(url);
  };

  getProfileHistroy(mobile) {
    console.log(mobile)
      let url = 'http://localhost:8080/api/getProfileHistroy/'+mobile;
      return this.http.get(url);
  };

  getUsers() {
      let url = 'http://localhost:8080/api/getUsers';
      return this.http.get(url);
  };

  updateUser(data) {
    let url = 'http://localhost:8080/api/registerUser/true';
    return this.http.post(url,data);
  }
 saveProfile(profile,userMobile) {
      console.log(profile)
      console.log('saveProfile userMobile==>'+this.userMobile)
      let url = 'http://localhost:8080/api/saveProfile/'+userMobile;
      return this.http.post(url, profile,httpOptions)
   }
 downloadProfile(userMobile) {
      console.log(userMobile)
      let url = 'http://localhost:8080/api/downloadProfile/'+userMobile;
      return this.http.get(url)
   }
   saveAttachment(file) {
    console.log(file)
    let url = 'http://localhost:8080/api/saveFile';
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    return this.http.post(url, file, {headers: headers })
  }

  addJob(data) {
    let url = 'http://localhost:8080/api/addJob';
    return this.http.post(url,data);
  }

  logout(){

  }

}
