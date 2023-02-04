import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RentalDetail } from 'src/app/models/rentalDetail';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css'],
})
export class RentalComponent implements OnInit {
  rentals: RentalDetail[] = [];
  filterText="";
 
  constructor(
    private rentalService: RentalService,
    private activatedRoute:ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      this.getRentals()})
  }

  getRentals() {
    this.rentalService.getRentals().subscribe((response) => {
      this.rentals = response.data;
    });
  }
}