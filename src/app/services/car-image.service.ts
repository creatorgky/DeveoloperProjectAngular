import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl = "https://localhost:44359/api/";
  constructor(private httpClient:HttpClient) { }
  
  getCarImagesByCarId(carId:number):Observable<ListResponseModel<CarImage>>{
    let newUrl = this.apiUrl + "carimages/getbycarid?carId=" + carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newUrl);
  }
  getAllCarImages():Observable<ListResponseModel<CarImage>>{
    let newUrl = this.apiUrl + "carimages/getall";
    return this.httpClient.get<ListResponseModel<CarImage>>(newUrl);
  }

} 
