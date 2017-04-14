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

  constructor() { }

  clickedMarker(marker: marker, index: number) {
    console.log("Clicked Marker: "+marker.name+" at index: "+index);
  }

  mapClicked($event: any) {
    var newMarker = {
      name: 'Untitled',
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: false
    }
    this.markers.push(newMarker);
  }

  markerDragEnd(marker: any, $event: any) {
    console.log("Drag End", marker, $event)

    var updMarker = {
      name: marker.name,
      lat: parseFloat(marker.lat),
      lng: parseFloat(marker.lng),
      draggable: false
    }

    var newLat = $event.coords.lat;
    var newLng = $event.coords.lng;   
  }
}


// Marker Type
interface marker {
  name?: string;
  lat: number;
  lng: number;
  draggable: boolean

}