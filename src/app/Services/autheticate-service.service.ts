import { Injectable } from '@angular/core';
import { User } from '../Modules/User';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AutheticateServiceService {
  
 
  url:string="http://localhost:8011/user";

  constructor(private httpClient :HttpClient) { 

  }


  addUser(newUser: User) {
    //uList.push(newCustomer);
        //console.log("customer list",cList);
        return this.httpClient.post(this.url,newUser);
  }
  login(email:any,password:any){
    console.log(email,password);
const logs={email,password};
return this.httpClient.post<string>(this.url+"/login",logs);

  }
}
