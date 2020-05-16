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

//map.addControl(new mapboxgl.NavigationControl());
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
                "circle-radius": 4,
                //"circle-color": "white",
                "circle-color": "#905393",
            },
        },"nyc_tracts_highlight_copy");
	map.addLayer({
		"id": "point_symbol",
            "source": "single-point",
            "type": "symbol",
        "paint": {
        	"text-color":"#905393",
        },
		"layout": {
              "text-field": "Your location",
              "symbol-placement" : "point",
              "text-variable-anchor" : ["bottom-left","bottom-right","top-left","top-right", "right","left","top"],
              "text-radial-offset": 0.4,
              "text-size": 20,
              "text-font": ["Open Sans Bold", "Arial Unicode MS Bold"],
              "text-justify": "left",
            },
	})
} 

document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

geocoder.on('result', function(ev) {


  //check if control is there
  map.scrollZoom.enable();
  map.dragPan.enable();
  map.doubleClickZoom.enable();
  //map.touchZoomRotate.enable();
  map.setLayoutProperty('nyc_tracts_highlight','visibility','none')
  map.setFilter('nyc_tracts_highlight',undefined)
  document.getElementById('preferences').style.display = 'block'
  document.getElementById('map').style.display = 'block'

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

var marriage_filter = 'no_marriage';
var employ_filter = 'no_employ';
var sex_filter = 'no_sex';



// var employed = ['employed_title','employed_1','employed_2','employed_3','employed_4','employed_5','employed_title_f','employed_1_f','employed_2_f','employed_3_f','employed_4_f','employed_5_f']
// var unemployed = ['unemployed_title','unemployed_1','unemployed_2','unemployed_3','unemployed_4','unemployed_5','unemployed_title_f','unemployed_1_f','unemployed_2_f','unemployed_3_f','unemployed_4_f','unemployed_5_f']

// var divorce = ['divorce_title','unemployed_2','employed_2','divorce_title_f','unemployed_2_f','employed_2_f']
// var widow = ['widow_title','unemployed_3','employed_3','widow_title_f','unemployed_3_f','employed_3_f']
// var separated = ['sep_title','unemployed_4','employed_4','sep_title_f','unemployed_4_f','employed_4_f']

// var never = ['never_title','unemployed_5','employed_5','never_title_f','unemployed_5_f','employed_5_f']

var options =['nowmarried','divorced','widowed','separated','nevermarried','employed','unemployed']

var marriage_options =['nowmarried','divorced','widowed','separated','nevermarried']
var employment_options = ['_employed','unemployed']

var table_ids = ["nowmarried_male_unemployed","nowmarried_male_employed","divorced_male_unemployed","divorced_male_employed","separated_male_unemployed","separated_male_employed","nevermarried_male_unemployed","nevermarried_male_employed","widowed_male_unemployed","widowed_male_employed","nowmarried_female_unemployed","nowmarried_female_employed","divorced_female_unemployed","divorced_female_employed","separated_female_unemployed","separated_female_employed","nevermarried_female_unemployed","nevermarried_female_employed","widowed_female_unemployed","widowed_female_employed"]
var rows = ['divorced_row_male','nowmarried_row_male','nevermarried_row_male','separated_row_male',"widowed_row_male",'divorced_row_female','nowmarried_row_female','nevermarried_row_female','separated_row_female',"widowed_row_female"]
function myFunction(selectObject) {
  var value = selectObject.value;  
  //console.log(value)
  if (value == '_employed'){
  	employ_filter = value
  	for (table_id of table_ids){
	  	if (table_id.includes(employ_filter)){
	  		document.getElementById(table_id).style.display = 'table-cell'
	  	}
	  	else {
	  		document.getElementById(table_id).style.display = 'none'
	  	}
	  }
	  document.getElementById('unemployed_title_male').style.display = 'none'
	document.getElementById('_employed_title_male').style.display = 'table-cell'
	document.getElementById('unemployed_title_female').style.display = 'none'
	document.getElementById('_employed_title_female').style.display = 'table-cell'
	
	
  	// if (marriage_filter == 'no_marriage'){
  	// 	for (id of unemployed){
  	// 	document.getElementById(id).style.display = 'none'
  	// }
  	// for (id of employed){
  	// 	document.getElementById(id).style.display = 'table-cell'
  	// }
  	// }
  	// else {
  	// 	for (id of unemployed){
  	// 	document.getElementById(id).style.display = 'none'
  	// }
  	// for (id of employed){
  	// 	if (document.getElementById(id).style.display == 'table-cell'){
  	// 		document.getElementById(id).style.display = 'table-cell'
  	// 	}
  	// }
  	// }
  	

  }

  else if (value == 'unemployed'){
  	employ_filter = value
  	for (table_id of table_ids){
	  	if (table_id.includes(employ_filter)){
	  		document.getElementById(table_id).style.display = 'table-cell'
	  	}
	  	else {
	  		document.getElementById(table_id).style.display = 'none'
	  	}
	  }
	  document.getElementById('unemployed_title_male').style.display = 'table-cell'
	document.getElementById('_employed_title_male').style.display = 'none'
	document.getElementById('unemployed_title_female').style.display = 'table-cell'
	document.getElementById('_employed_title_female').style.display = 'none'


  // 	if (marriage_filter == 'no_marriage'){
  // 	for (id of employed){
  // 		document.getElementById(id).style.display = 'none'
  // 	}
  // 	for (id of unemployed){
  // 		document.getElementById(id).style.display = 'table-cell'
  // 	}
  // 	}
  // 	else {
  // 		for (id of employed){
  // 		document.getElementById(id).style.display = 'none'
  // 	}
  // 	for (id of unemployed){
  // 		if (document.getElementById(id).style.display == 'table-cell'){
  // 			document.getElementById(id).style.display = 'table-cell'
  // 		}
  // 	}
  // }
  }

  else if (value == 'no_employ'){
  	employ_filter = value
  	for (table_id of table_ids){

			for (option of employment_options){
	  			if (table_id.includes(option)){
	  				document.getElementById(table_id).style.display = 'table-cell'
	  			}
			}
		
  	}
  	document.getElementById('unemployed_title_male').style.display = 'table-cell'
	document.getElementById('_employed_title_male').style.display = 'table-cell'
		document.getElementById('unemployed_title_female').style.display = 'table-cell'
	document.getElementById('_employed_title_female').style.display = 'table-cell'
  	// for (id of employed){
  	// 	document.getElementById(id).style.display = 'table-cell'
  	// }
  	// for (id of unemployed){
  	// 	document.getElementById(id).style.display = 'table-cell'
  	// }
  }
  else if (value == 'no_sex'){
  	sex_filter = value
  	document.getElementById('female_all').style.display = 'block'
  	document.getElementById('male_all').style.display = 'block'
  	document.getElementById('robotext2').style.display = 'block'
  	document.getElementById('robotext_female').style.display = 'none'
  	document.getElementById('robotext_male').style.display = 'none'
  }

  else if (value == '_male'){
  	sex_filter = value
  	document.getElementById('male_all').style.display = 'block'
  	document.getElementById('female_all').style.display = 'none'
  	document.getElementById('robotext2').style.display = 'none'
  	document.getElementById('robotext_female').style.display = 'none'
  	document.getElementById('robotext_male').style.display = 'block'
  }
  else if (value == 'female'){
  	sex_filter = value
  	document.getElementById('female_all').style.display = 'block'
  	document.getElementById('male_all').style.display = 'none'
  	document.getElementById('robotext2').style.display = 'none'
  	document.getElementById('robotext_female').style.display = 'block'
  	document.getElementById('robotext_male').style.display = 'none'
  }

  else if (value == 'no_marriage'){
  	marriage_filter = value
  	for (table_id of table_ids){
  	//console.log(table_id)
  		for (option of marriage_options){
  			if (table_id.includes(option)){
  				if (employ_filter == 'no_employ'){
  				document.getElementById(table_id).style.display = 'table-cell'
  			}
  			else {
  				if (table_id.includes(employ_filter)){
  					document.getElementById(table_id).style.display = 'table-cell'
  				}
  				else {
  					document.getElementById(table_id).style.display = 'none'
  				}
  			}
  			}

  		}
  	}
  	for (row of rows){
  		document.getElementById(row).style.display = 'table-row'
  	}
  }
  	// for (id of currently){
  	// 	document.getElementById(id).style.display = 'table-cell'
  	// }
  	// for (id of separated){
  	// 	document.getElementById(id).style.display = 'table-cell'
  	// }
  	// for (id of divorce){
  	// 	document.getElementById(id).style.display = 'table-cell'
  	// }
  	// for (id of widow){
  	// 	document.getElementById(id).style.display = 'table-cell'
  	// }
  	// for (id of never){
  	// 	document.getElementById(id).style.display = 'table-cell'
  	// }
  else if (value == 'nowmarried'){
  	marriage_filter = value

  	for (table_id of table_ids){
  		if (table_id.includes(marriage_filter)){
  			if (employ_filter == 'no_employ'){
  				document.getElementById(table_id).style.display = 'table-cell'
  			}
  			else {
  				if (table_id.includes(employ_filter)){
  					document.getElementById(table_id).style.display = 'table-cell'
  				}
  				else {
  					document.getElementById(table_id).style.display = 'none'
  				}
  			}
  			
  		}
	  	else {
	  		document.getElementById(table_id).style.display = 'none'
	  	}
	}

	for (row of rows){
		if (row.includes(marriage_filter)){
			document.getElementById(row).style.display = 'table-row'
		}
		else {
			document.getElementById(row).style.display = 'none'
		}
  		
  	}

	//document.getElementById('nowmarried_title').style.display = 'table-cell'
  	// for (id of currently){
  	// 	document.getElementById(id).style.display = 'table-cell'
  	// }
  	// for (id of separated){
  	// 	document.getElementById(id).style.display = 'none'
  	// }
  	// for (id of divorce){
  	// 	document.getElementById(id).style.display = 'none'
  	// }
  	// for (id of widow){
  	// 	document.getElementById(id).style.display = 'none'
  	// }
  	// for (id of never){
  	// 	document.getElementById(id).style.display = 'none'
  	// }
  }
  else if (value == 'separated'){
  	marriage_filter = value
  	for (table_id of table_ids){


  		if (table_id.includes(marriage_filter)){
  			if (employ_filter == 'no_employ'){
  				document.getElementById(table_id).style.display = 'table-cell'
  			}
  			else {
  				if (table_id.includes(employ_filter)){
  					document.getElementById(table_id).style.display = 'table-cell'
  				}
  				else {
  					document.getElementById(table_id).style.display = 'none'
  				}
  			}
  			
  		}
	}
	for (row of rows){
		if (row.includes(marriage_filter)){
			document.getElementById(row).style.display = 'table-row'
		}
		else {
			document.getElementById(row).style.display = 'none'
		}
  		
  	}
  	// for (id of separated){
  	// 	document.getElementById(id).style.display = 'table-cell'
  	// }
  	// for (id of divorce){
  	// 	document.getElementById(id).style.display = 'none'
  	// }
  	// for (id of widow){
  	// 	document.getElementById(id).style.display = 'none'
  	// }
  	// for (id of never){
  	// 	document.getElementById(id).style.display = 'none'
  	// }
  	// for (id of currently){
  	// 	document.getElementById(id).style.display = 'none'
  	//}
  }

  else if (value == 'divorced'){
  	marriage_filter = value
  	for (table_id of table_ids){


  		if (table_id.includes(marriage_filter)){
  			if (employ_filter == 'no_employ'){
  				document.getElementById(table_id).style.display = 'table-cell'
  			}
  			else {
  				if (table_id.includes(employ_filter)){
  					document.getElementById(table_id).style.display = 'table-cell'
  				}
  				else {
  					document.getElementById(table_id).style.display = 'none'
  				}
  			}
  			
  		}
	}
	for (row of rows){
		if (row.includes(marriage_filter)){
			document.getElementById(row).style.display = 'table-row'
		}
		else {
			document.getElementById(row).style.display = 'none'
		}
  		
  	}
  	// for (id of divorce){
  	// 	document.getElementById(id).style.display = 'table-cell'
  	// }
  	// for (id of separated){
  	// 	document.getElementById(id).style.display = 'none'
  	// }
  	// for (id of widow){
  	// 	document.getElementById(id).style.display = 'none'
  	// }
  	// for (id of never){
  	// 	document.getElementById(id).style.display = 'none'
  	// }
  	// for (id of currently){
  	// 	document.getElementById(id).style.display = 'none'
  	// }
  }

  else if (value == 'widowed'){
  	marriage_filter = value
  	for (table_id of table_ids){


  		if (table_id.includes(marriage_filter)){
  			if (employ_filter == 'no_employ'){
  				document.getElementById(table_id).style.display = 'table-cell'
  			}
  			else {
  				if (table_id.includes(employ_filter)){
  					document.getElementById(table_id).style.display = 'table-cell'
  				}
  				else {
  					document.getElementById(table_id).style.display = 'none'
  				}
  			}
  			
  		}
	}
	for (row of rows){
		if (row.includes(marriage_filter)){
			document.getElementById(row).style.display = 'table-row'
		}
		else {
			document.getElementById(row).style.display = 'none'
		}
  		
  	}

  }

  else if (value == 'nevermarried'){
  	marriage_filter = value
  	for (table_id of table_ids){


  		if (table_id.includes(marriage_filter)){
  			if (employ_filter == 'no_employ'){
  				document.getElementById(table_id).style.display = 'table-cell'
  			}
  			else {
  				if (table_id.includes(employ_filter)){
  					document.getElementById(table_id).style.display = 'table_cell'
  				}
  				else {
  					document.getElementById(table_id).style.display = 'none'
  				}
  			}
  			
  		}
	}
	for (row of rows){
		if (row.includes(marriage_filter)){
			document.getElementById(row).style.display = 'table-row'
		}
		else {
			document.getElementById(row).style.display = 'none'
		}
  		
  	}
  }

  	
}


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

  $.ajax({
    method: 'GET',
    url: query,
      }).done(function(data) {
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

		//console.log(data.features)
        
        for (feature of data.features){
        	//console.log(total_nowmarried_male_employed)
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

          	var full_male_table = '<table id="male_all" class="results"><tr style="background-color:#EBDEF0" id="title_all_male"><td style="color:#905393;font-weight:bold">Male-identifying</td><td style="color:#905393" id="_employed_title_male">Employed</td><td style="color:#905393" id="unemployed_title_male">Unemployed</td></tr><tr id="nowmarried_row_male"><td style="color:#905393;background-color:#EBDEF0" id="nowmarried_title_male">Currently married</td><td id="nowmarried_male_employed">'+total_nowmarried_male_employed+'</td><td id="nowmarried_male_unemployed">'+total_nowmarried_male_unemployed+'</td></tr><tr id="divorced_row_male"><td style="color:#905393;background-color:#EBDEF0" id="divorced_title_male">Divorced</td><td id="divorced_male_employed">'+total_divorced_male_employed+'</td><td id="divorced_male_unemployed">'+total_divorced_male_unemployed+'</td></tr><tr id="widowed_row_male"><td style="color:#905393;background-color:#EBDEF0" id="widowed_title_male">Widowed</td><td id="widowed_male_employed">'+total_widowed_male_employed+'</td><td id="widowed_male_unemployed">'+total_widowed_male_unemployed+'</td></tr><tr id="separated_row_male"><td style="color:#905393;background-color:#EBDEF0" id="separated_title">Separated</td><td id="separated_male_employed">'+total_separated_male_employed+'</td><td id="separated_male_unemployed">'+total_separated_male_unemployed+'</td></tr><tr id="nevermarried_row_male"><td style="color:#905393;background-color:#EBDEF0" id="nevermarried_title">Never married</td><td id="nevermarried_male_employed">'+total_nevermarried_male_employed+'</td><td id="nevermarried_male_unemployed">'+total_nevermarried_male_unemployed+'</td></tr></table>'

          	var full_female_table = '<table id="female_all" class="results"><tr style="background-color:#EBDEF0" id="title_all_female"><td style="color:#905393;font-weight:bold">Female-identifying</td><td style="color:#905393" id="_employed_title_female">Employed</td><td style="color:#905393" id="unemployed_title_female">Unemployed</td></tr><tr id="nowmarried_row_female"><td style="color:#905393;background-color:#EBDEF0" id="nowmarried_title_female">Currently married</td><td id="nowmarried_female_employed">'+total_nowmarried_female_employed+'</td><td id="nowmarried_female_unemployed">'+total_nowmarried_female_unemployed+'</td></tr><tr id="divorced_row_female"><td style="color:#905393;background-color:#EBDEF0" id="divorced_title_female">Divorced</td><td id="divorced_female_employed">'+total_divorced_female_employed+'</td><td id="divorced_female_unemployed">'+total_divorced_female_unemployed+'</td></tr><tr id="widowed_row_female"><td style="color:#905393;background-color:#EBDEF0" id="widowed_title_female">Widowed</td><td id="widowed_female_employed">'+total_widowed_female_employed+'</td><td id="widowed_female_unemployed">'+total_widowed_female_unemployed+'</td></tr><tr id="separated_row_female"><td style="color:#905393;background-color:#EBDEF0" id="separated_title">Separated</td><td id="separated_female_employed">'+total_separated_female_employed+'</td><td id="separated_female_unemployed">'+total_separated_female_unemployed+'</td></tr><tr id="nevermarried_row_female"><td style="color:#905393;background-color:#EBDEF0" id="nevermarried_title">Never married</td><td id="nevermarried_female_employed">'+total_nevermarried_female_employed+'</td><td id="nevermarried_female_unemployed">'+total_nevermarried_female_unemployed+'</td></tr></table>'
          	document.getElementById('robotext2').innerHTML = 'Within <span style="background-color:hsla(297, 28%, 45%, 0.49);color:white;font-weight:bold;border-radius:3px;padding:3px">1.5 kilometers</span> of your location, there are about <b>' + numberWithCommas(total_population) + '</b> people who are 16 years or older. Based on your preferences, here are their demographics:'
          	document.getElementById('robotext_male').innerHTML = 'Within <span style="background-color:hsla(297, 28%, 45%, 0.49);color:white;font-weight:bold;border-radius:3px;padding:3px">1.5 kilometers</span> of your location, there are about <b>' + numberWithCommas(total_male_population) + '</b> male-identifying people who are 16 years or older. Based on your preferences, here are their demographics:'
          	document.getElementById('robotext_female').innerHTML = 'Within <span style="background-color:hsla(297, 28%, 45%, 0.49);color:white;font-weight:bold;border-radius:3px;padding:3px">1.5 kilometers</span> of your location, there are about <b>' + numberWithCommas(total_female_population) + '</b> female-identifying people who are 16 years or older. Based on your preferences, here are their demographics:'

          	if  (sex_filter == "no_sex" || !sex_filter){
          		document.getElementById('robotext3').innerHTML = full_male_table
				document.getElementById('robotext4').innerHTML = full_female_table
          		/*document.getElementById('robotext2').innerHTML = 'There are about ' + numberWithCommas(total_population) + ' people who are 16 years or older within 1 kilometer of your location, ' + numberWithCommas(total_male_population) + ' male-identifying and ' numberWithCommas(total_male_population) + ' female-identifying.' 
				document.getElementById('robotext3').innerHTML = '<b>' + numberWithCommas(total_nevermarried) + '</b> people have never been married.' 
				document.getElementById('robotext4').innerHTML = numberWithCommas(total_nowmarried) + ' people are currently married.' 
				document.getElementById('robotext5').innerHTML = numberWithCommas(total_separated) + ' people are currently separated. There are ' + numberWithCommas(total_widowed) + ' widows. There are ' + numberWithCommas(total_divorced) + ' total divorced people.'*/
          	}
          	else if (sex_filter == 'male'){
          		document.getElementById("robotext2").style.display = 'none'

          		document.getElementById("robotext_male").style.display = 'block'
          		document.getElementById("robotext_female").style.display = 'none'
				document.getElementById('robotext3').innerHTML = full_male_table
				document.getElementById('robotext4').innerHTML = full_female_table
				document.getElementById('female_all').style.display = 'none'
          	}

          	else if (sex_filter == 'female'){
          		document.getElementById("robotext2").style.display = 'none'

          		document.getElementById("robotext_male").style.display = 'none'
          		document.getElementById("robotext_female").style.display = 'female'
          		
          		document.getElementById('robotext3').innerHTML = full_female_table
          		document.getElementById('robotext4').innerHTML = full_male_table
				document.getElementById('male_all').style.display = 'none'
          	}

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
		

		//document.getElementById('robotext3').innerHTML = '<b>' + numberWithCommas(total_nevermarried) + '</b> people have never been married.' 
		//document.getElementById('robotext4').innerHTML = numberWithCommas(total_nowmarried) + ' people are currently married.' 
		//document.getElementById('robotext5').innerHTML = numberWithCommas(total_separated) + ' people are currently separated. There are ' + numberWithCommas(total_widowed) + ' widows. There are ' + numberWithCommas(total_divorced) + ' total divorced people.'

        map.setFilter('nyc_tracts_highlight',myFilter)
        map.setLayoutProperty('nyc_tracts_highlight','visibility','visible')

      
      map.flyTo({center:coordinates,zoom:12});

 })}