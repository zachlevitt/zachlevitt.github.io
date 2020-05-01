mapboxgl.accessToken = 'pk.eyJ1IjoiemFjaGxldml0dCIsImEiOiJjazdjdmdiemswN3B0M2ZsN3Y0cDdjdWFkIn0.f3Cb4Gj1PRXGHHW6xT6aDA';

var bounds = [
[-35.119,-35.7], // Southwest coordinates
[35.037,35.505] // Northeast coordinates
];

// var bounds = [
// [-18.119,-30.7], // Southwest coordinates
// [16.037,25.505] // Northeast coordinates
// ];

var map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/zachlevitt/ck71cbegj0a0f1iqjn8regnj4/draft', // stylesheet location
  center: [-2,-2], // starting position [lng, lat]
  zoom: 3.6, // starting zoom
  minZoom: 3,
  maxZoom: 9,
  maxBounds: bounds,
  attributionControl: false,
  logoPosition: 'bottom-right',
  });

map.addControl(new mapboxgl.NavigationControl());
map.addControl(new mapboxgl.AttributionControl({compact: true}));
map.scrollZoom.disable();
map.doubleClickZoom.disable();
map.touchZoomRotate.disable();

/*map.on('style.load', () => {
  const waiting = () => {
    if (!map.isStyleLoaded()) {
      setTimeout(waiting, 1000);
    } else {
      map.setLayoutProperty('states-outline',"visiblity","visible")
    }
  };
  waiting();
});*/


var geocoder = new MapboxGeocoder({
  accessToken: mapboxgl.accessToken,
  country: 'us',
  mapboxgl: mapboxgl,
  placeholder: "ex. Cook County, IL",
});

function show(layer){
    console.log("pressed: " + layer)
    if (layer != 'population'){
      var visibility = map.getLayoutProperty(layer, 'visibility');
    //console.log(map.getLayoutProperty('states-outline', 'visibility'))

      if (visibility == "visible" | visibility == undefined){
        map.setLayoutProperty(layer,"visibility","none")
        document.getElementById(layer).className = "";
        if (layer == 'populated-places'){
          document.getElementById(layer).innerHTML = "Show major cities";
        }
        else if (layer == 'states-outline'){
          document.getElementById(layer).innerHTML = "Show state outlines";
        }

      }
      else {
        map.setLayoutProperty(layer,"visibility","visible")
        document.getElementById(layer).className = "active";
        if (layer == 'populated-places'){
          document.getElementById(layer).innerHTML = "Hide major cities";
        }
        else if (layer == 'states-outline'){
          document.getElementById(layer).innerHTML = "Hide state outlines";
        }
        else if (layer=='counties-total'){
          document.getElementById('counties-mortality').className = "";
          map.setLayoutProperty('counties-mortality',"visibility","none")
          document.getElementById('counties-agricultural').className = "";
          map.setLayoutProperty('counties-agricultural',"visibility","none")
          document.getElementById('counties-violent').className = "";
          map.setLayoutProperty('counties-violent',"visibility","none")
        }
        else if (layer=='counties-mortality'){
          document.getElementById('counties-total').className = "";
          map.setLayoutProperty('counties-total',"visibility","none")
          document.getElementById('counties-agricultural').className = "";
          map.setLayoutProperty('counties-agricultural',"visibility","none")
          document.getElementById('counties-violent').className = "";
          map.setLayoutProperty('counties-violent',"visibility","none")
        }
        else if (layer=='counties-violent'){
          document.getElementById('counties-mortality').className = "";
          document.getElementById('counties-agricultural').className = "";
          map.setLayoutProperty('counties-agricultural',"visibility","none")
          document.getElementById('counties-total').className = "";
          map.setLayoutProperty('counties-total',"visibility","none")
          map.setLayoutProperty('counties-mortality',"visibility","none")
        }
        else if (layer=='counties-agricultural'){
          document.getElementById('counties-mortality').className = "";
          map.setLayoutProperty('counties-mortality',"visibility","none")
          document.getElementById('counties-violent').className = "";
          map.setLayoutProperty('counties-violent',"visibility","none")
          document.getElementById('counties-total').className = "";
          map.setLayoutProperty('counties-total',"visibility","none")
        }
      }
    }
    else {
      if (document.getElementById('population').className == "active"){
        map.setPaintProperty('counties-total','fill-opacity',0.8)
        map.setPaintProperty('counties-mortality','fill-opacity',0.8)
        map.setPaintProperty('counties-violent','fill-opacity',0.8)
        map.setPaintProperty('counties-agricultural','fill-opacity',0.8)
        document.getElementById('population').className = ""
        document.getElementById('population').innerHTML = "Show population";
        /*document.getElementById('agricultural_legend').style.display = 'none'
        document.getElementById('agricultural_legend_simple').style.display = 'block'
        document.getElementById('total_legend').style.display = 'none'
        document.getElementById('total_legend_simple').style.display = 'block'*/
        document.getElementById('mortality_legend').style.display = 'none'
        document.getElementById('mortality_legend_simple').style.display = 'block'
        document.getElementById('mortality_legend1').style.display = 'none'
        document.getElementById('mortality_legend_simple1').style.display = 'block'
      }
      else {
        document.getElementById('population').className = "active"
        document.getElementById('population').innerHTML = "Hide population";
        /*document.getElementById('agricultural_legend').style.display = 'block'
        document.getElementById('agricultural_legend_simple').style.display = 'none'
        document.getElementById('total_legend').style.display = 'block'
        document.getElementById('total_legend_simple').style.display = 'none'*/
        document.getElementById('mortality_legend').style.display = 'block'
        document.getElementById('mortality_legend_simple').style.display = 'none'
        document.getElementById('mortality_legend1').style.display = 'block'
        document.getElementById('mortality_legend_simple1').style.display = 'none'
        map.setPaintProperty('counties-total','fill-opacity',[
                    "interpolate",
                    ["linear"],
                    ["get", "ppl_sqmi"],
                    10,
                    0.04,
                    25,
                    0.05,
                    50,
                    0.1,
                    100,
                    0.2,
                    300,
                    0.4,
                    500,
                    0.6,
                    1000,
                    0.8,
                    2000,
                    1
                ])
        map.setPaintProperty('counties-mortality','fill-opacity',[
                    "interpolate",
                    ["linear"],
                    ["get", "ppl_sqmi"],
                    10,
                    0.04,
                    25,
                    0.05,
                    50,
                    0.1,
                    100,
                    0.2,
                    300,
                    0.4,
                    500,
                    0.6,
                    1000,
                    0.8,
                    2000,
                    1
                ])
        map.setPaintProperty('counties-violent','fill-opacity',[
                    "interpolate",
                    ["linear"],
                    ["get", "ppl_sqmi"],
                    10,
                    0.04,
                    25,
                    0.05,
                    50,
                    0.1,
                    100,
                    0.2,
                    300,
                    0.4,
                    500,
                    0.6,
                    1000,
                    0.8,
                    2000,
                    1
                ])
        map.setPaintProperty('counties-agricultural','fill-opacity',[
                    "interpolate",
                    ["linear"],
                    ["get", "ppl_sqmi"],
                    10,
                    0.04,
                    25,
                    0.05,
                    50,
                    0.1,
                    100,
                    0.2,
                    300,
                    0.4,
                    500,
                    0.6,
                    1000,
                    0.8,
                    2000,
                    1
                ])
      }
      
    }
    
}

