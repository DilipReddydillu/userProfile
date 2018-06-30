import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
profile = [{
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
 formEditable = false;

  constructor(private _demoService: ServiceService,  private route: ActivatedRoute) { }

  ngOnInit() {
   this.urlVal = this.route.snapshot.url;
    if (this.urlVal == "profiles") {
      this.formEditable = true;
    }

  this._demoService.getProfile().subscribe(
      data => {
        if (data != null ) {
            let obj:any = data;
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

  addRow = function(index){
    this.profile.push({});
  };
  deleteRow(index){
    this.profile.splice(index,1);
  };
  saveProfile(data){
    console.log(data);
    const fd = new FormData();
     fd.append('profile', data);
     fd.append('uploadFile',   this.fileData,   this.fileData.name);

  this._demoService.saveProfile(fd).subscribe(
    data => {
alert('success');
    },
    error =>{
      alert('error')
    }
  );
  };

  fileChange(event) {
    let fileList: FileList = event.target.files;
    console.log(fileList)
    if(fileList.length > 0) {
        this.fileData = fileList[0];
    }
};

}
