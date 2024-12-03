import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Property } from '../domain/property';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private http: HttpClient) { }

  postProperty(property: Property){
    let url = "http://localhost:8080/properties";
    return this.http.post(url, property);
  }
}
