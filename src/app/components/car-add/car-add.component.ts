import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css'],
})
export class CarAddComponent implements OnInit {
  carAddForm: FormGroup;
  brands: Brand[];
  colors: Color[];
  constructor(
    private formBuilder: FormBuilder,
    private carService: CarService,
    private brandService: BrandService,
    private colorService: ColorService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createCarAddForm(),
      this.brandService.getBrands().subscribe((result) => {
        if (result?.success) {
          this.brands = result.data;
        }
      });
      this.colorService.getColors().subscribe((result)=>{
        if(result?.success) {
          this.colors = result.data;
        }
      });
  }

  createCarAddForm(): void {
    this.carAddForm = this.formBuilder.group({
      brandId: ['', Validators.required],
      colorId: ['', Validators.required],
      modelYear: ['', Validators.required],
      dailyPrice: ['', Validators.required],
      description: ['', Validators.required],
    });
  }
  carAdd() {
    if (this.carAddForm.valid) {
      let carAddModel = Object.assign({}, this.carAddForm.value);
      this.carService.add(carAddModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Başarılı');
        },
        (responseError) => {
          if (responseError.error.Errors.length > 0) {
            for (let i = 0; i < responseError.error.Errors.length; i++) {
              this.toastrService.error(
                responseError.error.Errors[i].ErrorMessage,
                'Doğrulama hatası'
              );
            }
          }
        }
      );
    } else {
      this.toastrService.error('Formunuz eksik', 'Dikkat');
    }
  }
}
