export class Init {
  load() {
    if(localStorage.getItem('markers') === null || localStorage.getItem('markers') === undefined){
      console.warn('There were no markers found.... Working on creation.');

      var markers = [
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

      localStorage.setItem('markers', JSON.stringify(markers));
    } else {
      console.warn('Loading Markers...');
    }
  }
}