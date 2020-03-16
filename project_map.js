

mapboxgl.accessToken = 'pk.eyJ1IjoiemFjaGxldml0dCIsImEiOiJjazdjdmdiemswN3B0M2ZsN3Y0cDdjdWFkIn0.f3Cb4Gj1PRXGHHW6xT6aDA';

var bounds = [
[-180.549495, 0], // Southwest coordinates
[-38.908874,72.551] // Northeast coordinates
];

var map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/zachlevitt/ck71cbegj0a0f1iqjn8regnj4/draft', // stylesheet location
  center: [-114.278395, 38.028578], // starting position [lng, lat]
  zoom: 3, // starting zoom
  minZoom: 3,
  maxZoom: 6,
  maxBounds: bounds
  });

map.addControl(new mapboxgl.NavigationControl());
map.scrollZoom.disable();
map.dragPan.disable();
map.doubleClickZoom.disable();
map.touchZoomRotate.disable();

var geocoder = new MapboxGeocoder({
  accessToken: mapboxgl.accessToken,
  country: 'us',
  mapboxgl: mapboxgl,
  placeholder: "ex. Cook County, IL",
});


document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

/*map.on('click', 'counties-w-centroid-8luv4d', function(e) {
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

map.on('mouseenter', 'counties-w-centroid-8luv4d', function() {
map.getCanvas().style.cursor = 'pointer';
});
 
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'counties-w-centroid-8luv4d', function() {
map.getCanvas().style.cursor = '';
});*/

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

var color_dict = {20:'#08306b',
                  19:'#08519c',
                  18:'#2171b5',
                  17:'#4292c6',
                  16:'#6baed6',
                  15:'#9ecae1',
                  14:'#c6dbef',
                  13:'#deebf7',
                  12:'#f7fbff',
                  11:'#ffffff',
                  10:'#ffffff',
                  9:'#fff5f0',
                  8:'#fee0d2',
                  7:'#fcbba1',
                  6:'#fc9272',
                  5:'#fb6a4a',
                  4:'#ef3b2c',
                  3:'#cb181d',
                  2:'#a50f15',
                  1:'#67000d'}

var county_GEOID, county_income, county_name,county_agr,county_mortality,county_energy_exp,county_labor_low,county_labor_high,county_coastal,county_property,county_crime,county_total_damage,center_coordinates

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


function color_graph(indicator, num, percentile){
  if (num == 0){
    num = 1
  }
  var table_id = indicator + "_" + num
  //console.log(table_id)
  document.getElementById(table_id).style.backgroundColor = color_dict[num]
    //document.getElementById(indicator).innerHTML = "<span style='font-weight:bold;color:" + color_dict[num] + "'>" + percentile + "</span>th percentile"
}

function decolorGraph(){
  var indicators = ["agricultural", "mortality","labor_high","coastal","violent","total"]
  
  for (var i = 0; i < indicators.length; i++){
    var indicator = indicators[i]
    document.getElementById(indicator).innerHTML = ""
    for (var j=1; j< 21; j++){
      var table_id = indicators[i] + "_" + j
      console.log(table_id)
      document.getElementById(table_id).style.backgroundColor = 'black'
    }
  }
}

