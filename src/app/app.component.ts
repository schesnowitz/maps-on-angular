import { Component } from '@angular/core';
import { MarkerService } from "app/services/marker.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MarkerService]
})
export class AppComponent {
  
  //zoom level
  zoom: number = 15;
  
  //starting point
  lat: number = 43.653908;
  lng: number = -79.384293; 
  //Values

  markerName: string;
  markerLat: string;
  markerLng: string;
  markerDraggabe: string;
  //markers
  markers: marker[];

  constructor(private _markerService: MarkerService) { 
    this.markers = this._markerService.getMarkers();
  }

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

  addMarker() {
    console.warn("adding marker");

    if(this.markerDraggabe === 'yes') {
      var isDraggable = true;
    } else {
      var isDraggable = false;
    }

      var newMarker = {
        name: this.markerName, 
        lat: parseFloat(this.markerLat),
        lng: parseFloat(this.markerLng),
        draggable: isDraggable
      }

      this.markers.push(newMarker);
      this._markerService.addMarker(newMarker);
  }
}


// Marker Type
interface marker {
  name?: string;
  lat: number;
  lng: number;
  draggable: boolean

}