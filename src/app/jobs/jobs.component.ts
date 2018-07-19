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
  job = [{}];
  ngOnInit() {
    this.service.getJobs().subscribe(
        data => {
          let obj:any = data;
          if (obj != null && obj.length>0 ) {
              this.job = obj;
          }else{
            alert('No  Data Found.')
          }
        },
        error => {
          alert('Could Not Connect To Server! Try Again.')
        }
      );
  }

  apply(data){
    this.service.changeJob(data);
    this.router.navigate(['profile']);
  }
  addJob(){
    this.job.push({});
  }
  deleteRow(index){
    this.job.splice(index,1);
  };
 saveJobs(){
   console.log(this.job)
   this.service.addJob(this.job).subscribe(
       data => {
        alert('success')
       },
       error => {
         alert('Could Not Connect To Server! Try Again.')
       }
     );
 }
}
