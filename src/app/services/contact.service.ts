import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
httpOptions;
  constructor(private http:HttpClient) { }

  sendMessage(obj):Observable<object>{
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Ocp-Apim-Subscription-Key':'ae666daa93ba4f13b0aafcdda20a8c3d'
        })
      }
     return this.http.post("https://ecommercenodeapi.azure-api.net/messages/all",obj,this.httpOptions)
  } 
  
  getMessagesByUsername():Observable<object>{
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Ocp-Apim-Subscription-Key':'ae666daa93ba4f13b0aafcdda20a8c3d'
        })
      }
    let user=sessionStorage.getItem("username");
    return this.http.get("https://ecommercenodeapi.azure-api.net/messages/all/"+user,this.httpOptions);
  }

  getMessagesByReciever():Observable<object>{
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Ocp-Apim-Subscription-Key':'ae666daa93ba4f13b0aafcdda20a8c3d'
        })
      }
    let user=sessionStorage.getItem("username");
    return this.http.get("https://ecommercenodeapi.azure-api.net/messages/received/"+user,this.httpOptions);
  }
  
  getMessages():Observable<object>{
  
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Ocp-Apim-Subscription-Key':'ae666daa93ba4f13b0aafcdda20a8c3d'
        })
      }
    return this.http.get("https://ecommercenodeapi.azure-api.net/messages/all/",this.httpOptions );
  }

}
