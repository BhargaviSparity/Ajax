import { Injectable } from '@angular/core';
import {Product1} from './product1';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import{environment} from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService 
{
  restapiurl:string=environment.webapiurl;
  
  prods:Product1;
  constructor(private _httpclient:HttpClient) 
  { }
  getprods():Observable<Product1[]>
  {
    return this._httpclient.get<Product1[]>(this.restapiurl);
  }
  addprod(pinfo:Product1):Observable<string>
  {
    return this._httpclient.post<string>(this.restapiurl,pinfo);
  }
  getprod(pid:string):Observable<Product1>
  {
    return this._httpclient.get<Product1>(this.restapiurl+"/"+pid);
  }
  modifyprod(pinfo:Product1):Observable<void>
  {
    return this._httpclient.put<void>(this.restapiurl,pinfo);
  }
  deleteprod(pid:string):Observable<void>
  {
    return this._httpclient.delete<void>(this.restapiurl+"/"+pid);
  }
}
