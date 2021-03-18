import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpserviceService } from '../httpservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  EMAIL_PATTERN = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"
  + "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
  
  incorrect:string='';
  logindetails;
  constructor(private httpservice:HttpserviceService,private router:Router) { }

  ngOnInit() {
  }
  onSubmit(f){
    console.log("Email Id "+f.value.email);
    console.log("Email Id "+f.value.password);
    let obj={
      email:f.value.email,
      password:f.value.password
    }
    this.httpservice.loginCheck(obj)   
    .subscribe((response)=>{

      console.log(response);
      //let msg=(<string>response.msg);
      this.logindetails=(<any>response);
      //console.log("Messge is "+msg);
      if(this.logindetails.msg==="Valid User"){
        
        sessionStorage.setItem("username",this.logindetails.userobj.username);
        this.router.navigate(['/home']);

      }else{
        this.incorrect=this.logindetails.msg;
      }

    }) 


  }

}
