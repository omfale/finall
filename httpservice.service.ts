import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  private Baseurl:string='http://localhost:8888'

  constructor(private http:HttpClient) { }


  getAllEmployee(){
 return (this.http.get(this.Baseurl+'/getallemployee'))
  }

  loginCheck(obj){
    return ( this.http.post(this.Baseurl+"/logincheck",obj));
   }

   PostDataDelete(empid)
{
 return (this.http.delete(this.Baseurl+"/deleteemployee/"+empid,{responseType:'text'}));

}


PostDataUpdate(obj)
{
  return (this.http.put(this.Baseurl+"/updateemployee",obj,{responseType:'text'}));
}


postdata(obj){
  return (this.http.post(this.Baseurl+"/addemployee",obj,{responseType:'text'}));
}

}
