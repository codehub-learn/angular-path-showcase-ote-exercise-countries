import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Country } from '../domain/country';

@Injectable({
  providedIn: 'root'
})
export class PublishService {
  publisher = new Subject<Country>();

  constructor() { }

  publishData(countryToPublish: Country){
    this.publisher.next(countryToPublish);
  }

  listenForData(){
    return this.publisher.asObservable();
  }
}