function display(coordinates, query){

  $.ajax({
    method: 'GET',
    url: query,
      }).done(function(data) {
  const entries = Object.entries(data.features)
  //console.log("entires:" + entries)
  //console.log(entries[0][1].properties)
  //var properties = entries[0][1].properties
  county_GEOID = entries[0][1].properties.GEOID
  if (county_GEOID.slice(0,1)=='0'){
    county_GEOID = county_GEOID.slice(1)
  }
  county_income = counties_data[county_GEOID]['county_income_2012']
  county_name = counties_data[county_GEOID]['county_name'] + ", " + counties_data[county_GEOID]['state_code']
  county_agr = counties_data[county_GEOID]['agricultural_damage']
  //county_agr = county_agr.toFixed(2)
  county_mortality = (counties_data[county_GEOID]['mortality']).toFixed(2)
  county_energy_exp = (counties_data[county_GEOID]['energy_expenditures']).toFixed(2)
  county_labor_low = (counties_data[county_GEOID]['labor_low']).toFixed(2)
  county_labor_high = (counties_data[county_GEOID]['labor_high']).toFixed(2)
    county_coastal = (counties_data[county_GEOID]['coastal_damage']).toFixed(2)
  county_property = (counties_data[county_GEOID]['property_crime']).toFixed(2)
  county_crime = (counties_data[county_GEOID]['violent_crime']).toFixed(2)
  //var county_total_damage = (entries[0][1].properties[`Total dama`]).toFixed(2)
  county_total_damage = (counties_data[county_GEOID]['total_damages']).toFixed(2)
  center_coordinates = [entries[0][1].properties.xcoord-5,entries[0][1].properties.ycoord]
  

  map.setFilter('counties',['==', 'GEOID', county_GEOID])
  map.setFilter('counties-border',['==', 'GEOID', county_GEOID])
  map.setFilter('centroids_info',['==', 'GEOID', county_GEOID])
  map.setFilter('states-6all0o',['==', 'name', states[county_GEOID.substring(0,2)].name])
  map.setLayoutProperty('counties',"visibility","visible");
  map.setLayoutProperty('centroids_info',"visibility","visible")
  map.setLayoutProperty('counties-border',"visibility","visible");
  map.setLayoutProperty('states-6all0o',"visibility","visible");
  map.setLayoutProperty('centroids-ranks-c9ustg',"visibility","visible")
  //console.log(map.queryRenderedFeatures({ layers: ['states-6all0o'] }))
  //
  //var layers = map.getStyle().layers;
  console.log("county damage: " + county_total_damage)
  //
  //map.setFilter('better',['<', 'Total dama', county_total_damage])
  //console.log(map.getFilter('better'))
  //map.setLayoutProperty('better',"visibility","visible");
  //map.setFilter('worse',[">", 'Total dama', county_total_damage])
  //map.setLayoutProperty('worse',"visibility","visible");

  var indicators = ["agricultural", "mortality","labor_high","coastal","violent","total"]
  var values = [county_agr,county_mortality,county_energy_exp,county_labor_high,county_coastal,county_property,county_crime,county_total_damage]

  document.getElementById("name").innerHTML = "<span style='color:white;font-weight:bold'>" + county_name + "</span>"


  var percentile;
  for (var i = 0; i < indicators.length; i++){

    var id = indicators[i] + "_rank"
    var raw_num = counties_data[county_GEOID][id]/3144
    percentile = 100-Math.round(raw_num*100)
    var raw_num2 = counties_data[county_GEOID][id]/6288
    var chart_num = Math.round(raw_num*20)
    color_graph(indicators[i],chart_num, percentile)
  }

  //
  
  //var rank = counties_data[county_GEOID]["mortality_rank"]
  //console.log(rank)
  //var mortality_risk = Math.round((counties_data[county_GEOID]["mortality_rank"]/3144)*10)
  //console.log(mortality_risk)


    /*if (counties_data[county_GEOID]["mortality_rank"] < 786) {
      document.getElementById("ten").style.color = '#e31a1c'
    }

    else if (counties_data[county_GEOID]['mortality_rank'] < 1572) {
      document.getElementById(ranks[i]).style.color = '#fd8d3c'
    }

    else if (counties_data[county_GEOID]['mortality_rank'] < 2358) {
      document.getElementById(ranks[i]).style.color = '#fecc5c'
    } 

    else {
      document.getElementById("mortality_rank").style.color = '#ffffb2'
    } */

  //}
  

  /*
  document.getElementById("mortality_rank").innerHTML = county_mortality + " people per 100,000";
  document.getElementById("agricultural_rank").innerHTML = county_agr + "%";
  document.getElementById("total_rank").innerHTML = county_total_damage + "%";
  document.getElementById("violent_rank").innerHTML = county_crime;
  document.getElementById("property_rank").innerHTML = county_property;
  document.getElementById("labor_high_rank").innerHTML = county_labor_high;
  document.getElementById("coastal_rank").innerHTML = county_coastal;
  document.getElementById("energy_rank").innerHTML = county_energy_exp;*/
  /*document.getElementById("data2").innerHTML = "Between 2080 and 2099, the GDP of <span style='color:white'>" + county_name + "</span> could decrease by "+ county_total_damage + "%. This decrease will be driven by a " + county_agr + "% decrease in agricultural yields. The mortality rate in this county will increase by " + county_mortality + " people per 100 thousand residents."
  document.getElementById("data3").innerHTML = "For more context, compare these impacts to <span onClick='countyCompare()' style='text-decoration:underline'>another county</span>, all counties in <span onClick='stateCompare()' style='text-decoration:underline'>" + states[county_GEOID.substring(0,2)].name + "</span> or the entire <span onClick='regionCompare()' style='text-decoration:underline'>"+ states[county_GEOID.substring(0,2)].region+"</span>."*/
  //document.getElementById("data3").innerHTML = ;
  //document.getElementById("data4").innerHTML = county_mortality;
  document.getElementById('box2').style.display = 'block'
  document.getElementById('box2').style.height = 'auto' 
  document.getElementById('box1').style.display='none' 
  document.getElementById('box1').style.height='0px' 
  map.flyTo({center:center_coordinates,zoom:4});
  //map.setZoom(4)
  })
}

 function myFunction(prompt) {
   //document.getElementById("myDropdown").classList.toggle("show");
   //console.log(prompt)
   //console.log(county_GEOID)
   //console.log(counties_data[county_GEOID])
   //whatever is clicked, add layer
   //style it based on the value and the rank
   //
 }

 function searchAgain(){
    document.getElementById('box2').style.display='none'
    document.getElementById('box2').style.height='0px' 
    document.getElementById('box1').style.display='block' 
    document.getElementById('box2').style.height = 'auto' 

    map.setLayoutProperty('counties',"visibility","none");
    map.setLayoutProperty('counties-border',"visibility","none");
    map.setLayoutProperty('states-6all0o',"visibility","none");
    map.setLayoutProperty('centroids-ranks-c9ustg',"visibility","none")
    decolorGraph()
    //map.setLayoutProperty('better',"visibility","hidden");
    //map.setLayoutProperty('worse',"visibility","hidden");
    //document.querySelector('.mapboxgl-ctrl-geocoder').display = 'none'
    map.flyTo({center: [-114.278395, 38.028578],zoom: 3});
  
 }


  //var coordinates = e.features[0].geometry.coordinates.slice();
  //var description = e.features[0].properties.description;
 
// Ensure that if the map is zoomed out such that multiple
// copies of the feature are visible, the popup appears
// over the copy being pointed to.
// while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
// coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
// }