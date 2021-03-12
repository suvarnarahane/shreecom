import { HttpClient, HttpHeaders } from '@angular/common/http';
import { findReadVarNames } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { setActionValue } from 'sweetalert/typings/modules/state';

@Component({
  selector: 'app-addmission',
  templateUrl: './addmission.component.html',
  styleUrls: ['./addmission.component.css']
})
export class AddmissionComponent implements OnInit {

  constructor(private http:HttpClient) { }
  myurl = "https://shreecomedu.000webhostapp.com/student.php"
 mydata:any=[]
  ngOnInit(): void {
this.selectData()

  }
selectData()
{
  this.http.get(this.myurl).subscribe(data=>{
    console.log(data);
    this.mydata=data
    
  })

 
}
save(data:NgForm){ 
       
  let myobje = {'fname':data.value.fname}

    this.http.post(this.myurl,myobje).subscribe(result=>{
    console.log(result);    
 })
 
}
}
