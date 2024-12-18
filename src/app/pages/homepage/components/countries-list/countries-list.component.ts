import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { CountryService } from '../../../../shared/services/country.service';
import { Country } from '../../../../shared/domain/country';
import { PublishService } from '../../../../shared/services/publish.service';

@Component({
  selector: 'app-countries-list',
  standalone: true,
  imports: [],
  templateUrl: './countries-list.component.html',
  styleUrl: './countries-list.component.scss'
})
export class CountriesListComponent implements OnInit {
  countriesArray: Country[] = [];

  constructor(private countryService: CountryService, private publishService: PublishService) {
    // asychronous -> 
    countryService.getCountries().subscribe((countriesArray: Country[]) => {
      console.log(countriesArray[0].region);
      console.log(countriesArray[0].name.common);
      this.countriesArray = countriesArray;
      // countriesArray.forEach((country: Country) => {
      //   console.log(country.name.common);
      // });
      // for (let country of countriesArray){
      //   console.log(country.region);
      // }
    });
  
    // countryService.getCountries().subscribe({
    //   next: result => {
    //     console.log('Observable emitted the next value: ' + result);
    //     console.log('Observable emitted the next value: ' + result)
    //     console.log('Observable emitted the next value: ' + result)
    //   },
    //   error: err => console.error('Observable emitted an error: ' + err),
    //   complete: () => console.log('Observable emitted the complete notification')
    // })
    console.log("hello");
    
    //...
  }

  ngOnInit(): void {
    console.log("on init");
  }

  publishCountry(country: Country) {
    this.publishService.publishData(country);
  }

}
