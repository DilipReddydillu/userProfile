import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterData' })
export class DataFilter implements PipeTransform  {
  transform(data: any, searchText:string, type:string): any {
    if (searchText && searchText.length > 0 && data.length > 0) {
        console.log("data before filter")
        console.log(data)
        console.log("searchText:"+searchText)
        let filteredData = [];

        if(type == 'user'){
        data.forEach(function(user){
          if( (user.userId && user.userId != null) && (user.userId.toString()).includes(searchText))
            filteredData.push(user)
          if( (user.userName && user.userName != null) && (user.userName.includes(searchText)))
            filteredData.push(user)
        })
      }

        if(type == 'profile'){
        data.forEach(function(profile){
          if( (profile.jobId && profile.jobId != null) && (profile.jobId.toString()).includes(searchText))
            filteredData.push(profile)
          if( (profile.resourceName && profile.resourceName != null) && (profile.resourceName.includes(searchText)))
            filteredData.push(profile)
          if( (profile.resourceTechnology && profile.resourceTechnology != null) && (profile.resourceTechnology.includes(searchText)))
            filteredData.push(profile)
        })
      }

        if(type == 'job'){
        data.forEach(function(job){
          if( (job.jobId && job.jobId != null) && (job.jobId.toString()).includes(searchText))
            filteredData.push(job)
          if( (job.date && job.date != null) && (job.date.includes(searchText)))
            filteredData.push(job)
        })
      }

        data = filteredData;
        console.log("data after filter")
        console.log(data)
    }
    return data;
 }
}
