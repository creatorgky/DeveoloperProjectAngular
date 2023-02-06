import { Pipe, PipeTransform } from '@angular/core';
import { RentalDetail } from '../models/rentalDetail';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: RentalDetail[],filterText: string): RentalDetail[] {
    filterText = filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((p:RentalDetail)=>p.firstName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  };

}
