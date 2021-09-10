import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries.interfaces';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent {

  term: string = '';
  hasError: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  findCountry(term: string) {
    this.hasError = false;
    this.term = term;

    this.countryService.findByCapital(this.term).subscribe(
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
  };
}
