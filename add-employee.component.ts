import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpserviceService } from '../httpservice.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  post1:any=[];

  
  empid;
  firstname;
  lastname;
  address;
  dob;
  mobile;
  city;


  constructor(private service:HttpserviceService,private Router:Router,private route:ActivatedRoute) { }

  ngOnInit() 
  {
    
  }



  



    
onaddData(inputfirstname,inputlastname,add,dob,mobile,city)
{

  

   let obj={

        firstname:inputfirstname,
       
        
        lastname:inputlastname,
        address:add,
        dob:dob,
        mobile:mobile,
        city:city
      
    }

 
this.firstname="";
this.lastname="";
this.address="";
this.dob="";
this.mobile="";
this.city="";








this.service.postdata(obj)
.subscribe((Response2)=>{
  console.log(Response2);

 // this.getAllEmp();
 this.Router.navigate(['/home']);
})
}

}
