import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './myservice.service';
import {Product1} from './product1';
@Component({
  selector: 'app-root',
  templateUrl: './important.component.html',
  styles: [
  ]
})
export class ImportantComponent implements OnInit 
{
pinfo:Product1[];
prods:Product1[];

editrec:Product1=new Product1();
newrec:Product1=new Product1();
  constructor(private obj:MyserviceService) 
  { 
    this.obj.getprods().subscribe(posres=>{this.pinfo=posres;});
  }
  clearrec(p:Product1)
  {
    p.prodid="";
    p.prodname="";
    p.prodprice=null;
  }
 edit(pid:string)
 {
this.obj.getprod(pid).subscribe(
  (posres:any)=>{
    this.editrec=posres;
  });
 }
 modify(pinfo:Product1)
 {
this.obj.modifyprod(pinfo).subscribe(()=>{alert('record modified...')});
 }
delete(pid:string,index:number)
{
if(confirm("do you want to delete a record"))
{
  this.obj.deleteprod(pid).subscribe(()=>{this.prods.splice(index,1)});
}
}
saveprod()
{
this.obj.addprod(this.newrec).subscribe((res:string)=>{
  if(res=="success")
  {
    this.prods.push({...this.newrec});
    alert("prods info saved");
    this.clearrec(this.newrec);
  }
  else{
    
    document.getElementById("t1").focus();
  }
});
}
  ngOnInit(): void 
  {

  }

}
