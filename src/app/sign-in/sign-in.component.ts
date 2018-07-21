import { Component ,Input,Output, OnChanges } from '@angular/core';
import { ServiceService } from '../service.service';
import {Observable} from 'rxjs/Rx';
import { CookieService } from 'ngx-cookie-service';
// import {WebStorageService} from 'angular-webstorage-service';
import {Router,ActivatedRoute} from '@angular/router';
//import { CookieService } from 'ngx-cookie-service';
// import { ToastsManager,ToastOptions  } from 'ng5-toastr/ng5-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent  {
  mobileNumber:number;
  passwordVal:string;
  loginFail:false;
  loginPage:true;
    public pattern_mobile = /([0-9]){10}/g;
    constructor(private _demoService: ServiceService, private router: Router, private cookieService: CookieService,  private route: ActivatedRoute) { }
    ngOnInit(): void {
      this._demoService.changeUserCheck('Login/Register');
      this.cookieService.delete('role');
 };
 onSubmit = function(){
    let obj = {mobile:this.mobileNumber,password:this.passwordVal};
      this._demoService.loginUser(obj).subscribe(
          data => {
                console.log(data)
                if (data != null) {
                  if(data.blocked == true){
                    this.userBlocked = true;
                  }else{
                  this.cookieService.set('mobile',obj.mobile);
                    this._demoService.changeUserCheck('LogOut')
                  if (data.role == 'ADMIN') {
                    this.cookieService.set('role','ADMIN');
                    this._demoService.changeRole('ADMIN');
                    this.router.navigate(['/','details']);
                  }else if(data.role == 'USER'){
                    this.cookieService.set('role','USER');
                    this._demoService.changeRole('USER');
                    this.router.navigate(['/','details']);
                  }
                }
                }else{
                  this.loginFail = true;
                  this._demoService.changeRole(null);
                }
              },
          error => {
              this.loginFail = true;
              this._demoService.changeRole(null);
          }
      );
  }


}
