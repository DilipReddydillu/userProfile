import { Component ,Input,Output, OnChanges } from '@angular/core';
import { ServiceService } from '../service.service';
import {Observable} from 'rxjs/Rx';
import {WebStorageService} from 'angular-webstorage-service';
import {Router,ActivatedRoute} from '@angular/router';
//import { CookieService } from 'ngx-cookie-service';
import { ToastsManager,ToastOptions  } from 'ng5-toastr/ng5-toastr';
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
    constructor(private _demoService: ServiceService, private router: Router,  private route: ActivatedRoute) { }
    ngOnInit(): void {
 };
 onSubmit = function(){
    let obj = {number:this.mobileNumber,pswd:this.passwordVal};
      this._demoService.loginUser(obj).subscribe(
          data => {
                console.log(data)
                if (data != null &&  data.length > 0) {
                  if (data == 'admin') {
                    this.router.navigate(['/','admin']);
                  }else if(data == 'user'){
                    this.router.navigate(['/','profile']);
                  }
                }else{
                  this.loginFail = true;
                }
              },
          error => {
              this.loginFail = true;
          }
      );
  }


}
