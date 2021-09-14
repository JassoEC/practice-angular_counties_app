import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/countries.interfaces';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [],
})
export class ByRegionComponent {
  constructor(private countrySerivce: CountryService) {}

  regions: string[] = ['africa', 'americas', 'asia', 'oceania', 'europe'];
  activeRegion: string = '';

  contries: Country[] = [];

  activateRegion = (region: string) => {

    if(region === this.activeRegion){return}
    this.activeRegion = region;
    this.contries = [];
    this.countrySerivce
      .findByRegion(region)
      .subscribe((countries) => (this.contries = countries));
  };
}
