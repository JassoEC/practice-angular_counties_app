import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByNameComponent } from './pages/by-name/by-name.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { SeeCountryComponent } from './pages/see-country/see-country.component';

@NgModule({
  declarations: [
    ByCapitalComponent,
    ByNameComponent,
    ByRegionComponent,
    SeeCountryComponent,
  ],
  imports: [CommonModule],
  exports: [
    ByCapitalComponent,
    ByNameComponent,
    ByRegionComponent,
    SeeCountryComponent,
  ],
})
export class CountriesModule {}
