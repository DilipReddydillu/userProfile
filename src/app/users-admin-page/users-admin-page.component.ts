import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-users-admin-page',
  templateUrl: './users-admin-page.component.html',
  styleUrls: ['./users-admin-page.component.css']
})
export class UsersAdminPageComponent implements OnInit {
role:string;
  constructor(private service:ServiceService) { }

  ngOnInit() {
    this.service.userRole.subscribe(role => this.role = role)

  }

}
