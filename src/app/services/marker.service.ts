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

  updateMarker(marker, newLat, newLng) {
    // get the markers from localStorage
      var markers = JSON.parse(localStorage.getItem('markers'));


      for(var i = 0; i < markers.length; i++) {  // loop throught the markers
        if(marker.lat === markers[i].lat && marker.lng === markers[i].lng) {
          markers[i].lat = newLat;
          markers[i].lng = newLng;
        }
      }

          // set markers again
      localStorage.setItem('markers', JSON.stringify(markers));  
  }

  removeMarker(marker) {
 // get the markers from localStorage
      var markers = JSON.parse(localStorage.getItem('markers'));


      for(var i = 0; i < markers.length; i++) {  // loop throught the markers
        if(marker.lat === markers[i].lat && marker.lng === markers[i].lng) {
            markers.splice(i, 1);
        }
      }

          // set markers again
      localStorage.setItem('markers', JSON.stringify(markers));  
  }
}