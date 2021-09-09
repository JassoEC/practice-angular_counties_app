import { Component } from '@angular/core';

import { Country } from '../../interfaces/countries.interfaces';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-name',
  templateUrl: './by-name.component.html',
  styles: [],
})
export class ByNameComponent {
  term: string = '';
  hasError: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  findCountry() {
    this.hasError = false;
    this.countryService.findCountry(this.term).subscribe(
      (response) => {
        this.countries = response;
      },
      (err) => {
        this.hasError = true;
        this.countries = [];
      }
    );
  }
}
