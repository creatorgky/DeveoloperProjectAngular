import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { RentalDetail } from '../models/rentalDetail';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl = "https://localhost:44359/api/";
  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<ListResponseModel<RentalDetail>>{
    let newUrl = this.apiUrl + "rentals/getrentaldetail"
   return this.httpClient.get<ListResponseModel<RentalDetail>>(newUrl);
  }
}
