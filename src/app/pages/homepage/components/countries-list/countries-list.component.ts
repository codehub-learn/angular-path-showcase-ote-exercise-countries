import { Component, OnDestroy, OnInit } from '@angular/core';
import { CountryService } from '../../../../shared/services/country.service';
import { Country } from '../../../../shared/domain/country';

@Component({
  selector: 'app-countries-list',
  standalone: true,
  imports: [],
  templateUrl: './countries-list.component.html',
  styleUrl: './countries-list.component.scss'
})
export class CountriesListComponent implements OnInit {

  constructor(private countryService: CountryService) {
    // asychronous -> 
    countryService.getCountries().subscribe((countriesArray: Country[]) => {
      countriesArray
      console.log(countriesArray[0].region);
      console.log(countriesArray[0].name.common);
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

}
