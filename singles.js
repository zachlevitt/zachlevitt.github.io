mapboxgl.accessToken = 'pk.eyJ1IjoiemFjaGxldml0dCIsImEiOiJjazFpcHpncngxc21nM2ptdjNxZ2d6eGV6In0.UQA6j8m__GZSNau11Ry3qg';

var bounds = [[-74.276,40.482],[-73, 41]]
var map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/zachlevitt/ck9iso0pt053c1inqvwpwi8ag/draft', // stylesheet location
  center: [-73.98,40.7], // starting position [lng, lat]
  zoom: 9, // starting zoom
  minZoom: 8,
  maxZoom: 15,
  maxBounds: bounds,
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
//map.scrollZoom.disable();
//map.doubleClickZoom.disable();
//map.touchZoomRotate.disable();

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
                "circle-radius": 4,
                "circle-color": "white",
                //"circle-color": "#905393",
            },
        },"nyc_tracts_highlight_copy");
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
  var filter = ['in', 'boro_ct2010'];

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
	var ids = [];
        var total_population = 0;
        var total_male_population = 0;
        var total_female_population = 0;
        var total_nevermarried = 0;
        var total_nevermarried_male = 0;
        var total_nevermarried_male_employed = 0;
        var total_nevermarried_male_unemployed = 0;
        var total_nevermarried_female = 0;
        var total_nevermarried_female_employed = 0;
        var total_nevermarried_female_unemployed = 0;
        var total_nowmarried = 0;
        var total_nowmarried_male = 0;
        var total_nowmarried_male_employed = 0;
        var total_nowmarried_male_unemployed = 0;
        var total_nowmarried_female = 0;
        var total_nowmarried_female_employed = 0;
        var total_nowmarried_female_unemployed = 0;
        var total_separated_male=0;
        var total_separated_male_employed=0
        var total_separated_male_unemployed=0
        var total_separated_female=0
        var total_separated_female_employed=0
        var total_separated_female_unemployed=0
        var total_separated=0
        var total_divorced_male = 0;
        var total_divorced_male_employed = 0;
        var total_divorced_male_unemployed = 0;
        var total_divorced_female = 0;
        var total_divorced_female_employed = 0;
        var total_divorced_female_unemployed = 0;
        var total_divorced = 0;
        var total_widowed_male = 0;
        var total_widowed_male_employed = 0;
        var total_widowed_male_unemployed = 0;
        var total_widowed_female = 0;
        var total_widowed_female_employed = 0;
        var total_widowed_female_unemployed = 0;
        var total_widowed = 0;

  $.ajax({
    method: 'GET',
    url: query,
      }).done(function(data) {

		console.log(data.features)
        
        for (feature of data.features){
        	var total_population = total_population + feature.properties.population

        	var total_nevermarried = total_nevermarried + feature.properties['16years_ov']
          	var total_nevermarried_male = total_nevermarried_male + feature.properties['16years_ov_1']
          	var total_nevermarried_male_employed = total_nevermarried_male_employed + feature.properties['16years_ov_2']
          	var total_nevermarried_male_unemployed = total_nevermarried_male_unemployed + feature.properties['16years_ov_3']
          	var total_nevermarried_female = total_nevermarried_female + feature.properties['16years_ov_4']
          	var total_nevermarried_female_employed = total_nevermarried_female_employed + feature.properties['16years_ov_5']
          	var total_nevermarried_female_unemployed = total_nevermarried_female_unemployed + feature.properties['16years_ov_6']

          	var total_nowmarried = total_nowmarried + feature.properties['16years_ov_7']
          	var total_nowmarried_male = total_nowmarried_male + feature.properties['16years_ov_8']
          	var total_nowmarried_male_employed = total_nowmarried_male_employed + feature.properties['16years_ov_9']
          	var total_nowmarried_male_unemployed = total_nowmarried_male_unemployed + feature.properties['16years_ov_10']
          	var total_nowmarried_female = total_nowmarried_female + feature.properties['16years_ov_11']
          	var total_nowmarried_female_employed = total_nowmarried_female_employed + feature.properties['16years_ov_12']
          	var total_nowmarried_female_unemployed = total_nowmarried_female_unemployed + feature.properties['16years_ov_13']

          	var total_separated = total_separated + feature.properties['16over_sep']
          	var total_separated_male = total_separated_male + feature.properties['16over_sep_1']
          	var total_separated_male_employed = total_separated_male_employed + feature.properties['16over_sep_2']
          	var total_separated_male_unemployed = total_separated_male_unemployed + feature.properties['16over_sep_3']
          	var total_separated_female = total_separated_female + feature.properties['16over_sep_4']
          	var total_separated_female_employed = total_separated_female_employed + feature.properties['16over_sep_5']
          	var total_separated_female_unemployed = total_separated_female_unemployed + feature.properties['16over_sep_6']
        	
        	var total_widowed = total_widowed + feature.properties['16over_wid']
          	var total_widowed_male = total_widowed_male + feature.properties['16over_wid_1']
          	var total_widowed_male_employed = total_widowed_male_employed + feature.properties['16over_wid_2']
          	var total_widowed_male_unemployed = total_widowed_male_unemployed + feature.properties['16over_wid_3']
          	var total_widowed_female = total_widowed_female + feature.properties['16over_wid_4']
          	var total_widowed_female_employed = total_widowed_female_employed + feature.properties['16over_wid_5']
          	var total_widowed_female_unemployed = total_widowed_female_unemployed + feature.properties['16over_wid_6']

        	var total_divorced = total_divorced + feature.properties['16over_div']
        	var total_divorced_male = total_divorced_male + feature.properties['16over_div_1']
          	var total_divorced_male_employed = total_divorced_male_employed + feature.properties['16over_div_2']
          	var total_divorced_male_unemployed = total_divorced_male_unemployed + feature.properties['16over_div_3']
          	var total_divorced_female = total_divorced_female + feature.properties['16over_div_4']
          	var total_divorced_female_employed = total_divorced_female_employed + feature.properties['16over_div_5']
          	var total_divorced_female_unemployed = total_divorced_female_unemployed + feature.properties['16over_div_6']

          	var tract_boro_code = feature.properties.TRACTCE
	          if (feature.properties['COUNTY'] == 'New York County'){
	          	tract_boro_code = "1" + tract_boro_code
	          }
	          else if (feature.properties['COUNTY'] == 'Kings County'){
	          	tract_boro_code = "3" + tract_boro_code
	          }
	          else if (feature.properties['COUNTY'] == 'Queens County'){
	          	tract_boro_code = "4" + tract_boro_code
	          }
	          else if (feature.properties['COUNTY'] == 'Richmond County'){
	          	tract_boro_code = "5" + tract_boro_code
	          }
	          else if (feature.properties['COUNTY'] == 'Bronx County'){
	          	tract_boro_code = "2" + tract_boro_code
	          }
	        ids.push(tract_boro_code)
          }

          var total_male_population = total_divorced_male + total_widowed_male + total_separated_male + total_nowmarried_male + total_nevermarried_male;
          var total_female_population = total_divorced_female + total_widowed_female + total_separated_female + total_nowmarried_female + total_nevermarried_female;

          	var divorce_display_all = 'There are ' + numberWithCommas(total_divorced) + ' total divorcees in your area.'
          	var divorce_display_male = 'There are ' + numberWithCommas(total_divorced_male) + ' male-identifying divorcees in your area, making up about ' + (100*(total_divorced_male/total_divorced)).toFixed(0) + '% of the total divorced population near you.'
          	var divorce_display_female = 'There are ' + numberWithCommas(total_divorced_female) + ' female-identifying divorcees in your area, making up about ' + (100*(total_divorced_female/total_divorced)).toFixed(0) + '% of the total divorced population near you.'

          	var widowed_display_all = 'There are ' + numberWithCommas(total_widowed) + ' total widows in your area.'
          	var widowed_display_male = 'There are ' + numberWithCommas(total_widowed_male) + ' male-identifying widows in your area, making up about ' + (100*(total_widowed_male/total_widowed)).toFixed(0) + '% of the total widowed population near you.'
          	var widowed_display_female = 'There are ' + numberWithCommas(total_widowed_female) + ' female-identifying widows in your area, making up about ' + (100*(total_widowed_female/total_widowed)).toFixed(0) + '% of the total widowed population near you.'

			var separated_display_all = 'There are ' + numberWithCommas(total_separated) + ' individuals who are separated from their spouses in your area.'
          	var separated_display_male = 'There are ' + numberWithCommas(total_separated_male) + ' male-identifying individuals who are separated from their spouses in your area, making up about ' + (100*(total_separated_male/total_separated)).toFixed(0) + '% of the total separated population near you.'
          	var separated_display_female = 'There are ' + numberWithCommas(total_separated_female) + ' female-identifying individuals who are separated from their spouses in your area, making up about ' + (100*(total_separated_female/total_separated)).toFixed(0) + '% of the total separated population near you.'

			var nowmarried_display_all = 'There are ' + numberWithCommas(total_nowmarried) + ' married individuals in your area.'
          	var nowmarried_display_male = 'There are ' + numberWithCommas(total_nowmarried_male) + ' male-identifying married individuals in your area, making up about ' + (100*(total_nowmarried_male/total_nowmarried)).toFixed(0) + '% of the total married population near you.'
          	var nowmarried_display_female = 'There are ' + numberWithCommas(total_nowmarried_female) + ' female-identifying married individuals in your area, making up about ' + (100*(total_nowmarried_female/total_nowmarried)).toFixed(0) + '% of the total married population near you.'

          	var nevermarried_display_all = 'There are ' + numberWithCommas(total_nevermarried) + ' people who have never been married in your area.'
          	var nevermarried_display_male = 'There are ' + numberWithCommas(total_nevermarried_male) + ' male-identifying individuals who have never been married in your area, making up about ' + (100*(total_nevermarried_male/total_nevermarried)).toFixed(0) + '% of the total never-married population near you.'
          	var nevermarried_display_female = 'There are ' + numberWithCommas(total_nevermarried_female) + ' female-identifying individuals who have never been married in your area, making up about ' + (100*(total_nevermarried_female/total_nevermarried)).toFixed(0) + '% of the total never-married population near you.'


          	//each one has population (by sex) - one if only that sex is the preference
          	//if no preference employment
          	//	there are 2500 men who are unemployed
          	//there's basically one for each combination
          	//	when you filter, it'll filter out certain combinations

          	// else if (sex_filter == 'male'){

          	// }

          	// else if (sex_filter == 'female'){

          	// }

          	// if (marriage_filter == 'no_marriage'){

          	// }

          	

          	// if (employment_filter == 'no_employ'){
          		
          	// }

        
        	//console.log(feature.properties.GISJOIN)
        	//console.log(feature.properties.population)
        
        //console.log(ids)
        var filter_statement;
        //console.log(ids)
        //var filterBy = ['a', 'b', 'c'];
		var myFilter = buildFilter(ids);
		document.getElementById('robotext2').innerHTML = 'Within 1 kilometer of your location, there are about ' + numberWithCommas(total_population) + ' people who are 16 years or older.'
		document.getElementById('robotext3').innerHTML = '<b>' + numberWithCommas(total_nevermarried) + '</b> people have never been married.' 
		document.getElementById('robotext4').innerHTML = numberWithCommas(total_nowmarried) + ' people are currently married.' 
		document.getElementById('robotext5').innerHTML = numberWithCommas(total_separated) + ' people are currently separated. There are ' + numberWithCommas(total_widowed) + ' widows. There are ' + numberWithCommas(total_divorced) + ' total divorced people.'

        map.setFilter('nyc_tracts_highlight',myFilter)
        map.setLayoutProperty('nyc_tracts_highlight','visibility','visible')

      
      map.flyTo({center:coordinates,zoom:12});

 })}