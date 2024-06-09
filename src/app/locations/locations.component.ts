import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../rick-and-morty.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  locations: any[] = [];

  constructor(private rickAndMortyService: RickAndMortyService) { }

  ngOnInit(): void {
    this.rickAndMortyService.getLocations().subscribe((data: any) => {
      this.locations = data.results;
    });
  }
}
