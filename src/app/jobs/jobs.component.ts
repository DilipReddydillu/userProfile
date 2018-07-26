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
  newJob={resourceTechnology:'',resourceVisaType:'',createdBy:'',resourceExp:'',description:'',comments:''};
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
    this.router.navigate(['profiles']);
  }

 newJobData(value){
   console.log(value)
   let dataArr = [value];
   this.service.addJob(dataArr).subscribe(
       data => {
        alert('success')
        let obj:any = data;
        if (obj != null && obj.length>0 ) {
            this.job.push(obj);
        }else{
          alert('Could Not Fetch Data.')
        }
       },
       error => {
         alert('Could Not Connect To Server! Try Again.')
       }
     );
 }
}
