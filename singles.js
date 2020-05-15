mapboxgl.accessToken = 'pk.eyJ1IjoiemFjaGxldml0dCIsImEiOiJjazFpcHpncngxc21nM2ptdjNxZ2d6eGV6In0.UQA6j8m__GZSNau11Ry3qg';

var map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/zachlevitt/ck9iso0pt053c1inqvwpwi8ag/draft', // stylesheet location
  center: [-73.98,40.7], // starting position [lng, lat]
  zoom: 9, // starting zoom
  minZoom: 8,
  maxZoom: 12,
  });

map.on('style.load', () => {
  const waiting = () => {
    if (!map.isStyleLoaded()) {
      setTimeout(waiting, 200);
    } else {
      addPoint()
    }
  };
  waiting();
});

map.addControl(new mapboxgl.NavigationControl());
map.scrollZoom.disable();
map.doubleClickZoom.disable();
map.touchZoomRotate.disable();

var geocoder = new MapboxGeocoder({
  accessToken: mapboxgl.accessToken,
  country: 'us',
  mapboxgl: mapboxgl,
  placeholder: "ex. Empire State Building",
});

function addPoint(place){
  
	map.addSource('single-point', {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": []
            }
        });
	map.addLayer({
            "id": "point",
            "source": "single-point",
            "type": "circle",
            "paint": {
                "circle-radius": 7,
                "circle-color": "red"
            },
        });
} 

document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

geocoder.on('result', function(ev) {


  //check if control is there
  map.scrollZoom.enable();
  map.dragPan.enable();
  map.doubleClickZoom.enable();
  map.touchZoomRotate.enable();
  map.setLayoutProperty('nyc_tracts_highlight','visibility','none')
  map.setFilter('nyc_tracts_highlight',undefined)

  //app.map.setLayoutProperty('epicenters-8-12-19-5boyv3',"visibility","none");
  
  //coordinates = ev.result.geometry.coordinates
  var coordinates = ev.result.center
  map.getSource('single-point').setData(ev.result.geometry);
  //map.setLayoutProperty('point', 'text-field',"Your location")
  //map.setLayoutProperty('point', 'text-offset', [3.1, -0.8])
  //app.map.getSource('single-point').setData(ev.result.geometry);
  var query = "https://api.mapbox.com/v4/zachlevitt.ccqylvsj/tilequery/"+coordinates[0]+","+coordinates[1]+".json?radius=1500&limit=50&access_token=pk.eyJ1IjoiemFjaGxldml0dCIsImEiOiJjazFpcHpncngxc21nM2ptdjNxZ2d6eGV6In0.UQA6j8m__GZSNau11Ry3qg"
  display(coordinates, query);
  
})

var marriage_filter;
var employ_filter;
var sex_filter;

function myFunction(selectObject) {
  var value = selectObject.value;  
  console.log(value)
  if (value == 'employed'){
  	employ_filter = value
  }

  else if (value == 'unemployed'){
  	employ_filter = value
  }

  else if (value == 'no_employ'){
  	employ_filter = value
  }
  else if (value == 'no_sex'){
  	sex_filter = value
  }

  else if (value == 'male'){
  	sex_filter = value
  }
  else if (value == 'female'){
  	sex_filter = value
  }

  else if (value == 'no_marriage'){
  	marriage_filter = value
  }
  else if (value == 'currently'){
  	marriage_filter = value
  }
  else if (value == 'sep'){
  	marriage_filter = value
  }

  else if (value == 'divorce'){
  	marriage_filter = value
  }

  else if (value == 'widow'){
  	marriage_filter = value
  }

  else if (value == 'never'){
  	marriage_filter = value
  }
}

// $( function() {
//     $( "#employment" ).selectmenu();
 
//     $( "#sex" ).selectmenu();

//     $( "#marriage" ).selectmenu();


//   } );

function buildFilter(arr) {
  var filter = ['in', 'GISJOIN'];

  if (arr.length === 0) {
     return filter;
  }
  
  for(var i = 0; i < arr.length; i += 1) {
    filter.push(arr[i]);
  }
  
  return filter;
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }


function display(coordinates, query){

  $.ajax({
    method: 'GET',
    url: query,
      }).done(function(data) {

		console.log(data.features)
        var ids = [];
        var total_population = 0;
        var total_nevermarried = 0;
        var total_nowmarried = 0;
        var total_separated=0
        var total_divorced = 0;
        var total_widowed = 0;
        for (feature of data.features){
        	total_population = total_population + feature.properties.population
        	total_nevermarried = total_nevermarried + feature.properties['16years_ov_1']
        	total_nowmarried = total_nowmarried + feature.properties['16years_ov_7']
        	total_separated = total_separated + feature.properties['16over_sep']
        	total_widowed = total_widowed + feature.properties['16over_wid']
        	total_divorced = total_divorced + feature.properties['16over_div']
        	ids.push(feature.properties.GISJOIN)
        	//console.log(feature.properties.GISJOIN)
        	//console.log(feature.properties.population)
        }
        var filter_statement;
        //console.log(ids)
        //var filterBy = ['a', 'b', 'c'];
		var myFilter = buildFilter(ids);
		document.getElementById('robotext2').innerHTML = 'Within 1 kilometer of your location, there are about ' + numberWithCommas(total_population) + ' people who are 16 years or older.'
		document.getElementById('robotext3').innerHTML = 'Out of these people, there are ' + numberWithCommas(total_nevermarried) + ' who have never been married.' 
		document.getElementById('robotext4').innerHTML = numberWithCommas(total_nowmarried) + ' people are currently married.' 
		document.getElementById('robotext5').innerHTML = numberWithCommas(total_separated) + ' people are currently separated. There are ' + numberWithCommas(total_widowed) + ' widows. There are ' + numberWithCommas(total_divorced) + ' total divorced people.'

        map.setFilter('nyc_tracts_highlight',myFilter)
        map.setLayoutProperty('nyc_tracts_highlight','visibility','visible')

      })

 }