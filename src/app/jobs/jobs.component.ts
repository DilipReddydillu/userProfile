import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { ServiceService } from '../service.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  constructor(private service: ServiceService,private router: Router,  private route: ActivatedRoute,private cookieService: CookieService) { }
  job = {};
  ngOnInit() {
  }

 addJob(){
   console.log(this.job)
   this.service.addJob(this.job).subscribe(
       data => {
        alert('done')
        this.router.navigate(['profile']);
       },
       error => {
         alert('Could Not Connect To Server! Try Again.')
       }
     );
 }
}
