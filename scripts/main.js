mapboxgl.accessToken = 'pk.eyJ1IjoiY2hyaXNtYWJyeSIsImEiOiJjbGozYTNuazAwN3E2M3FwMnZ0eG93YWZyIn0.86yI09yLO5x5DIlLHgBpbg';
mapboxStyleURL = 'mapbox://styles/chrismabry/clj3c9rpg030z01qp6nnyhuf3';

const map = new mapboxgl.Map({
    container: 'map', // container ID
    center: [-85.4340269,36.1601902], // starting position [lng, lat]
    zoom: 10, // starting zoom
    style: 'mapbox://styles/mapbox/streets-v11', // style URL or style object
});

const geojson = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-85.4340269,36.1601902]
        },
        properties: {
          title: "Olive's House",
          description: "Abby's parents live there, too."
        }
      }
    ]
};

// add markers to map
for (const feature of geojson.features) {
    console.log(feature);
    // create a HTML element for each feature
    const el = document.createElement('div');
    el.className = 'marker';
  
    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map);
}