mapboxgl.accessToken = 'pk.eyJ1IjoiemFjaGxldml0dCIsImEiOiJjazFpcHpncngxc21nM2ptdjNxZ2d6eGV6In0.UQA6j8m__GZSNau11Ry3qg';

var map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/zachlevitt/ck9qitn4644xr1ipkp6g6z7fs/draft', // stylesheet location
  center: [-2,2], // starting position [lng, lat]
  zoom: 3.7, // starting zoom
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

map.on('click', 'states-cases-yn', function(e) {
  //console.log(e.features[0])
  //
  //var coordinates= [e.features[0].properties.centroid_xcoord,e.features[0].properties.centroid_ycoord]
  //console.log(coordinates)
  //var description = e.features[0].properties.description
  //console.log(e.features[0].properties)
  //var name = e.features[0].properties.NAME
  var stateData = e.features[0].properties
  var stateName = stateData.stateName
  document.getElementById("robotext1").innerHTML = stateName
  //var abbrev = states[e.features[0].properties.STATEFP].abbreviation

  // if (total_num > 0){
  //   var total_display = '+'+total_num
  // }
  // else {
  //   var total_display = total_num
  // }


  // if (total_rank < 629){
  //   total_color = '#c80000'
  // }
  // else if (total_rank < 1258){
  //   total_color = '#d35617'
  // }
  // else if (total_rank < 1887){
  //   total_color = '#e28740'
  // }
  // else if (total_rank < 2516){
  //   total_color = '#ebb075'
  // }
  // else {
  //   total_color = '#eedabf'
  // }
  
  
  //var text = (name.concat(" County, ")).concat(abbrev)
  //var display;
  //if (document.getElementById("layers").style.visibility == 'visible'){
  //    display = '<h3 style="font-weight:bold">'+text+'</h3>'+'<h5>Population (2012)</h5><h4><b>' + pop_display +'</b></h4><h5>% change in agricultural yields</h5><h4 style="color:' + agricultural_color +'"><b>' + agricultural_display +'</b></h4><h5>Change in deaths per 100,000</h5><h4 style="color:' + mortality_color +'"><b>' + mortality_display +'</b></h4><h5>% change in county GDP</h5><h4 style="color:' + total_color +'"><b>' + total_display +'</b></h4>'
  //}

  
  /*new mapboxgl.Popup()
    .setLngLat(coordinates)
    .setHTML(display)
    .addTo(map);*/

});

map.on('mouseenter', 'states-cases-yn', function() {
map.getCanvas().style.cursor = 'pointer';
});
 
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'states-cases-yn', function() {
map.getCanvas().style.cursor = '';
});

var hoveredStateId = null;

//console.log(map.style.sourceCaches)
//

map.on('mousemove', 'states-cases-yn', function(e) {
  //console.log(hoveredStateId)
  if (e.features.length > 0) {
    if (hoveredStateId) {
      map.setFeatureState(
        { source: 'composite', id: hoveredStateId, sourceLayer: 'states_covid_albers' },
        { hover: false }
      );
    }
      //console.log(e.features[0].id)
      hoveredStateId = e.features[0].id;

      //console.log("id is now:" + hoveredStateId)
      map.setFeatureState(
        { source: 'composite', id: hoveredStateId, sourceLayer: 'states_covid_albers' },
        { hover: true }
      );
      
  }
});
 
// When the mouse leaves the state-fill layer, update the feature state of the
// previously hovered feature.
map.on('mouseleave', 'states-outlines', function() {
  //console.log(hoveredStateId)
if (hoveredStateId) {
map.setFeatureState(
{ source: 'composite', id: hoveredStateId, sourceLayer: 'states_covid_albers' },
{ hover: false }
);
//console.log(hoveredStateId)
}
hoveredStateId = null;
});


function onScroll() {
  //console.log('hello')
  console.log(window.scrollY)
  if (window.scrollY > 75){
    //console.log("WE ARE AT 1")
    document.getElementById('scroll1').style.visibility = 'visible';
    document.getElementById('scroll1').style.opacity = 1
  }

  if (window.scrollY > 275){
    document.getElementById('scroll2').style.visibility = 'visible';
    document.getElementById('scroll2').style.opacity = 1
  }

  if (window.scrollY > 475){
    document.getElementById('scroll3').style.visibility = 'visible';
    document.getElementById('scroll3').style.opacity = 1
  }
};

function isElementActive(id) {
  var element = document.getElementById(id);
  var bounds = element.getBoundingClientRect();
  //console.log(id + " bounds top: " + bounds.top)
  //console.log(window.innerHeight)
  console.log(id + ": " + bounds.top)
  return bounds.top < 500 && bounds.top > 100
  //return (bounds.top+100) === window.innerHeight
}