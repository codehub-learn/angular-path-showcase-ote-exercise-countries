import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Country } from '../../../../shared/domain/country';
import { JsonPipe } from '@angular/common';
import { PublishService } from '../../../../shared/services/publish.service';

@Component({
  selector: 'app-country-details',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './country-details.component.html',
  styleUrl: './country-details.component.scss'
})
export class CountryDetailsComponent implements OnInit {
  country?: Country;

  constructor(private publishService: PublishService){}

  ngOnInit(): void {
    this.publishService.listenForData().subscribe((data) => {
      console.log(data);
      console.log("publisher listening");
      this.country = data;
    });
  }
}
