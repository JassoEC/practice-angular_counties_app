import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByNameComponent } from './pages/by-name/by-name.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { SeeCountryComponent } from './pages/see-country/see-country.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ByCapitalComponent,
    ByNameComponent,
    ByRegionComponent,
    SeeCountryComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [
    ByCapitalComponent,
    ByNameComponent,
    ByRegionComponent,
    SeeCountryComponent,
  ],
})
export class CountriesModule {}
