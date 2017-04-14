import { Injectable } from "@angular/core";
import { Init } from "app/init-markers";


@Injectable()

export class MarkerService extends Init{
  constructor() {
    super();
    console.warn("Marker Service Initialized...")
    this.load();
  }

  getMarkers() {
    var markers = JSON.parse(localStorage.getItem('markers'));
    return markers;
  }

  addMarker(newMarker) {
    // get the markers from localStorage
      var markers = JSON.parse(localStorage.getItem('markers'));
    // push to array
      markers.push(newMarker);  
    // set markers again
      localStorage.setItem('markers', JSON.stringify(markers));  
  }
}