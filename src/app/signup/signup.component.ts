import { Component  } from '@angular/core';
import { ServiceService } from '../service.service';
import {Observable} from 'rxjs/Rx';
import { FormControl } from '@angular/forms';
import {Router} from '@angular/router';
//import { ToastsManager } from 'ng5-toastr/ng5-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  userName:string;
  emailId:string;
  mobileNumber:number;
  passwordVal:string
  passwordVal2:string
  secQuestion:string;
    constructor(private _demoService: ServiceService, private router: Router) {
         }
    ngOnInit() {
  }
  onSubmit = function(){
    let obj = {userName:this.userName,email:this.emailId,mobile:this.mobileNumber,secQ:this.secQuestion,password:this.passwordVal, pswd2:this.passwordVal2}
    console.log(obj);
    if (obj.password == obj.pswd2) {
      this._demoService.register(obj).subscribe(
        data => {
          this.router.navigate(['/', 'login']);
        },
        error => {
          alert("could not register! try again..");
        }
      )
    }else{
      alert("Password Miss Match");
    }
  }
}
