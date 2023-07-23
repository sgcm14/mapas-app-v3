import { Component } from '@angular/core';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-map-screen',
  templateUrl: './map-screen.component.html',
  styleUrls: ['./map-screen.component.css']
})
export class MapScreenComponent {

  constructor(private placesService: PlacesService ){  }

  get isUserLocationReady(){
    return this.placesService.isUserLocationReady;
  }

}
