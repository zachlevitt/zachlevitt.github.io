mapboxgl.accessToken = 'pk.eyJ1IjoiemFjaGxldml0dCIsImEiOiJjazFpcHpncngxc21nM2ptdjNxZ2d6eGV6In0.UQA6j8m__GZSNau11Ry3qg';

var map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/zachlevitt/ck9iso0pt053c1inqvwpwi8ag/draft', // stylesheet location
  center: [-2,2], // starting position [lng, lat]
  zoom: 3.6, // starting zoom
  minZoom: 3,
  maxZoom: 9,
  });

map.addControl(new mapboxgl.NavigationControl());
map.scrollZoom.disable();
map.doubleClickZoom.disable();
map.touchZoomRotate.disable();

var geocoder = new MapboxGeocoder({
  accessToken: mapboxgl.accessToken,
  country: 'us',
  mapboxgl: mapboxgl,
  placeholder: "ex. XXXXX",
});

document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

geocoder.on('result', function(ev) {


  //check if control is there
  map.scrollZoom.enable();
  map.dragPan.enable();
  map.doubleClickZoom.enable();
  map.touchZoomRotate.enable();

  //app.map.setLayoutProperty('epicenters-8-12-19-5boyv3',"visibility","none");
  
  //coordinates = ev.result.geometry.coordinates
  var coordinates = ev.result.center
  //app.map.getSource('single-point').setData(ev.result.geometry);
  var query = "https://api.mapbox.com/v4/zachlevitt.4rpv0z04/tilequery/"+coordinates[0]+","+coordinates[1]+".json?limit=20&access_token=pk.eyJ1IjoiemFjaGxldml0dCIsImEiOiJjazdjdmdiemswN3B0M2ZsN3Y0cDdjdWFkIn0.f3Cb4Gj1PRXGHHW6xT6aDA"
  display(coordinates, query);
  
})

function display(coordinates, query){

  $.ajax({
    method: 'GET',
    url: query,
      }).done(function(data) {


      })

 }