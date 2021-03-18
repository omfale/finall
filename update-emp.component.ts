
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpserviceService } from '../httpservice.service';

@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.css']
})
export class UpdateEmpComponent implements OnInit {
  list:any[]=[];

 
empid;
firstname:string="";
lastname:string="";
address:string="";
dob:string="";
mobile:string="";
city:string="";



  constructor(private service:HttpserviceService,private router:Router,private routes:ActivatedRoute) { }

  ngOnInit() {
    this.routes.queryParamMap
    .subscribe(query=>
      {
        this.empid=query.get("empid");
        

        this.firstname=query.get("firstname");
        this.lastname=query.get("lastname");
        this.address=query.get("address");
        this.mobile=query.get("mobile");
        this.dob=query.get("dob");
        this.city=query.get("city");
  

      }
      )
  }

  onfinalupdate()
  {

    let obj={
      empid:this.empid,
      
      firstname:this.firstname,
      lastname:this.lastname,
      address:this.address,
      dob:this.dob,
      city:this.city,
      mobile:this.mobile
   
     }
    this.service.PostDataUpdate
(obj)
.subscribe((response)=>{
  this.router.navigate(["/home"])
  console.log(response)

 // this.getAllEmp();

})
  }

}
