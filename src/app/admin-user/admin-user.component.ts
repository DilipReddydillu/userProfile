import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
//import {MyOwnCustomMaterialModule} from '../angularMaterial';
//import 'hammerjs';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {
users:any;
constructor(private service: ServiceService) { }

  ngOnInit() {
    this.service.getUsers().subscribe(
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

update(index){
  console.log(this.users[index]);
  if (index >= 0) {
    let obj = this.users[index]
    this.service.updateUser(obj).subscribe(
      data => {
        alert("user Blocked");
      },
      error => {
        this.users[index].blocked = false;
        alert("Error!!!");
        console.log(this.users[index])
      }
    )
  } else {
    alert("Error!!");
  }

}
}
