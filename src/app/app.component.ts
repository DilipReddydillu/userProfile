import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ServiceService } from './service.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  logInValue:string;
  role:string;
  constructor(private service: ServiceService, private router: Router, private cookieService: CookieService) { }
ngOnInit(): void {
  console.log(this.cookieService.get('mobile'))
  this.cookieService.get('mobile');
  this.service.userCheck.subscribe(userlogin => this.logInValue = userlogin)
  this.service.userRole.subscribe(role => this.role = role)
};

loginCall(){
  console.log("calllll")
  this.cookieService.delete("mobile");
  this.role = null
  this.router.navigate(['/','login']);
  this.service.logout();
}
}
