import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { ServiceService } from '../service.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-profile-history',
  templateUrl: './profile-history.component.html',
  styleUrls: ['./profile-history.component.css']
})
export class ProfileHistoryComponent implements OnInit {
profile;
  constructor(private service: ServiceService,private router: Router,  private route: ActivatedRoute,private cookieService: CookieService) { }
 userMobile;
 role;
  ngOnInit() {
    this.role = this.cookieService.get('role');
    this.route.params.subscribe( params => {
      console.log(params)
      this.getHistory(params.number)
    });
  }

  getHistory(mobile){
    console.log(mobile)
    this.service.getProfileHistroy(mobile).subscribe(
        data => {
          let obj:any = data;
          if (obj != null && obj.length>0 ) {
              this.profile = obj;
          }else{
            alert('No  Data Found.')
          }
        },
        error => {
          alert('Could Not Connect To Server! Try Again.')
        }
      );
      console.log(this.profile);
}
  backToProfiles(){
    this.router.navigate(['/profiles']);
  }
}
