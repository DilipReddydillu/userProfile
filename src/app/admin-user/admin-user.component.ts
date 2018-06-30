import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {
users:any;
constructor(private _demoService: ServiceService) { }

  ngOnInit() {
    this._demoService.getUsers().subscribe(
        data => {
          if (data != null ) {
              let obj:any = data;
              this.users = obj;
          }else{
            alert('No  Data Found.')
          }
        },
        error => {
          alert('Could Not Connect To Server! Try Again.')
        }
      );
  }

}
