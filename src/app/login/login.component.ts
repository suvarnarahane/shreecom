import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs'; 
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:any
  password:any
  constructor(private router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    
  }

  login(data:NgForm){
    
    console.log(data);
    
    if(data.value.username=='admin'&& data.value.password=='123')

   {
    this.router.navigate(['/home']);
   }
   else{
    this.toastr.error( 'Login Failed!','ERROR!');
   }
   
      
    
  
    
   
  }

}
