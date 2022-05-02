import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './shoppingsite.component.html',
  styles: [
  ]
})
export class ShoppingsiteComponent implements OnInit
 {
   res:any;
   pagenumb:number=0;

  constructor(private _httpclient:HttpClient)
   {
     this._httpclient.get('http://fakestoreapi.com/products').subscribe(
       (posres:any)=>{this.res=posres;},
       ()=>{alert('task completed');});
    }

  ngOnInit(): void {
  }

}
