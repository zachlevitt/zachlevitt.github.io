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

$( function() {
    $( "#indicator" ).selectmenu();
 
    $( "#comparison" ).selectmenu();


  } );

$('#indicator').on('selectmenuchange', function() {

    //document.getElementById("title").innerHTML = "Change in " + indicator
    map.setLayoutProperty('centroids-ranks-total','visibility','none')
    map.setLayoutProperty('centroids-ranks-mortality','visibility','none')
    map.setLayoutProperty('centroids-ranks-agr','visibility','none')
    map.setLayoutProperty('centroids-ranks-violent','visibility','none')
    var indicator = document.getElementById("indicator").value;
    if (indicator == "total"){
      //map.setPaintProperty('centroids-ranks-c9ustg', 'fill-color', '#faafee');
      document.getElementById("indicator_title").innerHTML = "Change in county GDP, 2080-2099 (national percentiles)"
      document.getElementById("indicator2").innerHTML = "the GDP"
      map.setLayoutProperty('centroids-ranks-total','visibility','visible')

      //document.getElementById("risk_label").innerHTML = "Change in county GDP"
      //map.setPaintProperty("centroids-ranks-c9ustg", "circle-color",["case",
        //["get", "total_rank"],1048,"#fc8d59",2096,"#f7f7f7","#67a9cf"])
    //var raw_num = counties_data[county_GEOID]['total_rank']/3144
    //percentile = 100-Math.round(raw_num*100)

      if (county_total_damage > 0){
        var crease = "decrease"
      }
      else {
        var crease = "increase"
      }

      var percentile = 100-(100*counties_data[county_GEOID]['total_rank']/3144)
      document.getElementById("percentile").innerHTML = percentile.toFixed(0)

      document.getElementById("crease").innerHTML = crease
      document.getElementById("number").innerHTML = Math.abs(county_total_damage) + "%"
      var chart_num = Math.round(counties_data[county_GEOID]['total_rank']/157)
      color_graph(chart_num)
    }

    else if (indicator == "mortality"){
      console.log("hello hello")
      //map.setPaintProperty('centroids-ranks-c9ustg', 'fill-color', '#faafee');
      document.getElementById("indicator_title").innerHTML = "Change in mortality rate, 2080-2099 (national percentiles)"
      document.getElementById("indicator2").innerHTML = "the mortality rate"
      map.setLayoutProperty('centroids-ranks-mortality','visibility','visible')
      //map.setPaintProperty("centroids-ranks-", "circle-color",["<",
       // ["get", "mortality_"],1048,"#fc8d59",2096,"#f7f7f7","#67a9cf"])
      //document.getElementById("risk_label").innerHTML = "Change in mortality rate"
      
      if (county_mortality > 0){
        var crease = "increase"
      }
      else {
        var crease = "decrease"
      }

      var percentile = 100-(100*counties_data[county_GEOID]['mortality_rank']/3144)
      document.getElementById("percentile").innerHTML = percentile.toFixed(0)

      document.getElementById("crease").innerHTML = crease
      document.getElementById("number").innerHTML = Math.abs(county_mortality) + " people per 100,000 residents"
      var chart_num = Math.round(counties_data[county_GEOID]['mortality_rank']/157)
      color_graph(chart_num)
    }

    else if (indicator == "agricultural"){
      //map.setPaintProperty('centroids-ranks-c9ustg', 'fill-color', '#faafee');
      document.getElementById("indicator_title").innerHTML = "Change in agricultural yields, 2080-2099 (national percentiles)"
      document.getElementById("indicator2").innerHTML = "agricultural yields (average of maize, wheat, soybeans, cotton)"
      map.setLayoutProperty('centroids-ranks-agr','visibility','visible')
      //document.getElementById("risk_label").innerHTML = "Change in agricultural yields"
      if (county_agr > 0){
        var crease = "increase"
      }
      else {
        var crease = "decrease"
      }

      var percentile = 100-(100*counties_data[county_GEOID]['agricultural_rank_rank']/3144)
      document.getElementById("percentile").innerHTML = percentile.toFixed(0)

      document.getElementById("crease").innerHTML = crease
      document.getElementById("number").innerHTML = Math.abs(county_agr) + "%"
      var chart_num = Math.round(counties_data[county_GEOID]['agricultural_rank']/157)
      color_graph(chart_num)
    }

    else if (indicator == "violent"){
      //map.setPaintProperty('centroids-ranks-c9ustg', 'fill-color', '#faafee');
      document.getElementById("indicator_title").innerHTML = "Change in violent crime rates, 2080-2099 (national percentiles)"
      document.getElementById("indicator2").innerHTML = "the violent crime rate"
      map.setLayoutProperty('centroids-ranks-violent','visibility','visible')
      //document.getElementById("risk_label").innerHTML = "Change in violent crime rates"
      if (county_crime > 0){
        var crease = "increase"
      }
      else {
        var crease = "decrease"
      }
      var percentile = 100-(100*counties_data[county_GEOID]['violent_rank']/3144)
      document.getElementById("percentile").innerHTML = percentile.toFixed(0)
      document.getElementById("crease").innerHTML = crease
      document.getElementById("number").innerHTML = Math.abs(county_crime) + "%"
      var chart_num = Math.round(counties_data[county_GEOID]['violent_rank']/157)
      color_graph(chart_num)
    }

});

