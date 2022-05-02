import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './employee.component.html',
  styles: [
  ]
})
export class EmployeeComponent implements OnInit 
{
res:any;
  constructor(private _httpclient:HttpClient) 
  {
  this._httpclient.get('https://dummy.restapiexample.com/api/v1/employees').subscribe(
    (posres)=>{this.res=posres;},
    (err)=>{alert('error');},
    ()=>{alert('task completed');}
    );

  }

  ngOnInit(): void {
  }

}
