mapboxgl.accessToken = 'pk.eyJ1IjoiemFjaGxldml0dCIsImEiOiJjazdjdmdiemswN3B0M2ZsN3Y0cDdjdWFkIn0.f3Cb4Gj1PRXGHHW6xT6aDA';

var map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/zachlevitt/ck71cbegj0a0f1iqjn8regnj4/draft', // stylesheet location
  center: [-100.278395, 36.028578], // starting position [lng, lat]
  zoom: 3, // starting zoom
  minZoom: 3
  });

map.scrollZoom.disable();
map.dragPan.disable();
map.doubleClickZoom.disable();
map.touchZoomRotate.disable();

var geocoder = new MapboxGeocoder({
  accessToken: mapboxgl.accessToken,
  country: 'us',
  mapboxgl: mapboxgl,
  placeholder: "ex. Addison County, VT",
});


document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

map.on('click', 'counties-dxol9k', function(e) {
  var coordinates = e.features[0].geometry.coordinates[0][0]
  //var description = e.features[0].properties.description
  //console.log(e.features[0].properties)
  var name = e.features[0].properties.NAMELSAD
  var income = e.features[0].properties['County Inc']

  var text = ('This is '.concat(name))

  new mapboxgl.Popup()
    .setLngLat(coordinates)
    .setHTML(text)
    .addTo(map);

});

map.on('mouseenter', 'counties-dxol9k', function() {
map.getCanvas().style.cursor = 'pointer';
});
 
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'counties-dxol9k', function() {
map.getCanvas().style.cursor = '';
});

// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }

// // Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }

// function Counter(elem, delay) {
// var value = parseInt(elem.getAttribute("value"), 10);
// console.log(value)
// var interval;

// var titles = [
//     "Hampshire County, Massachusetts",
//     "Shawnee County, Kansas",
//     "Hampden County, Massachusetts",
//     "San Francisco County, California",
//     "Summit County, Colorado"
// ];

// function updateDisplay(value) {
//     elem.innerHTML = value;
// }

// function run() {
//     value += 1;
//     if (value == titles.length) value = 0;

//     elem.setAttribute("value", value);
//     updateDisplay(titles[value]);
// }

// function start() {
//     interval = window.setInterval(run, delay);
// }

// // exports
// // This actually creates a function that our counter can call
// // you'll see it used below.
// //
// // The other functions above cannot be accessed from outside
// // this function.
// this.start = start;
// }

// var elem = document.getElementById("title-switcher");

// counter = new Counter(elem, 5000);
//counter.start();
//
geocoder.on('result', function(ev) {

  map.addControl(new mapboxgl.NavigationControl());
  map.scrollZoom.enable();
  map.dragPan.enable();
  map.doubleClickZoom.enable();
  map.touchZoomRotate.enable();

  //app.map.setLayoutProperty('epicenters-8-12-19-5boyv3',"visibility","none");
  
  //coordinates = ev.result.geometry.coordinates
  var coordinates = ev.result.center
  //app.map.getSource('single-point').setData(ev.result.geometry);
  var query = "https://api.mapbox.com/v4/zachlevitt.6mp8kdci/tilequery/"+coordinates[0]+","+coordinates[1]+".json?limit=20&access_token=pk.eyJ1IjoiemFjaGxldml0dCIsImEiOiJjazdjdmdiemswN3B0M2ZsN3Y0cDdjdWFkIn0.f3Cb4Gj1PRXGHHW6xT6aDA"
  //console.log(query)
  $.ajax({
    method: 'GET',
    url: query,
      }).done(function(data) {
  const entries = Object.entries(data.features)
  console.log(entries)

  var county_GEOID = entries[0][1].properties.GEOID
  var layers = map.getStyle().layers;
  console.log(layers)
  map.setFilter('counties',['==', 'GEOID', county_GEOID])
  map.setFilter('counties-border',['==', 'GEOID', county_GEOID])
  map.setLayoutProperty('counties',"visibility","visible");
  map.setLayoutProperty('counties-border',"visibility","visible");
  })

  map.flyTo({center:coordinates,zoom:8})



    ////TO DO*******************
    ///
    ///SET OPACITY AND BORDER OF SELECTED COUNTY TO BLACK BORDER, HIGHLIGHTED etc
    ///
    ///
    ///
    ///
    
}); 

  //var coordinates = e.features[0].geometry.coordinates.slice();
  //var description = e.features[0].properties.description;
 
// Ensure that if the map is zoomed out such that multiple
// copies of the feature are visible, the popup appears
// over the copy being pointed to.
// while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
// coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
// }