import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from './product';
@Component({
  selector: 'app-root',
  templateUrl: './add.component.html',
  styles: [
  ]
})
export class AddComponent implements OnInit 
{
  res:any;
 pinfo:Product=new Product();
 constructor(private _httpclient:HttpClient) 
  {
    this._httpclient.get('http://localhost:3000/friends').subscribe((posres:any)=>{this.res=posres;});
  }
save()
{
  alert(this.pinfo);
  this._httpclient.post('http://localhost:3000/friends',this.pinfo).subscribe(()=>{alert('task completed');
this.pinfo.id=null;
this.pinfo.name="";});
}
delete(id:number)
{
  this._httpclient.delete('http://localhost:3000/friends').subscribe((posres)=>{alert('rows deleted')});
}

  ngOnInit(): void {
  }

}
