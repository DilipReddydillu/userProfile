import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { ServiceService } from '../service.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
profile = [{
  jobId:'',
resourceName:'',
resourceEmail:'',
resourceNumber:'',
resourceTechnology:'',
resourceSpec:'',
resourceExp:'',
resourceVisaType:'',
resurceLocation:'',
resourceBillRate:'',
resourceAvailability:'',
client:'',
employerName:'',
employerEmail:'',
employerNumber:'',
comments:''
}];
newProfile = {
  jobId:'',
resourceName:'',
resourceEmail:'',
resourceNumber:'',
resourceTechnology:'',
resourceSpec:'',
resourceExp:'',
resourceVisaType:'',
resurceLocation:'',
resourceBillRate:'',
resourceAvailability:true,
client:'',
employerName:'',
employerEmail:'',
employerNumber:'',
comments:''
}
fileData:File;
tech = ['node','angular','java','spring'];
urlVal:any;
formEditable:boolean;
userFilter: any = '';
fileArrList:any = [];
 curDate: number = Date.now();
 jobdata;
 userMobile;
 role;
  constructor(private service: ServiceService, private router: Router,  private routeActive: ActivatedRoute,private cookieService: CookieService) { }

  ngOnInit() {
   this.urlVal = this.routeActive.snapshot.url;
   //let jobdata = this.routeActive.snapshot.queryParams;
    this.userMobile = this.cookieService.get('mobile');
    this.role = this.cookieService.get('role');
   this.service.jobData.subscribe(job => this.jobdata = job)

    if (this.urlVal == "profiles") {
      this.formEditable = false;
    }else{
      this.formEditable = true;
    }
    this.getProfileData();
  }

  addRow = function(){
    this.profile.push({});
  };
  deleteRow(index){
    this.profile.splice(index,1);
  };
  saveProfile(obj){
    console.log(obj);
    let arrData = [obj];
    let userMobile = this.cookieService.get('mobile');
    let  data = JSON.stringify(arrData);
     console.log(data);
  this.service.saveProfile(data,userMobile).subscribe(
    data => {
      alert('success');
      this.getProfileData();
    },
    error =>{
      alert('error')
    }
  );
  };

  downloadProfile(mobile){
    window.location.href = 'http://localhost:8080/api/downloadProfile/'+mobile;
  }

  fileChange(event, index) {
    const fd = new FormData();
    let fileList: FileList = event.target.files;
    console.log(fileList+":index:"+index)
    if(fileList.length > 0) {
        this.fileData = fileList[0];
         fd.append('index',index);
         fd.append('file', this.fileData,this.fileData.name);
         this.service.saveAttachment(fd).subscribe(
             data => {
               alert('Success ..Attachment saved')
              },
             error => {
               alert('Falied ..Attachment save')
             }
           );

    }
}

showHistory(value){
  this.router.navigate(['profile-history', value]);
}
getProfileData(){
this.service.getProfile(this.userMobile,this.role).subscribe(
    data => {
      let obj:any = data;
      if (obj != null && obj.length>0 ) {
          this.profile = obj;
          if(this.jobdata.jobId != null){
            this.profile.push(this.jobdata);
            this.service.changeJob({});
          }
      }else{
        if(this.jobdata.jobId != null){
          this.profile.push(this.jobdata);
          this.service.changeJob({});
        }else{
        alert('No  Data Found.')
      }
      }
    },
    error => {
      alert('Could Not Connect To Server! Try Again.')
    }
  );
}

}