$('#comparison').on('selectmenuchange', function() {
    var comparison = document.getElementById("comparison").value;
    if (comparison == "all"){
      //document.getElementById("comparison_title").innerHTML = "counties with similar population"
      map.setFilter('centroids-ranks-total',undefined)
      map.setFilter('centroids-ranks-mortality',undefined)
      map.setFilter('centroids-ranks-agr',undefined)
      map.setFilter('centroids-ranks-violent',undefined)
      //map.flyTo({center:[38.178,-105.650],zoom:3.25});
    }
    if (comparison == "pop"){
      //document.getElementById("comparison_title").innerHTML = "counties with similar population"
      map.setFilter('centroids-ranks-total',["all",['<', 'county_pop', county_pop_rank+100],['>', 'county_pop', county_pop_rank-100]])
      map.setFilter('centroids-ranks-mortality',["all",['<', 'county_pop', county_pop_rank+100],['>', 'county_pop', county_pop_rank-100]])
      map.setFilter('centroids-ranks-agr',["all",['<', 'county_pop', county_pop_rank+100],['>', 'county_pop', county_pop_rank-100]])
      map.setFilter('centroids-ranks-violent',["all",['<', 'county_pop', county_pop_rank+100],['>', 'county_pop', county_pop_rank-100]])
      //map.flyTo({center:[38.178,-105.650],zoom:3.25});
    }

    else if (comparison == "income"){
      //document.getElementById("comparison_title").innerHTML = "counties with similar income level"
      map.setFilter('centroids-ranks-total',["all",['<', 'county_inc', county_income_rank+100],['>', 'county_inc', county_income_rank-100]])
      map.setFilter('centroids-ranks-mortality',["all",['<', 'county_inc', county_income_rank+100],['>', 'county_inc', county_income_rank-100]])
      map.setFilter('centroids-ranks-agr',["all",['<', 'county_inc', county_income_rank+100],['>', 'county_inc', county_income_rank-100]])
      map.setFilter('centroids-ranks-violent',["all",['<', 'county_inc', county_income_rank+100],['>', 'county_inc', county_income_rank-100]])
      //map.flyTo({center:[38.178,-105.650],zoom:3.25});
    }

    else if (comparison == "state"){
      //document.getElementById("comparison_title").innerHTML = "counties with similar income level"
      map.setFilter('centroids-ranks-total',['==','STATEFP', county_GEOID.substring(0,2)])
      map.setFilter('centroids-ranks-mortality',['==','STATEFP', county_GEOID.substring(0,2)])
      map.setFilter('centroids-ranks-agr',['==','STATEFP', county_GEOID.substring(0,2)])
      map.setFilter('centroids-ranks-violent',['==','STATEFP', county_GEOID.substring(0,2)])

    }



    
});
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

// var popup = new mapboxgl.Popup({
//   closeButton: false,
//   closeOnClick: false
// });

// map.on('mouseenter', 'centroids-ranks-total', function(e) {
// // Change the cursor style as a UI indicator.
//   //map.getCanvas().style.cursor = 'pointer';
 
//   var coordinates = e.features[0].geometry.coordinates.slice();
//   var description = e.features[0].properties.STATEFP;
   
//   // Ensure that if the map is zoomed out such that multiple
//   // copies of the feature are visible, the popup appears
//   // over the copy being pointed to.
//   while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
//   coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
// }
 
// // Populate the popup and set its coordinates
// // based on the feature found.
// popup
//   .setLngLat(coordinates)
//   .setHTML(description)
//   .addTo(map);
// });
 
// map.on('mouseleave', 'places', function() {
//   map.getCanvas().style.cursor = '';
//   popup.remove();
// });

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

var crease,state_code,percentile, county_GEOID, county_income_rank,county_pop_rank, county_name,county_agr,county_mortality,county_energy_exp,county_labor_low,county_labor_high,county_coastal,county_property,county_crime,county_total_damage,center_coordinates

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