var chapterNames = ["scroll1","scroll2","search","scroll4","scroll3"]

function onScroll() {
  //console.log("scrolling")
  for (var i = 0; i < chapterNames.length; i++) {
    var chapterName = chapterNames[i];
    //console.log(chapterName)
    if (isElementActive(chapterName)) {
      //console.log(chapterName + " is active")
      if (chapterName == "scroll2"){
        document.getElementById("population").style.visibility = 'visible';
        document.getElementById("population").style.opacity = 1;
        document.getElementById("populated-places").style.visibility = 'visible';
        document.getElementById("populated-places").style.opacity = 1;
        document.getElementById("states-outline").style.visibility = 'visible';
        document.getElementById("states-outline").style.opacity = 1;
      }
      /*else if (chapterName == "pop"){
        //map.setLayoutProperty('populated-places',"visibility","visible")
        map.setLayoutProperty('counties-mortality-full-opacity',"visibility","none")
        map.setLayoutProperty('population','visibility','visible')
        map.setLayoutProperty('counties-mortality','visibility','none')
        //map.setLayoutProperty('counties-violent','visibility','none')
        map.setLayoutProperty('counties-agricultural','visibility','none')
        map.setLayoutProperty('counties-total','visibility','none')
      }*/
      else if (chapterName == "scroll1"){
        document.getElementById("population").style.visibility = 'hidden';
        document.getElementById("population").style.opacity = 0;
        document.getElementById("populated-places").style.visibility = 'hidden';
        document.getElementById("populated-places").style.opacity = 0;
        document.getElementById("states-outline").style.visibility = 'hidden';
        document.getElementById("states-outline").style.opacity = 0;
        map.setLayoutProperty('states-outline',"visibility","visible")
        map.setLayoutProperty('counties-highlight',"visibility","visible")
        map.setLayoutProperty('counties-poly-background',"visibility","visible")
        map.setLayoutProperty('counties-mortality','visibility','visible')
        map.setPaintProperty('counties-mortality','fill-opacity',0.8)
        map.setPaintProperty('counties-total','fill-opacity',0.8)
        map.setPaintProperty('counties-agricultural','fill-opacity',0.8)
        map.setPaintProperty('counties-violent','fill-opacity',0.8)
        //map.setLayoutProperty('counties-mortality-full-opacity',"visibility","visible")
        map.setLayoutProperty('counties-total','visibility','none')
        map.setLayoutProperty('counties-agricultural','visibility','none')
        
        //document.getElementById("population").style.border = '1px solid white';
        document.getElementById("map").style.opacity = 1;
        document.getElementById("menu").style.borderTop = '2px solid #262626'
        //map.setLayoutProperty('counties-violent','visibility','none')
        map.setLayoutProperty('population','visibility','none')

        
        
      }

      else if (chapterName == "scroll3"){
        //map.setLayoutProperty('counties-mortality-full-opacity',"visibility","none")
        map.setLayoutProperty('counties-total','visibility','none')
        map.setLayoutProperty('counties-agricultural','visibility','none')
        //map.setLayoutProperty('counties-violent','visibility','none')
        map.setLayoutProperty('population','visibility','none')
        map.setLayoutProperty('counties-mortality','visibility','visible')
        
        document.getElementById("layers").style.visibility = 'hidden';
        document.getElementById("layers").style.opacity = 0;
        
      }
        
      /*if (chapterName == "violent_crime"){
        map.setLayoutProperty('counties-total','visibility','none')
        map.setLayoutProperty('counties-agricultural','visibility','none')
        map.setLayoutProperty('population','visibility','none')
        map.setLayoutProperty('counties-mortality','visibility','none')
        map.setLayoutProperty('counties-violent','visibility','visible')
      }*/
      else if (chapterName == "scroll4"){
        //map.setLayoutProperty('counties-total','visibility','none')
        //map.setLayoutProperty('population','visibility','none')
        //map.setLayoutProperty('counties-mortality','visibility','none')
        //map.setLayoutProperty('counties-violent','visibility','none')
        //map.setLayoutProperty('counties-agricultural','visibility','none')
        document.getElementById("layers").style.visibility = 'visible';
        document.getElementById("layers").style.opacity = 1;

      }
      /*else if (chapterName == "total_econ"){
        map.setLayoutProperty('counties-agricultural','visibility','none')
        map.setLayoutProperty('counties-mortality','visibility','none')
        //map.setLayoutProperty('counties-violent','visibility','none')
        map.setLayoutProperty('population','visibility','none')
        map.setLayoutProperty('counties-total','visibility','visible')
        //document.getElementById("filter").style.display = 'none';
        //document.getElementById("layers").style.display = 'none';
        //document.getElementById("population").style.display = 'none';
      }*/

      else if (chapterName == "search"){
        //document.getElementById("filter").style.visibility = 'visible';
        //document.getElementById("filter").style.opacity = 1;
      }

      }
  }
};

