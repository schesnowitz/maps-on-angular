import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  //zoom level
  zoom: number = 15;
  
  //starting point
  lat: number = 43.653908;
  lng: number = -79.384293; 

  //markers
  markers: marker[] = [
    {
      name: "Company One",
      lat: 42.825588,
      lng: -71.018219,
      draggable: true
    },
    {
      name: "Company Two",
      lat: 42.868164,
      lng: -70.889071,
      draggable: true
    },
    {
      name: "Company Three",
      lat: 42.850279,
      lng: -70.930498,
      draggable: false
    }
  ]; 

  constructor() {

  }

}

// Marker Type
interface marker {
  name?: string;
  lat: number;
  lng: number;
  draggable: boolean

}