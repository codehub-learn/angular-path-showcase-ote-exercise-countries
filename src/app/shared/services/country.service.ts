import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../domain/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  getCountries() {
    const endpoint = "https://restcountries.com/v3.1/all";
    return this.http.get<Country[]>(endpoint);
  }
}
