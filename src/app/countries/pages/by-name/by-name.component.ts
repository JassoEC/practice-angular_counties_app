import { Component } from '@angular/core';

import { Country } from '../../interfaces/countries.interfaces';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-name',
  templateUrl: './by-name.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class ByNameComponent {
  term: string = '';
  hasError: boolean = false;
  countries: Country[] = [];
  sugestedCountries: Country[] = [];

  constructor(private countryService: CountryService) {}

  findCountry(term: string) {
    this.hasError = false;
    this.term = term;

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

  sugestions = (term: string) => {
    this.hasError = false;
    this.term = term;

    this.countryService.findCountry(term).subscribe(
      (countries) => (this.sugestedCountries = countries.splice(0, 5)),
      (err) => (this.sugestedCountries = [])
    );
  };

  findSugestions = (value: string) => {
    this.countryService
      .findCountry(value)
      .subscribe((countries) => (this.countries = countries));
  };
}
