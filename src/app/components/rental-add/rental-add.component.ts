import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rental-add',
  templateUrl: './rental-add.component.html',
  styleUrls: ['./rental-add.component.css']
})
export class RentalAddComponent implements OnInit{
  
  currentCarId: number;
  constructor(
    private activatedRoute:ActivatedRoute
  ){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
      this.currentCarId = Number(params["carId"]);
    }
  });
 }

}