function isElementActive(id) {
  var element = document.getElementById(id);
  var bounds = element.getBoundingClientRect();
  //console.log(id + " bounds top: " + bounds.top)
  //console.log(window.innerHeight)
  //console.log(bounds.top)
  return bounds.top < 500 && bounds.top > 100
  //return (bounds.top+100) === window.innerHeight
}


document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

$( function() {
    $( "#indicator" ).selectmenu();
 
    $( "#comparison" ).selectmenu();


  } );

$('#indicator').on('selectmenuchange', function() {

    //var window_height = 0.9*window.innerHeight
    //console.log(window_height)
    //console.log(document.getElementsByClassName("ui-selectmenu-menu ui-front ui-selectmenu-open"))
    //.style.top=window_height+"px";

    //document.getElementById("title").innerHTML = "Change in " + indicator
    map.setLayoutProperty('counties-total','visibility','none')
    map.setLayoutProperty('counties-mortality','visibility','none')
    map.setLayoutProperty('counties-agricultural','visibility','none')
    map.setLayoutProperty('counties-violent','visibility','none')
    map.setLayoutProperty('population','visibility','none')
    var indicator = document.getElementById("indicator").value;
    if (indicator == "population"){
      map.setLayoutProperty('population','visibility','visible')
    }
    if (indicator == "total"){
      //map.setPaintProperty('centroids-ranks-c9ustg', 'fill-color', '#faafee');
      //document.getElementById("indicator_title").innerHTML = "National percentile for change in GDP, 2080-2099"
      //document.getElementById("indicator2").innerHTML = "the GDP"
      map.setLayoutProperty('counties-total','visibility','visible')
      document.getElementById('agricultural_text').style.display = 'none';
      document.getElementById('total_text').style.display = 'block';
      document.getElementById('mortality_text').style.display = 'none';
      document.getElementById('violent_text').style.display = 'none';
      //document.getElementById("risk_label").innerHTML = "Change in county GDP"
      //map.setPaintProperty("centroids-ranks-c9ustg", "circle-color",["case",
        //["get", "total_rank"],1048,"#fc8d59",2096,"#f7f7f7","#67a9cf"])
    //var raw_num = counties_data[county_GEOID]['total_rank']/3144
    //percentile = 100-Math.round(raw_num*100)

      /*if (county_total_damage > 0){
        var crease = "decrease"
      }
      else {
        var crease = "increase"
      }*/

      //var percentile = 100-(100*counties_data[county_GEOID]['total_rank']/3144)
      //document.getElementById("percentile").innerHTML = percentile.toFixed(0)

      //document.getElementById("crease").innerHTML = crease
      //document.getElementById("number").innerHTML = Math.abs(county_total_damage) + "%"
      //var chart_num = Math.round(counties_data[county_GEOID]['total_rank']/157)
      //color_graph(chart_num)
    }

    else if (indicator == "mortality"){
      //console.log("hello hello")
      //map.setPaintProperty('centroids-ranks-c9ustg', 'fill-color', '#faafee');
      
      map.setLayoutProperty('counties-mortality','visibility','visible')
      document.getElementById('agricultural_text').style.display = 'none';
      document.getElementById('total_text').style.display = 'none';
      document.getElementById('mortality_text').style.display = 'block';
      document.getElementById('violent_text').style.display = 'none';
      //map.setPaintProperty("centroids-ranks-", "circle-color",["<",
       // ["get", "mortality_"],1048,"#fc8d59",2096,"#f7f7f7","#67a9cf"])
      //document.getElementById("risk_label").innerHTML = "Change in mortality rate"
      /*document.getElementById("indicator_title").innerHTML = "National percentile for change in mortality rate, 2080-2099"
      document.getElementById("indicator2").innerHTML = "the mortality rate"
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
      color_graph(chart_num)*/
    }

    else if (indicator == "agricultural"){
      //map.setPaintProperty('centroids-ranks-c9ustg', 'fill-color', '#faafee');
      map.setLayoutProperty('counties-agricultural','visibility','visible')
      document.getElementById('agricultural_text').style.display = 'block';
      document.getElementById('total_text').style.display = 'none';
      document.getElementById('mortality_text').style.display = 'none';
      document.getElementById('violent_text').style.display = 'none';
      //document.getElementById("risk_label").innerHTML = "Change in agricultural yields"
      /*
      document.getElementById("indicator_title").innerHTML = "National percentile for change in agricultural yields, 2080-2099"
      document.getElementById("indicator2").innerHTML = "agricultural yields (average of maize, wheat, soybeans, cotton)"
      
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
      color_graph(chart_num)*/
    }

    else if (indicator == "violent"){
      //map.setPaintProperty('centroids-ranks-c9ustg', 'fill-color', '#faafee');
      
      map.setLayoutProperty('counties-violent','visibility','visible')
      document.getElementById('agricultural_text').style.display = 'none';
      document.getElementById('total_text').style.display = 'none';
      document.getElementById('mortality_text').style.display = 'none';
      document.getElementById('violent_text').style.display = 'block';
      //document.getElementById("risk_label").innerHTML = "Change in violent crime rates"
      /*document.getElementById("indicator_title").innerHTML = "National percentile for change in violent crime rate, 2080-2099"
      document.getElementById("indicator2").innerHTML = "the violent crime rate"
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
      color_graph(chart_num)*/
    }

});

