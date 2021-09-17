import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  httpOptions;
  constructor(private http:HttpClient) { 
    
    }
  

  addProduct(obj):Observable<object>{
   
     return this.http.post("https://ecommercenodeapi.azure-api.net/products/add",obj);
  }


  
  updateProduct(obj):Observable<object>{
   
    return this.http.post("https://ecommercenodeapi.azure-api.net/products/update",obj);
 }


  removeProduct(obj):Observable<object>{
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Ocp-Apim-Subscription-Key':'ae666daa93ba4f13b0aafcdda20a8c3d'
        })
      }
    return this.http.delete("https://ecommercenodeapi.azure-api.net/products/remove/"+obj,this.httpOptions);
 }

  public getProducts():Observable<object>{
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Ocp-Apim-Subscription-Key':'ae666daa93ba4f13b0aafcdda20a8c3d'
        })
      }
    return this.http.get("https://ecommercenodeapi.azure-api.net/products/all",this.httpOptions);
  }

  public getProducts2(pattern:string):Observable<object>{
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Ocp-Apim-Subscription-Key':'ae666daa93ba4f13b0aafcdda20a8c3d'
        })
      }
    return this.http.get("https://ecommercenodeapi.azure-api.net/products/all/"+pattern,this.httpOptions);
  }


}
