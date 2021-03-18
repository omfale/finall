import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpserviceService } from '../httpservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  post:any=[];
isradio:boolean=false;

 
  constructor(private service:HttpserviceService, private route:Router) { }

  ngOnInit() {
    this.getAllEmployee();
  }



getAllEmployee()
{
 this.service.getAllEmployee()
 .subscribe((response1)=>{
   console.log(response1);
   this.post=response1;
 })


}
ondelete(item){
  this.service.PostDataDelete(item.empid)
      .subscribe((Response4)=>{
        console.log(Response4);
        this.getAllEmployee();
})
}

onAddEmpolyee(){
  this.route.navigate(['/addemployee']);
}


onUpdatefromView(item){
  let obj = 
  {
  empid:item.empid,
  firstname:item.firstname,
  lastname:item.lastname,
  address:item.address,
  dob:item.dob,
  mobile:item.mobile,
  city:item.city
 
  }
  
      this.route.navigate(['/updateemployee'],{queryParams:obj});
    }
}




 