$('#comparison').on('selectmenuchange', function() {
    var comparison = document.getElementById("comparison").value;
    if (comparison == "all"){
      //document.getElementById("comparison_title").innerHTML = "counties with similar population"
      map.setFilter('counties-total',undefined)
      map.setFilter('counties-mortality',undefined)
      map.setFilter('counties-agricultural',undefined)
      map.setFilter('counties-violent',undefined)
      map.flyTo({center:[2,2],zoom:3.6,});
    }
    if (comparison == "pop"){
      //document.getElementById("comparison_title").innerHTML = "counties with similar population"
      map.setFilter('counties-total',["all",['<', 'county_pop', county_pop_rank+100],['>', 'county_pop', county_pop_rank-100]])
      map.setFilter('counties-mortality',["all",['<', 'county_pop', county_pop_rank+100],['>', 'county_pop', county_pop_rank-100]])
      map.setFilter('counties-agricultural',["all",['<', 'county_pop', county_pop_rank+100],['>', 'county_pop', county_pop_rank-100]])
      map.setFilter('counties-violent',["all",['<', 'county_pop', county_pop_rank+100],['>', 'county_pop', county_pop_rank-100]])
      map.flyTo({center:[2,2],zoom:3.6,});
    }

    else if (comparison == "income"){
      //document.getElementById("comparison_title").innerHTML = "counties with similar income level"
      map.setFilter('counties-total',["all",['<', 'county_inc', county_income_rank+100],['>', 'county_inc', county_income_rank-100]])
      map.setFilter('counties-mortality',["all",['<', 'county_inc', county_income_rank+100],['>', 'county_inc', county_income_rank-100]])
      map.setFilter('counties-agricultural',["all",['<', 'county_inc', county_income_rank+100],['>', 'county_inc', county_income_rank-100]])
      map.setFilter('counties-violent',["all",['<', 'county_inc', county_income_rank+100],['>', 'county_inc', county_income_rank-100]])
      map.flyTo({center:[2,2],zoom:3.6,});
    }

    else if (comparison == "state"){
      //document.getElementById("comparison_title").innerHTML = "counties with similar income level"
      map.setFilter('counties-total',['==','STATEFP', county_GEOID.substring(0,2)])
      map.setFilter('counties-mortality',['==','STATEFP', county_GEOID.substring(0,2)])
      map.setFilter('counties-agricultural',['==','STATEFP', county_GEOID.substring(0,2)])
      map.setFilter('counties-violent',['==','STATEFP', county_GEOID.substring(0,2)])
      map.zoomTo(5);

    }
    
});

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