function color_graph(num){
  
  for (var i = 1; i < 21; i++){
    var table_id = "table_" + i
    document.getElementById(table_id).style.border = '0px'
  }
  if (num == 0){
    num = 1
  }
  var table_id = "table_" + num
  document.getElementById(table_id).style.border = '2px #FFF700 solid'
    //document.getElementById(indicator).innerHTML = "<span style='font-weight:bold;color:" + color_dict[num] + "'>" + percentile + "</span>th percentile"
}
/*
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
}*/

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
  county_pop_rank = counties_data[county_GEOID]['county_pop_rank']
  county_income_rank = counties_data[county_GEOID]['county_income_rank']
  county_name = counties_data[county_GEOID]['county_name'] + ", " + counties_data[county_GEOID]['state_code']
  if (counties_data[county_GEOID]['agricultural_damage'] != ""){
    county_agr = (counties_data[county_GEOID]['agricultural_damage']).toFixed(2)
  }

  else {
    county_agr = 0
  }
  
  state_code = counties_data[county_GEOID]['state_code']
  console.log(state_code)
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
  center_coordinates = [entries[0][1].properties.xcoord-4,entries[0][1].properties.ycoord]
  

  //map.setFilter('counties',['==', 'GEOID', county_GEOID])
  //map.setFilter('counties-border',['==', 'GEOID', county_GEOID])
  map.setFilter('centroids_info',['==', 'GEOID', county_GEOID])
  map.setFilter('states-6all0o',['==', 'name', states[county_GEOID.substring(0,2)].name])
  map.setFilter('county-rank',['==', 'GEOID', county_GEOID])
  //map.setFilter('centroids-ranks-c9ustg',['!=', 'GEOID', county_GEOID])
  //map.setLayoutProperty('counties',"visibility","visible");
  map.setLayoutProperty('centroids_info',"visibility","visible")
  //map.setLayoutProperty('counties-border',"visibility","visible");
  map.setLayoutProperty('states-6all0o',"visibility","visible");
  map.setLayoutProperty('centroids-ranks-total',"visibility","visible")
  map.setLayoutProperty('county-rank',"visibility","visible")
  //console.log(map.queryRenderedFeatures({ layers: ['states-6all0o'] }))
  //
  //var layers = map.getStyle().layers;
  //console.log("county damage: " + county_total_damage)
  //
  //map.setFilter('better',['<', 'Total dama', county_total_damage])
  //console.log(map.getFilter('better'))
  //map.setLayoutProperty('better',"visibility","visible");
  //map.setFilter('worse',[">", 'Total dama', county_total_damage])
  //map.setLayoutProperty('worse',"visibility","visible");

  //var indicators = ["agricultural", "mortality","labor_high","coastal","violent","total"]
  //var values = [county_agr,county_mortality,county_labor_high,county_coastal,county_crime,county_total_damage]
  //var changes = ["agricultural yields","mortality rate","high-risk labor supply","damage from coastal storms and sea level rise","violent crime rate","total direct economic damage across sectors"]
  //document.getElementById("name").innerHTML = county_name
  document.getElementById("name2").innerHTML = county_name
  if (county_total_damage > 0){
    crease = "decrease"
  }
  else{
    crease = "increase"
  }
  var percentile = 100-(100*counties_data[county_GEOID]['total_rank']/3144)
  document.getElementById("percentile").innerHTML = percentile.toFixed(0)
  document.getElementById("crease").innerHTML = crease
  document.getElementById("number").innerHTML = Math.abs(county_total_damage) + "%"
  document.getElementById("indicator2").innerHTML = "the GDP"
  /*var output_increase = "increases in ";
  var output_decrease = "decreases in";
  for (var i = 0; i < changes.length; i++){
    if (values[i]>0){
      output_increase = output_increase.concat(changes[i],", ")
    }

    else {
      output_decrease = output_decrease.concat(changes[i],", ")
    }
  }*/

  //console.log("decreases: ",output_decrease)
  //console.log("increases: ",output_increase)
  //document.getElementById("changes").innerHTML = output_increase

  
  /*for (var i = 0; i < indicators.length; i++){

    var id = indicators[i] + "_rank"
    var raw_num = counties_data[county_GEOID][id]/3144
    percentile = 100-Math.round(raw_num*100)
    var raw_num2 = counties_data[county_GEOID][id]/6288
    var chart_num = Math.round(raw_num*20)
    color_graph(indicators[i],chart_num, percentile)
  }*/

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
  //console.log(counties_data[county_GEOID]['total_rank'])
  var chart_num = Math.round(counties_data[county_GEOID]['total_rank']/157)
  //console.log(chart_num)
  color_graph(chart_num)
  map.flyTo({center:center_coordinates,zoom:5});
  //map.setZoom(map.getZoom())
  })
}

function recenter(){
  map.flyTo({center:center_coordinates,zoom:5});
}

 function searchAgain(){
    document.getElementById('box2').style.display='none'
    document.getElementById('box2').style.height='0px' 
    document.getElementById('box1').style.display='block' 
    document.getElementById('box2').style.height = 'auto' 
    $("#indicator").val("total");
    $("#comparison").val("all");

    //map.setLayoutProperty('counties',"visibility","none");
    //map.setLayoutProperty('counties-border',"visibility","none");
    map.setLayoutProperty('states-6all0o',"visibility","none");
    map.setLayoutProperty('centroids-ranks-total','visibility','none')
    map.setLayoutProperty('centroids-ranks-mortality','visibility','none')
    map.setLayoutProperty('centroids-ranks-agr','visibility','none')
    map.setLayoutProperty('centroids-ranks-violent','visibility','none')
    map.setLayoutProperty('centroids_info',"visibility","none")
    map.setLayoutProperty('county-rank',"visibility","none")
    //decolorGraph()
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