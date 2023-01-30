import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SingleResponseModel } from '../models/singleResponseModel';
import { LoginModel } from '../models/loginModel';
import { TokenModel } from '../models/tokenModel'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = "https://localhost:44359/api/auth/";
  constructor(private httpclient:HttpClient) { }


  login(user:LoginModel){
    return this.httpclient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"login",user)
  }
  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }
}