map.on('click', 'counties-poly-background', function(e) {
  //console.log(e.features[0])
  //
  var coordinates= [e.features[0].properties.centroid_xcoord,e.features[0].properties.centroid_ycoord]
  //console.log(coordinates)
  //var description = e.features[0].properties.description
  //console.log(e.features[0].properties)
  var name = e.features[0].properties.NAME
  console.log(e.features[0].properties)
  var abbrev = states[e.features[0].properties.STATEFP].abbreviation
  
  var income = numberWithCommas(e.features[0].properties['County Inc'])
  var pop = (e.features[0].properties['County Pop'])
  var total_num = (e.features[0].properties['Total dama']).toFixed(2)
  var total_rank = (e.features[0].properties['total_rank'])
  var total_color,total_display;

  if (total_num > 0){
    var total_display = '+'+total_num
  }
  else {
    var total_display = total_num
  }


  if (total_rank < 629){
    total_color = '#c80000'
  }
  else if (total_rank < 1258){
    total_color = '#d35617'
  }
  else if (total_rank < 1887){
    total_color = '#e28740'
  }
  else if (total_rank < 2516){
    total_color = '#ebb075'
  }
  else {
    total_color = '#eedabf'
  }

  var pop_display = numberWithCommas(e.features[0].properties['County Pop'])
  var pop_density = (e.features[0].properties['ppl_sqmi']).toFixed(2)
  //console.log(pop_density)
  var mortality_num = (e.features[0].properties.Mortality).toFixed(2)
  if (mortality_num > 0){
    var mortality_display = '+'+mortality_num
  }
  else {
    var mortality_display = mortality_num
  }

  //var mortality_percentile = parseInt((100*county_mortality_rank/3144))

  var mortality_color;
  if (e.features[0].properties.mortality_ < 629){
    mortality_color = '#c80000'
  }
  else if (e.features[0].properties.mortality_ < 1258){
    mortality_color = '#d35617'
  }
  else if (e.features[0].properties.mortality_ < 1887){
    mortality_color = '#e28740'
  }
  else if (e.features[0].properties.mortality_ < 2516){
    mortality_color = '#ebb075'
  }
  else {
    mortality_color = '#eedabf'
  }

  if (e.features[0].properties.Agricultur){
    var agricultural_num = (e.features[0].properties.Agricultur).toFixed(2)
  if (agricultural_num > 0){
    var agricultural_display = '+'+agricultural_num
  }
  else {
    var agricultural_display = agricultural_num
  }

  var agricultural_color;
  if (e.features[0].properties.agricult_1 < 629){
    agricultural_color = '#c80000'
  }
  else if (e.features[0].properties.agricult_1 < 1258){
    agricultural_color = '#d35617'
  }
  else if (e.features[0].properties.agricult_1 < 1887){
    agricultural_color = '#e28740'
  }
  else if (e.features[0].properties.agricult_1 < 2516){
    agricultural_color = '#ebb075'
  }
  else {
    agricultural_color = '#eedabf'
  }
  }
  
  
  var text = (name.concat(" County, ")).concat(abbrev)
  var display;
  if (document.getElementById("layers").style.visibility == 'visible'){
      display = '<h3 style="font-weight:bold">'+text+'</h3>'+'<h5>Population (2012)</h5><h4><b>' + pop_display +'</b></h4><h5>% change in agricultural yields</h5><h4 style="color:' + agricultural_color +'"><b>' + agricultural_display +'</b></h4><h5>Change in deaths per 100,000</h5><h4 style="color:' + mortality_color +'"><b>' + mortality_display +'</b></h4><h5>% change in county GDP</h5><h4 style="color:' + total_color +'"><b>' + total_display +'</b></h4>'
  }
  else if (map.getLayoutProperty('population','visibility') == 'visible'){
    display = '<h3 style="font-weight:bold">'+text+'</h3>'+'<h5>Population (2012)</h5><h4><b>' + pop_display +'</b></h4><h5>People per square mile</h5><h4><b>' + pop_density +'</b></h4>'
  }

  else if (map.getLayoutProperty('counties-mortality','visibility') == 'visible'){
    display = '<h3 style="font-weight:bold">'+text+'</h3>'+'<h5>Population (2012)</h5><h4><b>' + pop_display +'</b></h4><h5>Change in deaths per 100,000</h5><h4 style="color:' + mortality_color +'"><b>' + mortality_display +'</b></h4><h5>Change in total deaths based on 2012 population</h5><h4><b>' + (mortality_num*(pop/100000)).toFixed(0) +'</b></h4>'
  }

  //else if (map.getLayoutProperty('counties-mortality-full-opacity','visibility') == 'visible'){
  //      display = '<h3 style="font-weight:bold">'+text+'</h3>'+'<h5>Change in deaths per 100,000 (2080-2099)</h5><h4 style="color:' + mortality_color +'"><b>' + mortality_display +'</b></h4>'
 // }

  else if (map.getLayoutProperty('counties-agricultural','visibility') == 'visible'){
    display = '<h3 style="font-weight:bold">'+text+'</h3>'+'<h5>Population (2012)</h5><h4><b>' + pop_display +'</b></h4><h5>% change in agricultural yields</h5><h4 style="color:' + agricultural_color +'"><b>' + agricultural_display +'</b></h4>'
  }

  else if (map.getLayoutProperty('counties-total','visibility') == 'visible'){
    display = '<h3 style="font-weight:bold">'+text+'</h3>'+'<h5>Population (2012)</h5><h4><b>' + pop_display +'</b></h4><h5>% change in county GDP</h5><h4 style="color:' + total_color +'"><b>' + total_display +'</b></h4>'
  }

  
  new mapboxgl.Popup()
    .setLngLat(coordinates)
    .setHTML(display)
    .addTo(map);

});

map.on('mouseenter', 'counties-poly-background', function() {
map.getCanvas().style.cursor = 'pointer';
});
 
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'counties-poly-background', function() {
map.getCanvas().style.cursor = '';
});


//source: "zachlevitt.41255jo1"
//source_name: "centroids-d96qi3"

var hoveredStateId = null;

//console.log(map.style.sourceCaches)
//

map.on('mousemove', 'counties-poly-background', function(e) {
  //console.log(hoveredStateId)
  if (e.features.length > 0) {
    if (hoveredStateId) {
      map.setFeatureState(
        { source: 'composite', id: hoveredStateId, sourceLayer: 'counties_w_centroids_data_albers' },
        { hover: false }
      );
    }
      //console.log(e.features[0].id)
      hoveredStateId = e.features[0].id;

      //console.log("id is now:" + hoveredStateId)
      map.setFeatureState(
        { source: 'composite', id: hoveredStateId, sourceLayer: 'counties_w_centroids_data_albers' },
        { hover: true }
      );
      
  }
});
 
