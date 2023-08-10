// TOMTOM MAP-SDK PROJECT KEY
let apikey = "DhsWrXMltRzsirhtAYa3GBdt8j4mhGBb";
let center = [8.6753, 9.082];

// CREATING A NEW MAP OBJECT
let map = tt.map({
  key: apikey,
  container: "map",
  minZoom: 10,
  maxZoom: 15,
  center: center,
});

// ADDING A MARKER TO THE MAP
let marker = new tt.Marker({
  // DOM OF THE MARKER TO BE DISPLAYED
  element: document.querySelector("#marker"),
  anchor: "bottom-right",
});

// SETTING A POSITION FOR OUR MARKER
marker.setLngLat([7.5248, 5.4527]);

// ATTACHING THE MAKER ON OUR MAP
marker.addTo(map);

