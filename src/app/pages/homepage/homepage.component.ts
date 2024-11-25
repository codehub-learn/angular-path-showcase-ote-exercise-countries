import { Component } from '@angular/core';
import { CountriesListComponent } from "./components/countries-list/countries-list.component";
import { CountryDetailsComponent } from "./components/country-details/country-details.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CountriesListComponent, CountryDetailsComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