// When the mouse leaves the state-fill layer, update the feature state of the
// previously hovered feature.
map.on('mouseleave', 'counties-poly-background', function() {
  //console.log(hoveredStateId)
if (hoveredStateId) {
map.setFeatureState(
{ source: 'composite', id: hoveredStateId, sourceLayer: 'counties_w_centroids_data_albers' },
{ hover: false }
);
//console.log(hoveredStateId)
}
hoveredStateId = null;
});

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

/*var color_dict = {20:'#08306b',
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
                  1:'#67000d'}*/

var crease,state_code,percentile, county_GEOID, county_income_rank,county_pop_rank, county_name,county_agr,county_mortality,county_energy_exp,county_labor_low,county_labor_high,county_coastal,county_property,county_crime,county_total_damage,center_coordinates

geocoder.on('result', function(ev) {


  //check if control is there
  map.scrollZoom.enable();
  map.dragPan.enable();
  map.doubleClickZoom.enable();
  //map.touchZoomRotate.enable();
  document.getElementById("filter").style.visibility = 'visible';
  document.getElementById("filter").style.opacity = 1;
      
  //app.map.setLayoutProperty('epicenters-8-12-19-5boyv3',"visibility","none");
  
  //coordinates = ev.result.geometry.coordinates
  var coordinates = ev.result.center;
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

function chooseColor(value){
  // if (value < 629){
  //   return'#c80000'
  // }
  // else if (value < 1258){
  //   return '#d35617'
  // }
  // else if (value < 1887){
  //   return '#e28740'
  // }
  // else if (value < 2516){
  //   return '#ebb075'
  // }
  // else {
  //   return '#eedabf'
  if (value < 20){
    return'#c80000'
  }
  else if (value < 40){
    return '#d35617'
  }
  else if (value < 60){
    return '#e28740'
  }
  else if (value < 80){
    return '#ebb075'
  }
  else {
    return '#eedabf'
  }
}

function labelPercentile(percentile){
  console.log(percentile)
  var percent_display = 100-percentile;
  if (percentile <= 20){
    return "Highest risk <span style='color:gray;font-size:14px;font-weight:normal'>(Top " + percentile + "%)</span>" 
  }
  else if (percentile <= 40){
    return "High risk <span style='color:gray;font-size:14px;font-weight:normal'>(Top " + percentile + "%)</span>" 
  }
  else if (percentile <= 60){
    return "Medium risk <span style='color:gray;font-size:14px;font-weight:normal'>(Within 10% of national median)</span>" 
  }
  else if (percentile <= 80){
    return "Low risk <span style='color:gray;font-size:14px;font-weight:normal'>(Worse than only " + percent_display + "% of the country)</span>" 
  }
  else {
    return "Lowest risk <span style='color:gray;font-size:14px;font-weight:normal'>(Worse than only " + percent_display + "% in the country)</span>" 
  }
}

function display(coordinates, query){

  $.ajax({
    method: 'GET',
    url: query,
      }).done(function(data) {
  const entries = Object.entries(data.features)
  
  //console.log(entries[0][1].properties)
  //var properties = entries[0][1].properties
  county_GEOID = entries[0][1].properties.GEOID
  //var countyNS = entries[0][1].properties.COUNTYNS
  console.log(county_GEOID)
  //console.log(countyNS)

  //console.log(county_GEOID)
  var county_of_interest = map.querySourceFeatures('composite',{sourceLayer: 'counties_w_centroids_data_albers',filter:['==', 'GEOID', county_GEOID]})
  //console.log(county_of_interest[0])
  //if (county_GEOID.slice(0,1)=='0'){
    //county_GEOID = county_GEOID.slice(1)
  //}
  if (county_GEOID.slice(0,1)=='0'){
    //console.log("hello")
    var shorter_county_GEOID = county_GEOID.slice(1,)
    console.log("new: " + shorter_county_GEOID)
  }
  else {
    var shorter_county_GEOID = county_GEOID
  }
  county_pop = counties_data[shorter_county_GEOID]['county_pop_2012']
  county_pop_rank = counties_data[shorter_county_GEOID]['county_pop_rank']
  county_income_rank = counties_data[shorter_county_GEOID]['county_income_rank']
  county_income = counties_data[shorter_county_GEOID]['county_income_2012']
  county_name = counties_data[shorter_county_GEOID]['county_name'] + ", " + counties_data[shorter_county_GEOID]['state_code']
  if (counties_data[shorter_county_GEOID]['agricultural_damage'] != ""){
    county_agr = (counties_data[shorter_county_GEOID]['agricultural_damage']).toFixed(2)
    county_agr_rank = counties_data[shorter_county_GEOID]['agricultural_rank']
    var agricultural_percentile = parseInt((100*county_agr_rank/3144))
  }

  else {
    county_agr = undefined
    county_agr_rank = undefined
    var agricultural_percentile = undefined
  }
  
  state_code = counties_data[shorter_county_GEOID]['state_code']
  //console.log(state_code)
  //county_agr = county_agr.toFixed(2)
  county_mortality = (counties_data[shorter_county_GEOID]['mortality']).toFixed(2)
  county_energy = (counties_data[shorter_county_GEOID]['energy_expenditures']).toFixed(2)
  county_labor_low = (counties_data[shorter_county_GEOID]['labor_low']).toFixed(2)
  county_labor_high = (counties_data[shorter_county_GEOID]['labor_high']).toFixed(2)
  county_coastal = (counties_data[shorter_county_GEOID]['coastal_damage']).toFixed(2)
  county_property = (counties_data[shorter_county_GEOID]['property_crime']).toFixed(2)
  county_violent = (counties_data[shorter_county_GEOID]['violent_crime']).toFixed(2)
  county_total_damage = (counties_data[shorter_county_GEOID]['total_damages']).toFixed(2)

  county_mortality_rank = (counties_data[shorter_county_GEOID]['mortality_rank'])
  county_energy_rank = (counties_data[shorter_county_GEOID]['energy_rank'])
  county_labor_low_rank = (counties_data[shorter_county_GEOID]['labor_low_rank'])
  county_labor_high_rank = (counties_data[shorter_county_GEOID]['labor_high_rank'])
  county_coastal_rank = (counties_data[shorter_county_GEOID]['coastal_rank'])
  county_property_rank = (counties_data[shorter_county_GEOID]['property_rank'])
  county_violent_rank = (counties_data[shorter_county_GEOID]['violent_rank'])
  county_total_rank = (counties_data[shorter_county_GEOID]['total_rank'])
  var ranks_analysis = [county_mortality_rank,county_total_rank,county_violent_rank,county_agr_rank]
  var ranks_name = ["mortality rate","county GDP","violent crime rate","agricultural yields"]
  var values = [county_mortality,county_total_damage,county_violent,county_agr]

  //var county_total_damage = (entries[0][1].properties[`Total dama`]).toFixed(2)
  
  //console.log(entries[0][1].properties)
  center_coordinates = [county_of_interest[0].properties.centroid_xcoord,county_of_interest[0].properties.centroid_ycoord]
  
  var min_rank = 9000;
  var min_name="";
  var max_rank = 0;
  var max_name = "";
  var min_value,max_index;
  for (var index=0;index < ranks_analysis.length;index++){
    if (ranks_analysis[index]){
    if (ranks_analysis[index] < min_rank) {
      min_rank = ranks_analysis[index]
      min_name = ranks_name[index]
      min_value = values[index]
    }
    if (ranks_analysis[index] > max_rank) {
      max_rank = ranks_analysis[index]
      max_name = ranks_name[index]
      max_value = values[index]
    }
    }
  }

  document.getElementById("name3").innerHTML = county_name
  if (min_value > 0){
    crease = "a decrease"
  }
  else{
    crease = "an increase"
  }
  var total_percentile = parseInt((100*county_total_rank/3144))
  var violent_percentile = parseInt((100*county_violent_rank/3144))
  var mortality_percentile = parseInt((100*county_mortality_rank/3144))
  
  if (county_total_damage > 0){
    var total_display = '+'+county_total_damage
  }
  else {
    var total_display = county_total_damage
  }

  if (county_violent > 0){
    var violent_display = '+'+county_violent
  }
  else {
    var violent_display = county_violent
  }

  if (county_mortality > 0){
    var mortality_display = '+'+county_mortality
  }
  else {
    var mortality_display = county_mortality
  }

  if (counties_data[shorter_county_GEOID]['agricultural_damage']){
  if (county_agr > 0){
    var agricultural_display = '+'+county_agr
  }
  else {
    var agricultural_display = county_agr
  }
}


  document.getElementById("total_percentile").innerHTML = labelPercentile(total_percentile)
  document.getElementById("total_percentile").style.color = chooseColor(total_percentile)
  document.getElementById("total_value").innerHTML = total_display + "%"
  document.getElementById("total_value").style.color = chooseColor(total_percentile) 

  document.getElementById("violent_percentile").innerHTML = labelPercentile(violent_percentile)
  document.getElementById("violent_percentile").style.color = chooseColor(violent_percentile)
  document.getElementById("violent_value").innerHTML = violent_display + "%"
  document.getElementById("violent_value").style.color = chooseColor(violent_percentile)
  
  document.getElementById("mortality_percentile").innerHTML = labelPercentile(mortality_percentile)
  document.getElementById("mortality_percentile").style.color = chooseColor(mortality_percentile) 
  document.getElementById("mortality_value").innerHTML = mortality_display + " deaths per 100,000"
  document.getElementById("mortality_value").style.color = chooseColor(mortality_percentile) 
  
  document.getElementById("agricultural_percentile").innerHTML = labelPercentile(agricultural_percentile)
  document.getElementById("agricultural_percentile").style.color = chooseColor(agricultural_percentile)
  document.getElementById("agricultural_value").innerHTML = agricultural_display + "%"
  document.getElementById("agricultural_value").style.color = chooseColor(agricultural_percentile) 

  //document.getElementById("percentile").innerHTML = percentile.toFixed(0)
  //document.getElementById("crease1").innerHTML = crease
  //document.getElementById("crease2").innerHTML = crease
  //document.getElementById("min_number").innerHTML = Math.abs(min_value)
  //document.getElementById("min_rank").innerHTML = min_rank
  //document.getElementById("indicator1").innerHTML = min_name
  //document.getElementById("indicator2").innerHTML = min_name

  //console.log("MAX: " + max_name + " VALUE: " + max_rank)
  //console.log("MIN: " + min_name + " VALUE: " + min_rank)

  /*var income = numberWithCommas(county_income)
  var pop = numberWithCommas(county_pop)
  
  //var mortality_num = (e.features[0].properties.Mortality).toFixed(2)
  

  var mortality_color;
  if (counties_data[county_GEOID]['mortality_rank'] < 629){
    mortality_color = '#c80000'
  }
  else if (counties_data[county_GEOID]['mortality_rank'] < 1258){
    mortality_color = '#d35617'
  }
  else if (counties_data[county_GEOID]['mortality_rank'] < 1887){
    mortality_color = '#e28740'
  }
  else if (counties_data[county_GEOID]['mortality_rank'] < 2516){
    mortality_color = '#ebb075'
  }
  else {
    mortality_color = '#eedabf'
  }

  

  var agricultural_color;
  if (counties_data[county_GEOID]['agricultural_rank'] < 629){
    agricultural_color = '#c80000'
  }
  else if (counties_data[county_GEOID]['agricultural_rank'] < 1258){
    agricultural_color = '#d35617'
  }
  else if (counties_data[county_GEOID]['agricultural_rank'] < 1887){
    agricultural_color = '#e28740'
  }
  else if (counties_data[county_GEOID]['agricultural_rank'] < 2516){
    agricultural_color = '#ebb075'
  }
  else {
    agricultural_color = '#eedabf'
  }
  }

  var display = '<h3>'+county_name+'</h3>'+'<h5>Population (2012)</h5><h4><b>' + pop +'</b></h4><h5>% change in agricultural yields</h5><h4 style="color:' + agricultural_color +'"><b>' + agricultural_display +'</b></h4><h5>Change in deaths per 100,000</h5><h4 style="color:' + mortality_color +'"><b>' + mortality_display +'</b></h4>'

  new mapboxgl.Popup()
    .setLngLat(center_coordinates)
    .setHTML(display)
    .addTo(map);*/


  //map.setFilter('counties',['==', 'GEOID', county_GEOID])
  //map.setFilter('counties-border',['==', 'GEOID', county_GEOID])
  map.setFilter('centroids_info',['==', 'GEOID', county_GEOID])
  map.setFilter('states-highlight',['==', 'name', states[county_GEOID.substring(0,2)].name])
  map.setFilter('county-rank',['==', 'GEOID', county_GEOID])
  //map.setFilter('centroids-ranks-c9ustg',['!=', 'GEOID', county_GEOID])
  //map.setLayoutProperty('counties',"visibility","visible");
  map.setLayoutProperty('centroids_info',"visibility","visible")
  //map.setLayoutProperty('counties-border',"visibility","visible");
  map.setLayoutProperty('states-highlight',"visibility","visible");
  map.setLayoutProperty('counties-poly-background',"visibility","visible")
  map.setLayoutProperty('county-rank',"visibility","visible")
  map.setLayoutProperty('counties-total',"visibility","visible")
  map.setLayoutProperty('counties-highlight',"visibility","visible")
  //map.setLayoutProperty('counties-outline',"visibility","visible")
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
  //document.getElementById("name2").innerHTML = county_name
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
  document.getElementById('legend_search').innerHTML = document.getElementById('total_legend').innerHTML
  $("html, body, #left_side").animate({scrollBottom: $("#left_side").height()}, "slow");
  var objDiv = document.getElementById("left_side");
  //console.log(objDiv.scrollHeight)
  //objDiv.scrollTop = objDiv.scrollHeight-200;
  //console.log(counties_data[county_GEOID]['total_rank'])
  //var chart_num = Math.round(counties_data[county_GEOID]['total_rank']/157)
  //console.log(chart_num)
  //color_graph(chart_num)
  //console.log(center_coordinates)
  map.flyTo({center:center_coordinates,zoom:5.5});
  //map.setZoom(map.getZoom())
  })
}

function recenter(){
  map.flyTo({center:center_coordinates,zoom:5.5});
}

 function searchAgain(){
    /*$("html, body, left_side").animate({
      scrollTop: $("#search").offset().top -10                
  }, 500); 
    $("#indicator").val("total");
    $("#comparison").val("all");*/

    map.setFilter('counties-total',undefined)
    map.setFilter('counties-mortality',undefined)
    map.setFilter('counties-agricultural',undefined)
    map.setFilter('counties-violent',undefined)

    //map.setLayoutProperty('counties',"visibility","none");
    //map.setLayoutProperty('counties-border',"visibility","none");
    map.setLayoutProperty('states-6all0o',"visibility","none");
    map.setLayoutProperty('counties-total','visibility','none')
    map.setLayoutProperty('counties-mortality','visibility','none')
    map.setLayoutProperty('counties-agricultural','visibility','none')
    map.setLayoutProperty('counties-violent','visibility','none')
    map.setLayoutProperty('centroids_info',"visibility","none")
    map.setLayoutProperty('county-rank',"visibility","none")
    map.setLayoutProperty('states-highlight',"visibility","none")
    map.setLayoutProperty('counties-highlight',"visibility","none")
    map.setLayoutProperty('counties-poly-background',"visibility","none")
    //decolorGraph()
    //map.setLayoutProperty('better',"visibility","hidden");
    //map.setLayoutProperty('worse',"visibility","hidden");
    //document.querySelector('.mapboxgl-ctrl-geocoder').display = 'none'
    map.flyTo({center: [-1.750,-0.727],zoom: 3.2});
  
 }


  //var coordinates = e.features[0].geometry.coordinates.slice();
  //var description = e.features[0].properties.description;
 
// Ensure that if the map is zoomed out such that multiple
// copies of the feature are visible, the popup appears
// over the copy being pointed to.
// while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
// coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
// }