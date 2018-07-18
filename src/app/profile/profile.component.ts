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
fileData:File;
tech = ['node','angular','java','spring'];
urlVal:any;
formEditable:boolean;
userFilter: any = '';
fileArrList:any = [];
 curDate: number = Date.now();
  constructor(private _demoService: ServiceService, private router: Router,  private routeActive: ActivatedRoute,private cookieService: CookieService) { }

  ngOnInit() {
   this.urlVal = this.routeActive.snapshot.url;
   let jobdata = this.routeActive.snapshot.queryParams;
   let userMobile = this.cookieService.get('mobile');
   let role = this.cookieService.get('role');

    if (this.urlVal == "profiles") {
      this.formEditable = false;
    }else{
      this.formEditable = true;
    }
    if(jobdata.jobId != null){
      let job:any = jobdata;
      this.profile.push(job);
    }
  this._demoService.getProfile(userMobile,role).subscribe(
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

  addRow = function(){
    this.profile.push({});
  };
  deleteRow(index){
    this.profile.splice(index,1);
  };
  saveProfile(data){
    console.log(data);
    let userMobile = this.cookieService.get('mobile');
    data = JSON.stringify(data);
     console.log(data);
  this._demoService.saveProfile(data,userMobile).subscribe(
    data => {
      alert('success');
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
         this._demoService.saveAttachment(fd).subscribe(
             data => {
               alert('Success ..Attachment saved')
              },
             error => {
               alert('Falied ..Attachment save')
             }
           );

    }
}

showHistory(mobile){
  this.router.navigate(['profile-history', mobile]);
}

}
