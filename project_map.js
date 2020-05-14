mapboxgl.accessToken = 'pk.eyJ1IjoiemFjaGxldml0dCIsImEiOiJjazdjdmdiemswN3B0M2ZsN3Y0cDdjdWFkIn0.f3Cb4Gj1PRXGHHW6xT6aDA';

var bounds = [
[-27.119,-25.7], // Southwest coordinates
[25.037,25.505] // Northeast coordinates
];
// var bounds = [
// [-24, -18], // Southwest coordinates
// [22,18] // Northeast coordinates
// ];

// var bounds = [
// [-18.119,-30.7], // Southwest coordinates
// [16.037,25.505] // Northeast coordinates
// ];

var search = false;
var current_filter = "none";
var map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/zachlevitt/ck71cbegj0a0f1iqjn8regnj4/draft', // stylesheet location
  center: [-2,-2], // starting position [lng, lat]
  zoom: 3.2, // starting zoom
  minZoom: 3.2,
  maxZoom: 9,
  maxBounds: bounds,
  attributionControl: false,
  logoPosition: 'bottom-left',
  attributionPosition: 'bottom-left',
  padding:{top:10,bottom:10,left:10,right:10}});

var nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'bottom-right');

map.addControl(new mapboxgl.AttributionControl({compact: true}));

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

// 

// function county_info(geoid){
//   //ranks, values, display with + or -, percentiles, misc. values, colors, etc for every one
  
//   county_mortality = (counties_data[shorter_county_GEOID]['mortality']).toFixed(2)
//   county_energy = (counties_data[shorter_county_GEOID]['energy_expenditures']).toFixed(2)
//   county_labor_low = (counties_data[shorter_county_GEOID]['labor_low']).toFixed(2)
//   county_labor_high = (counties_data[shorter_county_GEOID]['labor_high']).toFixed(2)
//   county_coastal = (counties_data[shorter_county_GEOID]['coastal_damage']).toFixed(2)
//   county_property = (counties_data[shorter_county_GEOID]['property_crime']).toFixed(2)
//   county_violent = (counties_data[shorter_county_GEOID]['violent_crime']).toFixed(2)
//   county_total_damage = (counties_data[shorter_county_GEOID]['total_damages']).toFixed(2)

//   county_mortality_rank = (counties_data[shorter_county_GEOID]['mortality_rank'])
//   county_energy_rank = (counties_data[shorter_county_GEOID]['energy_rank'])
//   county_labor_low_rank = (counties_data[shorter_county_GEOID]['labor_low_rank'])
//   county_labor_high_rank = (counties_data[shorter_county_GEOID]['labor_high_rank'])
//   county_coastal_rank = (counties_data[shorter_county_GEOID]['coastal_rank'])
//   county_property_rank = (counties_data[shorter_county_GEOID]['property_rank'])
//   county_violent_rank = (counties_data[shorter_county_GEOID]['violent_rank'])
//   county_total_rank = (counties_data[shorter_county_GEOID]['total_rank'])

// }


var geocoder = new MapboxGeocoder({
  accessToken: mapboxgl.accessToken,
  country: 'us',
  mapboxgl: mapboxgl,
  placeholder: "ex. Cook County, IL",
});

function viewText(){
  document.getElementById("intro_text").style.display="block"
  document.getElementById("view_text").style.display="none"
  document.getElementById("hide_text").style.display="block"
}

function hideText(){
  document.getElementById("intro_text").style.display="none"
  document.getElementById("view_text").style.display="block"
  document.getElementById("hide_text").style.display="none"
}

function tutorialButton(command){
  if (command == "data"){
    document.getElementById("data_label").style.color = 'yellow'
    document.getElementById("data_label").style.fontWeight = 'bold'
    document.getElementById("data_label").style.fontSize = '16px'
  }

  else if (command == "data2"){
    document.getElementById("data_label").style.color = 'darkgray'
    document.getElementById("data_label").style.fontWeight = 'normal'
    document.getElementById("data_label").style.fontSize = '12px'
  }

  else if (command == "filter"){
    document.getElementById("filter_label").style.color = 'yellow'
    document.getElementById("filter_label").style.fontWeight = 'bold'
    document.getElementById("filter_label").style.fontSize = '16px'
  }

  else if (command == "filter2"){
    document.getElementById("filter_label").style.color = 'darkgray'
    document.getElementById("filter_label").style.fontWeight = 'normal'
    document.getElementById("filter_label").style.fontSize = '12px'
  }

  else if (command == "pop"){
    document.getElementById("population").style.color = 'yellow'
    document.getElementById("population").style.fontWeight = 'bold'
    document.getElementById("population").style.fontSize = '16px'
  }

  else if (command == "pop2"){
    document.getElementById("population").style.color = 'rgba(255,255,255,0.4)'
    document.getElementById("population").style.fontWeight = 'normal'
    document.getElementById("population").style.fontSize = '14px'
  }

  else if (command == "ref"){
    document.getElementById("populated-places").style.color = 'yellow'
    document.getElementById("populated-places").style.fontWeight = 'bold'
    document.getElementById("populated-places").style.fontSize = '16px'
    document.getElementById("states-outline").style.color = 'yellow'
    document.getElementById("states-outline").style.fontWeight = 'bold'
    document.getElementById("states-outline").style.fontSize = '16px'
  }

  else if (command == "ref2"){
    document.getElementById("populated-places").style.color = 'rgba(255,255,255,0.4)'
    document.getElementById("populated-places").style.fontWeight = 'normal'
    document.getElementById("populated-places").style.fontSize = '14px'
    document.getElementById("states-outline").style.color = 'rgba(255,255,255,0.4)'
    document.getElementById("states-outline").style.fontWeight = 'normal'
    document.getElementById("states-outline").style.fontSize = '14px'
  }

  else if (command == "search"){
    document.getElementById("search").style.color = 'yellow'
    document.getElementById("search").style.fontWeight = 'bold'
    document.getElementById("search").style.fontSize = '16px'
  }

  else if (command == "search2"){
    document.getElementById("search").style.color = 'white'
    document.getElementById("search").style.fontWeight = 'normal'
    document.getElementById("search").style.fontSize = '16px'
  }
}



function hideTutorial(){
  document.getElementById("tutorial").style.display = 'none';
  document.getElementById("view_tutorial").style.display = 'block';
  document.getElementById("hide_tutorial").style.display='none'
}

function begin(){
  document.getElementById("left_side").style.width='33%';
  document.getElementById("box2").style.display='block';
  document.getElementById("map").style.opacity = 1;
  document.getElementById("begin").style.display='none';
  document.getElementById("view_tutorial").style.display='block';
  document.getElementById("intro_text").style.display="none"
  document.getElementById("cc").style.fontSize="24px"
  document.getElementById("header1").style.fontSize="20px"
  document.getElementById("header1").style.lineHeight="24px"
  document.getElementById("header1").style.marginTop="10px"
  document.getElementById("header1").style.marginBottom="10px"
  document.getElementById("header1").style.opacity=0.5;
  document.getElementById("byline").style.display="none"
  document.getElementById("final").style.display = 'block'
  document.getElementById("sep").style.display = 'block'
  document.getElementById("view_text").style.display="block"

  for (layer of indicator_layers){
    if (layer != 'population'){
      map.setPaintProperty(layer,'fill-opacity',0.8)
    }
  }
  
  //document.getElementById("state_filter").setAttribute("disabled", "disabled");
  //document.getElementById("income_filter").setAttribute("disabled", "disabled");
  //document.getElementById("pop_filter").setAttribute("disabled", "disabled");
  //document.getElementById("state_filter").disabled=true;
  //document.getElementById("income_filter").disabled=true;
  //document.getElementById("pop_filter").disabled=true;
  map.setLayoutProperty('populated-places','symbol-sort-key',["to-number", ["get", "scalerank"]])
  map.setLayoutProperty('counties-highlight',"visibility","visible")
  map.setLayoutProperty('counties-poly-background',"visibility","visible")
  map.setLayoutProperty('counties-mortality','visibility','visible')
  //document.getElementById("left_side").scrollTop += document.getElementById("left_side").scrollHeight;

}

function tutorial(){
  document.getElementById("tutorial").style.display = 'block';
  document.getElementById("view_tutorial").style.display = 'none';
  document.getElementById("hide_tutorial").style.display='block'
  //document.getElementById("filter").style.visibility = 'hidden';
  //document.getElementById("filter").style.opacity = 0;
  //document.getElementById("layers").style.visibility = 'hidden';
       // document.getElementById("layers").style.opacity = 0;
       // document.getElementById("population").style.visibility = 'hidden';
        //document.getElementById("population").style.opacity = 0;
       // document.getElementById("populated-places").style.visibility = 'hidden';
       // document.getElementById("populated-places").style.opacity = 0;
       // document.getElementById("states-outline").style.visibility = 'hidden';
       // document.getElementById("states-outline").style.opacity = 0;
        //document.getElementById("hide_tutorial").style.display = 'block';

}

function show(layer){
    //console.log("pressed: " + layer)
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
        /*else if (layer=='counties-total'){
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
        }*/
      }
    }
    else {
      if (document.getElementById('population').className == "active"){
        for (layer of indicator_layers){
          if (layer != 'population'){
            map.setPaintProperty(layer,'fill-opacity',0.8)
          }
        }

        document.getElementById('population').className = ""
        document.getElementById('population').innerHTML = "Show population";
        /*document.getElementById('agricultural_legend').style.display = 'none'
        document.getElementById('agricultural_legend_simple').style.display = 'block'
        document.getElementById('total_legend').style.display = 'none'
        document.getElementById('total_legend_simple').style.display = 'block'*/
        document.getElementById('legend_pop').style.display = 'none';
        document.getElementById('legend_simple').style.display = 'block';

      }
      else {
        document.getElementById('population').className = "active"
        document.getElementById('population').innerHTML = "Hide population";
        /*document.getElementById('agricultural_legend').style.display = 'block'
        document.getElementById('agricultural_legend_simple').style.display = 'none'
        document.getElementById('total_legend').style.display = 'block'
        document.getElementById('total_legend_simple').style.display = 'none'*/

        document.getElementById('legend_pop').style.display = 'block';
        document.getElementById('legend_simple').style.display = 'none';
        
        for (layer of indicator_layers){
          if (layer != 'population'){
          map.setPaintProperty(layer,'fill-opacity',[
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
                ])}}
        }
        
      }
      

}
  

//var chapterNames = ["scroll1","scroll2","search","scroll4","scroll3"]

/*function onScroll() {
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
        map.setFilter('centroids_info',["any",['==', 'GEOID', "06037"],['==', 'GEOID', "48301"]])
        //map.setFilter('states-highlight',['==', 'name', states[county_GEOID.substring(0,2)].name])
        map.setFilter('county-rank',["any",['==', 'GEOID', "06037"],['==', 'GEOID', "48301"]])
        map.setLayoutProperty('county-rank',"visibility","visible")
        map.setLayoutProperty('centroids_info',"visibility","visible")
      }
      /*else if (chapterName == "pop"){
        //map.setLayoutProperty('populated-places',"visibility","visible")
        map.setLayoutProperty('counties-mortality-full-opacity',"visibility","none")
        map.setLayoutProperty('population','visibility','visible')
        map.setLayoutProperty('counties-mortality','visibility','none')
        //map.setLayoutProperty('counties-violent','visibility','none')
        map.setLayoutProperty('counties-agricultural','visibility','none')
        map.setLayoutProperty('counties-total','visibility','none')
      }
      else if (chapterName == "scroll1"){
        document.getElementById("layers").style.visibility = 'hidden';
        document.getElementById("layers").style.opacity = 0;
        document.getElementById("population").style.visibility = 'hidden';
        document.getElementById("population").style.opacity = 0;
        document.getElementById("populated-places").style.visibility = 'hidden';
        document.getElementById("populated-places").style.opacity = 0;
        document.getElementById("states-outline").style.visibility = 'hidden';
        document.getElementById("states-outline").style.opacity = 0;
        map.setLayoutProperty('states-outline',"visibility","visible")
        map.setLayoutProperty('counties-poly-background',"visibility","visible")
        map.setLayoutProperty('counties-mortality','visibility','visible')
        for (layer of indicator_layers){
            map.setPaintProperty(layer,'fill-opacity',0.8)
          }
        //map.setLayoutProperty('counties-mortality-full-opacity',"visibility","visible")
        map.setLayoutProperty('counties-total','visibility','none')
        map.setLayoutProperty('counties-agricultural','visibility','none')
        
        //document.getElementById("population").style.border = '1px solid white';
        
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
      }
      else if (chapterName == "scroll4"){
        map.setFilter('centroids_info',undefined)
        //map.setFilter('states-highlight',['==', 'name', states[county_GEOID.substring(0,2)].name])
        map.setFilter('county-rank',undefined)
        map.setLayoutProperty('county-rank',"visibility","none")
        map.setLayoutProperty('centroids_info',"visibility","none")
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
      }

      else if (chapterName == "search"){
        //document.getElementById("filter").style.visibility = 'visible';
        //document.getElementById("filter").style.opacity = 1;
        if (map.getLayoutProperty('states-outline','visibility')!='visible'){
          map.setLayoutProperty('states-outline',"visibility","visible")
          map.setLayoutProperty('counties-highlight',"visibility","visible")
          map.setLayoutProperty('counties-poly-background',"visibility","visible")
          map.setLayoutProperty('counties-mortality','visibility','visible')
          //for (layer of indicator_layers){
          //  map.setPaintProperty(layer,'fill-opacity',0.8)
          //}
          
        }
        if (map.getLayoutProperty('counties-mortality','visibility')!='visible'){
        if (map.getPaintProperty('counties-total',"fill-opacity")==0.8){
          document.getElementById('legend_search').innerHTML = document.getElementById('scroll4_legend_simple').innerHTML
        }
        else {
          document.getElementById('legend_search').innerHTML = document.getElementById('scroll4_legend').innerHTML
        }
      }
        document.getElementById("layers").style.visibility = 'visible';
        document.getElementById("layers").style.opacity = 1;
        document.getElementById("map").style.opacity = 1;
        document.getElementById("menu").style.borderTop = '2px solid #262626'
        document.getElementById("population").style.visibility = 'visible';
        document.getElementById("population").style.opacity = 1;
        document.getElementById("populated-places").style.visibility = 'visible';
        document.getElementById("populated-places").style.opacity = 1;
        document.getElementById("states-outline").style.visibility = 'visible';
        document.getElementById("states-outline").style.opacity = 1;
         
      }

      }
  }
};*/

function isElementActive(id) {
  var element = document.getElementById(id);
  var bounds = element.getBoundingClientRect();
  //console.log(id + " bounds top: " + bounds.top)
  //console.log(window.innerHeight)
  //console.log(bounds.top)
  return bounds.top < 500 && bounds.top > 100
  //return (bounds.top+100) === window.innerHeight
}

var indicator_layers = ['counties-total',
                        'counties-mortality',
                        'counties-agricultural',
                        'counties-violent',
                        'counties-energy',
                        'counties-labor-high',
                        'counties-property',
                        'counties-income',
                        'population']

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
    for (layer of indicator_layers){
      map.setLayoutProperty(layer,'visibility','none')
    }



    


    var indicator = document.getElementById("indicator").value;
    map.setLayoutProperty(indicator,'visibility','visible')
    if (indicator != "counties-income"){
      document.getElementById("lowest1").innerHTML = 'Lowest risk';
      document.getElementById("lowest2").innerHTML = 'Lowest risk';
      document.getElementById("highest1").innerHTML = 'Highest risk';
      document.getElementById("highest2").innerHTML = 'Highest risk';
    }

    if (indicator == "population"){
      document.getElementById('population').style.display = 'none';
      document.getElementById("legend_pop_only").style.display = 'block';
      document.getElementById("legend_pop").style.display = 'none';
      document.getElementById("legend_simple").style.display = 'none';
      document.getElementById("accompanying_text").innerHTML = "It is helpful to visualize the geography of climate change while overlaying the existing population geography of the United States. This map displays population density for each county. You can always use the Show Population tab to overlay this map."

    }

    else {
      document.getElementById('population').style.display = 'block';
      document.getElementById("legend_pop_only").style.display = 'none';
      if (document.getElementById('population').className == "active"){
        document.getElementById("legend_pop").style.display = 'block';

      }
      else {

        document.getElementById("legend_simple").style.display = 'block';
      }

      switch (indicator){
        case "counties-agricultural":
          document.getElementById("legend_title_simple").innerHTML = "Change in agricultural yields";
          document.getElementById("accompanying_text").innerHTML = "Climate change threatens the productivity and existing geography of the nation's agricultural industry. Due to changes in rainfall, average temperatures and the amount of CO<sub>2</sub> in the air, estimates show that national yields could decrease by 9.1% for every degree Celsius increase in the global mean surface temperature (Hsiang et al. 2017). The map displays the estimated percent change in the yield of maize, wheat, soybeans, and cotton between 2080 and 2099. Sections of the Midwest and South Central regions could suffer some of the worst losses as areas in the North experience increased yields";
          break;
        case "counties-mortality":
          document.getElementById("legend_title_simple").innerHTML = 'Change in mortality rate';
          document.getElementById("accompanying_text").innerHTML = "Perhaps the most devastating impact of climate change on human populations will be increasing mortality rates. Due to rising temperatures, the death rate is expected to sharply rise in southern counties and decrease in northern counties. Overall, Hsiang et al. (2017) find that rising mortality in warmer regions will cause the annual national mortality eate to rise by roughly 5 deaths per 100,000 with each degree celsisus increase in global mean surface temperature. Use the <b>Show Population</b> toggle to visualize how changing mortality will be felt differently in rural and urban counties."
          break;
        case "counties-total":
          document.getElementById("legend_title_simple").innerHTML = 'Total economic damage';
          document.getElementById("accompanying_text").innerHTML = "Estimates predict that climate change could cause a 1-3% drop in annual national average GDP by the end of the century. While these estimates are restricted to direct damages to the U.S. economy, Hsiang et al. note that the United States will also experience significant indirect effects from global changes. This map displays the total direct economic damage across all sectors using percent change in gross domestic product (GDP). There is a less stark regional pattern to economic damage due to the myriad factors that impact the economy in different parts of the country."
          break;
        case "counties-energy":
          document.getElementById("legend_title_simple").innerHTML = 'Change in electricity demand';
          document.getElementById("accompanying_text").innerHTML = "Rising demand for electricity due to higher temperatures will cause a net increase in national electricity demand. Overall, southern counties tend to have a higher average change in electricity demand during the survey period. These models were run by Hsiang et al. (2017) using the National Energy Modeling System, which estimates energy supply costs using weather predictions."

          break;
        case "counties-labor-high":
          document.getElementById("legend_title_simple").innerHTML = 'Change in labor supply for outdoor jobs';
          document.getElementById("accompanying_text").innerHTML = "Roughly 23% of all employed workers in the United States are considered high-risk due to prolonged exposure to outdoor temperatures (Hsiang et al., 2017). Projections show that the total hours of supplied high-risk labor will decrease as temperatures rise. This could lead to shortages in key sectors like construction, agriculture, and manufacturing."
          break;
        case "counties-property":
          document.getElementById("legend_title_simple").innerHTML = 'Change in property crime rate';
          document.getElementById("accompanying_text").innerHTML = "As the number of cold days falls, property crime rates are expected to increase. However, research has shown that hot temperatures do not have a relationship with property crime rates. The map shows that colder northern counties are therefore at a higher risk of increased property crime rates, while the south has overall more counties expected to experience only moderate increases and decreases."
          break;
        case "counties-violent":
          document.getElementById("legend_title_simple").innerHTML = 'Change in violent crime rate';
          document.getElementById("accompanying_text").innerHTML = "Violent crime rates are expected to increase linearly with increases in average temperatures. As the map demonstrates, there is a largely uniform distribution of risk as opposed to other indicators that vary by region. Unlike property crime rates, violent crime rates tend to continue to rise despite hot temperatures."
          break;
        case "counties-income":
          document.getElementById("legend_title_simple").innerHTML = 'Average county income';
          document.getElementById("accompanying_text").innerHTML = "Hsiang et al. (2017) find that median damages from climate change are 'systematically larger in low-income counties.' Low-income areas like the southeast and southwest will be especially at-risk due to warm climates. Since this dataset utilizes income per capita, sparsely-populated areas like the Plains show up as high-income areas in addition to urban and suburban counties. "
          document.getElementById("lowest1").innerHTML = 'Lowest';
          document.getElementById("lowest2").innerHTML = 'Lowest';
          document.getElementById("highest1").innerHTML = 'Highest';
          document.getElementById("highest2").innerHTML = 'Highest';
          break;

      }

      document.getElementById("legend_title_pop").innerHTML = document.getElementById("legend_title_simple").innerHTML;
      }


});
      //map.setPaintProperty('centroids-ranks-c9ustg', 'fill-color', '#faafee');
      //document.getElementById("indicator_title").innerHTML = "National percentile for change in GDP, 2080-2099"
      //document.getElementById("indicator2").innerHTML = "the GDP"
      /*document.getElementById('agricultural_text').style.display = 'none';
      document.getElementById('total_text').style.display = 'block';
      document.getElementById('mortality_text').style.display = 'none';
      document.getElementById('violent_text').style.display = 'none';*/
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
      //console.log("hello hello")
      //map.setPaintProperty('centroids-ranks-c9ustg', 'fill-color', '#faafee');
      
      /*document.getElementById('agricultural_text').style.display = 'none';
      */
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

      //map.setPaintProperty('centroids-ranks-c9ustg', 'fill-color', '#faafee');
      /*document.getElementById('agricultural_text').style.display = 'block';
      document.getElementById('total_text').style.display = 'none';
      document.getElementById('mortality_text').style.display = 'none';
      document.getElementById('violent_text').style.display = 'none';*/
      //document.getElementById("risk_label").innerHTML = "Change in agricultural yields"
      /*
      document.getElementById("indicator_title").innerHTML = "National percentile for change in agricultural yields, 2080-2099"
      document.getElementById("indicator2").innerHTML = "agricultural yields (Median of maize, wheat, soybeans, cotton)"
      
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
      //map.setPaintProperty('centroids-ranks-c9ustg', 'fill-color', '#faafee');
      
      /*document.getElementById('agricultural_text').style.display = 'none';
      document.getElementById('total_text').style.display = 'none';
      document.getElementById('mortality_text').style.display = 'none';
      document.getElementById('violent_text').style.display = 'block';*/
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

function filterChange(comparison){
    //console.log("comparison type: " + comparison)
    //console.log("comparison_state: " + comparison_state)
    //console.log(current_filter)
    if (comparison == "all"){
      //document.getElementById("comparison_title").innerHTML = "counties with similar population"
      if (search){
        current_filter = "none";
        for (layer of indicator_layers){
        map.setFilter(layer,undefined)
        }
        map.flyTo({center:[-2,-2],zoom:3.2});
      }
      
    }
    else if (comparison == "pop"){
      //document.getElementById("comparison_title").innerHTML = "counties with similar population"
      if (search){
        current_filter = "pop";
        for (layer of indicator_layers){
        map.setFilter(layer,["all",['<', 'county_pop_rank', county_pop_rank+100],['>', 'county_pop_rank', county_pop_rank-100]])
        }
        map.flyTo({center:[-2,-2],zoom:3.2,});
      } 
      
      //map.setFilter('counties-total',["all",['<', 'county_pop', county_pop_rank+100],['>', 'county_pop', county_pop_rank-100]])
      //map.setFilter('counties-mortality',["all",['<', 'county_pop', county_pop_rank+100],['>', 'county_pop', county_pop_rank-100]])
      //map.setFilter('counties-agricultural',["all",['<', 'county_pop', county_pop_rank+100],['>', 'county_pop', county_pop_rank-100]])
      //map.setFilter('counties-violent',["all",['<', 'county_pop', county_pop_rank+100],['>', 'county_pop', county_pop_rank-100]])
      
    }

    else if (comparison == "income"){
      
      if (search){
        current_filter = "income";
      for (layer of indicator_layers){
        map.setFilter(layer,["all",['<', 'county_income_rank', county_income_rank+100],['>', 'county_income_rank', county_income_rank-100]])
      }
      map.flyTo({center:[-2,-2],zoom:3.2});
    }
      
    }

    else if (comparison == "state"){
      //document.getElementById("comparison_title").innerHTML = "counties with similar income level"
      
      if (search){
        current_filter = "state";
        //console.log("in state if: " + comparison_state)
        for (layer of indicator_layers){
        map.setFilter(layer,['==','STATEFP', county_GEOID.substring(0,2)])
        }
        map.flyTo({center:center_coordinates,zoom:4.5});
      }
      
    }

    else if (comparison == "new_search"){
      if (current_filter == "state"){
        for (layer of indicator_layers){
          map.setFilter(layer,['==','STATEFP', county_GEOID.substring(0,2)])
        }
      }
      else if (current_filter == "income"){
        for (layer of indicator_layers){
        map.setFilter(layer,["all",['<', 'county_income_rank', county_income_rank+100],['>', 'county_income_rank', county_income_rank-100]])
      }
      }

      else if (current_filter == "pop"){
        for (layer of indicator_layers){
        map.setFilter(layer,["all",['<', 'county_pop_rank', county_pop_rank+100],['>', 'county_pop_rank', county_pop_rank-100]])
        }

      }
      else if (current_filter == "none"){
        for (layer of indicator_layers){
        map.setFilter(layer,undefined)
      }
      }
      }

}


$('#comparison').on('selectmenuchange', function() {
    //console.log(county_GEOID + " " + county_pop_2012)
    var comparison_select = document.getElementById("comparison").value;
    /*if (!search){
      document.getElementById("comparison").options[1].disabled = false;
      document.getElementById("comparison").options[2].disabled = false;
      document.getElementById("comparison").options[3].disabled = false;
    }
    else {
      document.getElementById("comparison").options[1].disabled = true;
      document.getElementById("comparison").options[2].disabled = true;
      document.getElementById("comparison").options[3].disabled = true;
    }*/
    
    filterChange(comparison_select)
    
});

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

function popupColor(rank){
  if (rank < 629){
    return '#c70000'
  }
  else if (rank < 1258){
    return '#d35617'
  }
  else if (rank < 1887){
    return '#e28740'
  }
  else if (rank < 2516){
    return '#ebb075'
  }
  else {
    return '#eedabf'
  }
}

function popupPercentile(rank){
  if (rank < 629){
    return 'Highest risk'
  }
  else if (rank < 1258){
    return 'High risk'
  }
  else if (rank < 1887){
    return 'Medium risk'
  }
  else if (rank < 2516){
    return 'Low risk'
  }
  else {
    return 'Lowest risk'
  }
}

function popupDisplay(value){
  if (value > 0){
    return '+'+value
  }
  else {
    return value
  }
}

function popupDisplayOpposite(value){
  if (value > 0){
    return "Loss of " + value
  }
  else {
    return "Increase of "+Math.abs(value)
  }
}

var popup_name,
    popup_display,
    popup_full_name,
    popup_state_abbrev,
    popup_pop,
    popup_pop_rank,
    popup_income,
    popup_income_rank,
    popup_pop_density,
    popup_mortality,
    popup_energy,
    popup_labor_high,
    popup_coastal,
    popup_property,
    popup_violent,
    popup_total,
    popup_agricultural,
    popup_mortality_display,
    popup_energy_display,
    popup_labor_high_display,
    popup_coastal_display,
    popup_property_display,
    popup_violent_display,
    popup_total_display,
    popup_agricultural_display,
    popup_mortality_risk,
    popup_energy_risk,
    popup_labor_high_risk,
    popup_coastal_risk,
    popup_property_risk,
    popup_violent_risk,
    popup_total_risk,
    popup_agricultural_risk,
    popup_mortality_rank,
    popup_energy_rank,
    popup_labor_high_rank,
    popup_coastal_rank,
    popup_property_rank,
    popup_violent_rank,
    popup_total_rank,
    popup_agricultural_rank,
    popup_mortality_color,
    popup_energy_color,
    popup_labor_high_color,
    popup_coastal_color,
    popup_property_color,
    popup_violent_color,
    popup_total_color,
    popup_agricultural_color,
    popup_coordinates

map.on('click', 'counties-poly-background', function(e) {
  console.log(e.features[0].properties)
  popup_coordinates= [e.features[0].properties.centroid_xcoord,e.features[0].properties.centroid_ycoord]
  popup_name = e.features[0].properties.NAME
  
  if (e.features[0].properties.GEOID == "46102"){
    popup_display = '<h3 style="font-weight:bold">'+popup_name+' Nation</h3><h5>No data available</h5>'
  }

  else {

  
  
  //console.log(popup_coordinates)
  popup_state_abbrev = states[e.features[0].properties.STATEFP].abbreviation
  popup_full_name = (popup_name.concat(" County, ")).concat(popup_state_abbrev)
  
  popup_income = numberWithCommas(e.features[0].properties['county_income_2012'])
  popup_pop = numberWithCommas(e.features[0].properties['county_pop_2012'])
  popup_pop_density = (e.features[0].properties['ppl_sqmi']).toFixed(2)

  popup_total = (e.features[0].properties['total_damages']).toFixed(2)
  popup_total_rank = (e.features[0].properties['total_rank'])
  popup_total_color = popupColor(popup_total_rank)
  popup_total_display = popupPercentile(popup_total_rank)
  popup_total_risk = popupDisplayOpposite(popup_total)

  popup_mortality = (e.features[0].properties['mortality']).toFixed(2)
  popup_mortality_rank = (e.features[0].properties['mortality_rank'])
  popup_mortality_color = popupColor(popup_mortality_rank)
  popup_mortality_risk = popupDisplay(popup_mortality)
  popup_mortality_display = popupPercentile(popup_mortality_rank)

  popup_energy = (e.features[0].properties['energy_expenditures']).toFixed(2)
  popup_energy_rank = (e.features[0].properties['energy_rank'])
  popup_energy_color = popupColor(popup_energy_rank)
  popup_energy_risk = popupDisplay(popup_energy)
  popup_energy_display = popupPercentile(popup_energy_rank)

  popup_labor_high = (e.features[0].properties['labor_high']).toFixed(2)
  popup_labor_high_rank = (e.features[0].properties['labor_high_rank'])
  popup_labor_high_color = popupColor(popup_labor_high_rank)
  popup_labor_high_risk = popupDisplay(popup_labor_high)
  popup_labor_high_display = popupPercentile(popup_labor_high_rank)

  popup_property = (e.features[0].properties['property_crime']).toFixed(2)
  popup_property_rank = (e.features[0].properties['property_rank'])
  popup_property_color = popupColor(popup_property_rank)
  popup_property_risk = popupDisplay(popup_property)
  popup_property_display = popupPercentile(popup_property_rank)

  popup_violent = (e.features[0].properties['violent_crime']).toFixed(2)
  popup_violent_rank = (e.features[0].properties['violent_rank'])
  popup_violent_color = popupColor(popup_violent_rank)
  popup_violent_risk = popupDisplay(popup_violent)
  popup_violent_display = popupPercentile(popup_violent_rank)


  
  if (e.features[0].properties['agricultural_damage'] != 'NA'){
    popup_agricultural = (parseFloat(e.features[0].properties.agricultural_damage)).toFixed(2)
    popup_agricultural_rank = (e.features[0].properties['mortality_rank'])
    popup_agricultural_risk = popupDisplay(popup_agricultural)
    if (popup_agricultural_rank < 488){
      popup_agricultural_color = '#c80000'
      popup_agricultural_display = 'Highest risk'
    }
    else if (popup_agricultural_rank < 976){
      popup_agricultural_color = '#d35617'
      popup_agricultural_display = 'High risk'
    }
    else if (popup_agricultural_rank < 1464){
      popup_agricultural_color = '#e28740'
      popup_agricultural_display = 'Median risk'
    }
    else if (popup_agricultural_rank < 1952){
      popup_agricultural_color = '#ebb075'
      popup_agricultural_display = 'Low risk'
    }
    else {
      popup_agricultural_color = '#eedabf'
      popup_agricultural_display = 'Lowest risk'
    }
   
    //popup_agricultural_display = popupPercentile(popup_agricultural_rank)
  }
  else {
    popup_agricultural_display = 'no data'
    popup_agricultural_color = 'gray'
    popup_agricultural_risk = 'no data'
  }

  //<h5>Change in total deaths based on 2012 population</h5><h4><b>' + (popup_mortality*(e.features[0].properties['county_pop_2012']/100000)).toFixed(0) +'</b></h4>

  var popup_label = '<h3 style="font-weight:bold">'+popup_full_name+'</h3>'
  var population_simple = '<h5>Population (2012)</h5><h4><b>' + popup_pop +'</b></h4>'
  var income_all = '<h5>Average income (2012)</h5><h4><b>$' + popup_income +'</b></h4>'
  var population_all = '<h5>Population (2012)</h5><h4><b>' + popup_pop +'</b></h4><h5>People per square mile</h5><h4><b>' + popup_pop_density +'</b></h4>'
  var mortality_all = '<h5>Change in mortality rate</h5><h4 style="color:' + popup_mortality_color +'"><b>' + popup_mortality_display +'</b><br>'+popup_mortality_risk+' deaths per 100,000</h4>'
  var total_all = '<h5>Total economic damage</h5><h4 style="color:' + popup_total_color +'"><b>' + popup_total_display +'</b><br>'+popup_total_risk+'% of GDP</h4>'
  var energy_all = '<h5>Change in electricity demand</h5><h4 style="color:' + popup_energy_color +'"><b>' + popup_energy_display +'</b><br>'+popup_energy_risk+'%</h4>'
  var agricultural_all = '<h5>Change in agricultural yields</h5><h4 style="color:' + popup_agricultural_color +'"><b>' + popup_agricultural_display +'</b><br>'+popup_agricultural_risk+'%</h4>'
  var violent_all = '<h5>Change in violent crime rate</h5><h4 style="color:' + popup_violent_color +'"><b>' + popup_violent_display +'</b><br>'+popup_violent_risk+'%</h4>'
  var property_all = '<h5>Change in property crime rate</h5><h4 style="color:' + popup_property_color +'"><b>' + popup_property_display +'</b><br>'+popup_property_risk+'%</h4>'
  var labor_high_all = '<h5>Change in labor supply for high risk outdoor jobs</h5><h4 style="color:' + popup_labor_high_color +'"><b>' + popup_labor_high_display +'</b><br>'+popup_labor_high_risk+'%</h4>'

    //console.log(map.setLayoutProperty('counties-mortality','visibility'))
    //console.log(map.querySourceFeatures('composite',{sourceLayer: 'counties_54_goodranks'}))
      if (map.getLayoutProperty('counties-mortality','visibility') == 'visible'){
        popup_display = popup_label + population_simple  + income_all+ mortality_all+total_all + energy_all + agricultural_all + violent_all + property_all + labor_high_all
      }

      else if (map.getLayoutProperty('counties-total','visibility') == 'visible'){
        popup_display = popup_label + population_simple + income_all+ total_all +income_all+mortality_all + energy_all + agricultural_all + violent_all + property_all + labor_high_all
      }
      else if (map.getLayoutProperty('counties-agricultural','visibility') == 'visible'){
        popup_display = popup_label+population_simple + income_all+agricultural_all+mortality_all+total_all + energy_all + violent_all + property_all + labor_high_all
      }

      else if (map.getLayoutProperty('counties-energy','visibility') == 'visible'){
        popup_display = popup_label+population_simple+income_all+energy_all+agricultural_all+mortality_all+total_all+ violent_all + property_all + labor_high_all
      }
      else if (map.getLayoutProperty('counties-violent','visibility') == 'visible'){
        popup_display = popup_label+population_simple+income_all+violent_all+energy_all+agricultural_all+mortality_all+total_all+ property_all + labor_high_all
      }

      else if (map.getLayoutProperty('counties-labor-high','visibility') == 'visible'){
        popup_display = popup_label+population_simple+income_all+labor_high_all+energy_all+agricultural_all+mortality_all+total_all+ violent_all + property_all
      }

      else if (map.getLayoutProperty('counties-property','visibility') == 'visible'){
        popup_display = popup_label+population_simple+income_all+property_all+labor_high_all+energy_all+agricultural_all+mortality_all+total_all+ violent_all
      }
      else if (map.getLayoutProperty('population','visibility') == 'visible'){
        popup_display = popup_label+population_all+ income_all+property_all+labor_high_all+energy_all+agricultural_all+mortality_all+total_all+ violent_all
      }
      else if (map.getLayoutProperty('counties-income','visibility') == 'visible'){
        popup_display = popup_label+population_all + income_all+property_all+labor_high_all+energy_all+agricultural_all+mortality_all+total_all+ violent_all
      }
    }

  new mapboxgl.Popup()
    .setLngLat(popup_coordinates)
    .setHTML(popup_display)
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
        { source: 'composite', id: hoveredStateId, sourceLayer: 'counties_54_goodranks' },
        { hover: false }
      );
    }
      //console.log(e.features[0].id)
      hoveredStateId = e.features[0].id;

      //console.log("id is now:" + hoveredStateId)
      map.setFeatureState(
        { source: 'composite', id: hoveredStateId, sourceLayer: 'counties_54_goodranks' },
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
{ source: 'composite', id: hoveredStateId, sourceLayer: 'counties_54_goodranks' },
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

var crease,
    state_code,
    percentile, 
    county_GEOID,
    county_income_rank,
    county_pop_rank,
    county_name,
    county_agr,
    county_mortality,
    county_energy_exp,
    county_labor_low,
    county_labor_high,
    county_coastal,
    county_property,
    county_crime,
    county_total_damage,
    center_coordinates

geocoder.on('result', function(ev) {


  //check if control is there
  map.scrollZoom.enable();
  map.dragPan.enable();
  map.doubleClickZoom.enable();
  search = true;
  
  //document.getElementById("comparison").options[1].disabled = false;
  //document.getElementById("comparison").options[2].disabled = false;
  //document.getElementById("comparison").options[3].disabled = false;
  

  //map.touchZoomRotate.enable();
  document.getElementById("state_filter").removeAttribute("disabled");
  document.getElementById("income_filter").removeAttribute("disabled");
  document.getElementById("pop_filter").removeAttribute("disabled");

  document.getElementById("information").style.opacity = 1;
  document.getElementById("information").style.visibility = 'visible';
      
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
  //console.log(percentile)
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
  //document.getElementById("comparison").disabled=false;

  //console.log(document.getElementById('comparison').disabled)

  $.ajax({
    method: 'GET',
    url: query,
      }).done(function(data) {
  const entries = Object.entries(data.features)
  
  //console.log(entries[0][1].properties)
  //var properties = entries[0][1].properties
  county_GEOID = entries[0][1].properties.GEOID
  var county_STATEFP = county_GEOID.slice(0,2)
  //var countyNS = entries[0][1].properties.COUNTYNS
  //console.log(county_GEOID)
  //console.log(countyNS)

  //console.log(county_GEOID)
  //var county_of_interest = map.querySourceFeatures('composite',{sourceLayer: 'counties_54_goodranks',filter:['==', 'GEOID', county_GEOID]})
  //console.log(county_of_interest[0])
  //if (county_GEOID.slice(0,1)=='0'){
    //county_GEOID = county_GEOID.slice(1)
  //}
  if (county_GEOID.slice(0,1)=='0'){
    //console.log("hello")
    var shorter_county_GEOID = county_GEOID.slice(1,)
    //console.log("new: " + shorter_county_GEOID)
  }
  else {
    var shorter_county_GEOID = county_GEOID
    
  }

  //console.log(shorter_county_GEOID)
  county_pop = counties_data[shorter_county_GEOID]['county_pop_2012']
  county_pop_density = (counties_data[shorter_county_GEOID]['ppl_sqmi']).toFixed(2)
  county_pop_rank = counties_data[shorter_county_GEOID]['county_pop_rank']
  county_income_rank = counties_data[shorter_county_GEOID]['county_income_rank']
  county_income = numberWithCommas(counties_data[shorter_county_GEOID]['county_income_2012'])
  county_name = counties_data[shorter_county_GEOID]['NAME'] + " County, " + states[county_STATEFP].abbreviation
  

  if (counties_data[shorter_county_GEOID]['agricultural_damage'] != "NA"){
    county_agricultural = parseFloat(counties_data[shorter_county_GEOID]['agricultural_damage']).toFixed(2)
    county_agricultural_rank = counties_data[shorter_county_GEOID]['agricultural_rank']
    county_agricultural_color = popupColor(county_agricultural_rank)
    county_agricultural_risk = popupPercentile(county_agricultural_rank)
    county_agricultural_display = popupDisplay(county_agricultural)
  }

  else {
    county_agricultural_display = "N/A"
    county_agricultural_color = "gray"
    county_agricultural_risk = "N/A"

  }
  
  //state_code = counties_data[shorter_county_GEOID]['state_code']
  //console.log(state_code)
  //county_agr = county_agr.toFixed(2)
  county_mortality = (counties_data[shorter_county_GEOID]['mortality']).toFixed(2)
  county_mortality_rank = (counties_data[shorter_county_GEOID]['mortality_rank'])
  county_mortality_color = popupColor(county_mortality_rank)
  county_mortality_risk = popupPercentile(county_mortality_rank)
  county_mortality_display = popupDisplay(county_mortality)

  county_total = (counties_data[shorter_county_GEOID]['total_damages']).toFixed(2)
  county_total_rank = (counties_data[shorter_county_GEOID]['total_rank'])
  county_total_color = popupColor(county_total_rank)
  county_total_risk = popupPercentile(county_total_rank)
  county_total_display = popupDisplayOpposite(county_total)

  county_energy = (counties_data[shorter_county_GEOID]['energy_expenditures']).toFixed(2)
  county_energy_rank = (counties_data[shorter_county_GEOID]['energy_rank'])
  county_energy_color = popupColor(county_energy_rank)
  county_energy_risk = popupPercentile(county_energy_rank)
  county_energy_display = popupDisplay(county_energy)

  //county_labor_low = (counties_data[shorter_county_GEOID]['labor_low']).toFixed(2)
  county_labor_high = (counties_data[shorter_county_GEOID]['labor_high']).toFixed(2)
  county_labor_high_rank = (counties_data[shorter_county_GEOID]['labor_high_rank'])
  county_labor_high_color = popupColor(county_labor_high_rank)
  county_labor_high_risk = popupPercentile(county_labor_high_rank)
  county_labor_high_display = popupDisplay(county_labor_high)
  //county_coastal = (counties_data[shorter_county_GEOID]['coastal_damage']).toFixed(2)
  //county_coastal_rank = (counties_data[shorter_county_GEOID]['coastal_rank'])
  //county_coastal_color = popupColor(popup_coastal_rank)

  county_property = (counties_data[shorter_county_GEOID]['property_crime']).toFixed(2)
  county_property_rank = (counties_data[shorter_county_GEOID]['property_rank'])
  county_property_color = popupColor(county_property_rank)
  county_property_risk = popupPercentile(county_property_rank)
  county_property_display = popupDisplay(county_property)

  county_violent = (counties_data[shorter_county_GEOID]['violent_crime']).toFixed(2)
  county_violent_rank = (counties_data[shorter_county_GEOID]['violent_rank'])
  county_violent_color = popupColor(county_violent_rank)
  county_violent_risk = popupPercentile(county_violent_rank)
  county_violent_display = popupDisplay(county_violent)
  
  var ranks_analysis = [county_mortality_risk,county_total_risk,county_violent_risk,county_agricultural_risk,county_energy_risk,county_property_rank, county_labor_high_rank]
  //var ranks_name = ["mortality rate","county GDP","violent crime rate","agricultural yields"]
  //var values = [county_mortality,county_total_damage,county_violent,county_agr]

  //var county_total_damage = (entries[0][1].properties[`Total dama`]).toFixed(2)
  
  //console.log(entries[0][1].properties)
  //
  var ranks_ordered = [];
  for (var i=0;i<ranks_analysis.length;i++){

    if (ranks_analysis[i] == 'Highest risk'){
      ranks_ordered.push(ranks_analysis[i])
    }
    delete ranks_analysis[i]
  }
  for (var i=0;i<ranks_analysis.length;i++){

    if (ranks_analysis[i] == 'High risk'){
      ranks_ordered.push(ranks_analysis[i])
    }
    delete ranks_analysis[i]
  }
  for (var i=0;i<ranks_analysis.length;i++){

    if (ranks_analysis[i] == 'Median risk'){
      ranks_ordered.push(ranks_analysis[i])
    }
    delete ranks_analysis[i]
  }
  for (var i=0;i<ranks_analysis.length;i++){

    if (ranks_analysis[i] == 'Low risk'){
      ranks_ordered.push(ranks_analysis[i])
    }
    delete ranks_analysis[i]
  }
  for (var i=0;i<ranks_analysis.length;i++){

    if (ranks_analysis[i] == 'Lowest risk'){
      ranks_ordered.push(ranks_analysis[i])
    }
    delete ranks_analysis[i]
  }
 


  center_coordinates = [counties_data[shorter_county_GEOID]['centroid_xcoord'],counties_data[shorter_county_GEOID]['centroid_ycoord']]
  //
  var county_pop_density_all = '<h5>Population per mile<sup>2</sup></h5><h4><b>' + county_pop_density +'</b></h4>'
  var county_population_all = '<h5>Population (2012)</h5><h4><b>' + numberWithCommas(county_pop) +'</b></h4>'
  var county_income_all = '<h5>Median income (2012)</h5><h4>$<b>' + county_income +'</b></h4>'
  var county_mortality_all = '<h5>Change in mortality rate</h5><h4 style="color:' + county_mortality_color +'"><b>' + county_mortality_risk +'</b><br>'+county_mortality_display+'  deaths per 100,000</h4>'
  var county_total_all = '<h5>Total economic damage</h5><h4 style="color:' + county_total_color +'"><b>' + county_total_risk +'</b><br>'+county_total_display+'% of GDP</h4>'
  var county_energy_all = '<h5>Change in electricity demand</h5><h4 style="color:' + county_energy_color +'"><b>' + county_energy_risk +'</b><br>'+county_energy_display+'%</h4>'
  var county_agricultural_all = '<h5>Change in agricultural yields</h5><h4 style="color:' + county_agricultural_color +'"><b>' + county_agricultural_risk +'</b><br>'+county_agricultural_display+'%</h4>'
  var county_violent_all = '<h5>Change in violent crime rate</h5><h4 style="color:' + county_violent_color +'"><b>' + county_violent_risk +'</b><br>'+county_violent_display+'%</h4>'
  var county_property_all = '<h5>Change in property crime rate</h5><h4 style="color:' + county_property_color +'"><b>' + county_property_risk +'</b><br>'+county_property_display+'%</h4>'
  var county_labor_high_all = '<h5>Change in labor supply for high risk outdoor jobs</h5><h4 style="color:' + county_labor_high_color +'"><b>' + county_labor_high_risk +'</b><br>'+county_labor_high_display+'%</h4>'
  
  county_display = '<table class="robotable"><tr valign="top";><td>'+county_population_all+'</td><td>'+county_pop_density_all+'</td></tr><tr valign="top"><td>'+county_income_all+'</td><td>'+county_mortality_all+'</td></tr><tr valign="top"><td>'+county_total_all+'</td><td>'+county_energy_all+'</td></tr><tr valign="top"><td>'+county_agricultural_all+'</td><td>'+county_violent_all+'</td></tr><tr valign="top"><td>'+county_property_all+'</td><td>'+county_labor_high_all+'</td></tr></table>'

  /*var min_rank = 9000;
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
  }*/

  document.getElementById("name3").innerHTML = county_name
  document.getElementById("information").innerHTML = county_display
  map.setFilter('centroids_info',['==', 'GEOID', county_GEOID])
  map.setFilter('states-highlight',['==', 'STATEFP', county_STATEFP])
  map.setFilter('county-rank',['==', 'GEOID', county_GEOID])

  map.setLayoutProperty('centroids_info',"visibility","visible")
  
  map.setLayoutProperty('states-highlight',"visibility","visible");
  map.setLayoutProperty('county-rank',"visibility","visible")
  filterChange("new_search")
  
  //map.setMaxBounds(zoom_bounds)
    map.flyTo({center:center_coordinates,zoom:5});
  //map.setZoom(map.getZoom())
  })
}
  /*if (min_value > 0){
    crease = "a decrease"
  }
  else{
    crease = "an increase"
  }*/
  //var total_percentile = parseInt((100*county_total_rank/3144))
  //var violent_percentile = parseInt((100*county_violent_rank/3144))
  //var mortality_percentile = parseInt((100*county_mortality_rank/3144))


  //document.getElementById("percentile").innerHTML = percentile.toFixed(0)
  //document.getElementById("crease1").innerHTML = crease
  //document.getElementById("crease2").innerHTML = crease
  //document.getElementById("min_number").innerHTML = Math.abs(min_value)
  //document.getElementById("min_rank").innerHTML = min_rank
  //document.getElementById("indicator1").innerHTML = min_name
  //document.getElementById("indicator2").innerHTML = min_name

  //console.log("MAX: " + max_name + " VALUE: " + max_rank)
  //console.log("MIN: " + min_name + " VALUE: " + min_rank)

  
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

  //document.getElementById('box2').style.display = 'block'
  //document.getElementById('box2').style.height = 'auto' 
  
  //$("html, body, #left_side").animate({scrollBottom: $("#left_side").height()}, "slow");
  //var objDiv = document.getElementById("left_side");
  //console.log(objDiv.scrollHeight)
  //objDiv.scrollTop = objDiv.scrollHeight-200;
  //console.log(counties_data[county_GEOID]['total_rank'])
  //var chart_num = Math.round(counties_data[county_GEOID]['total_rank']/157)
  //console.log(chart_num)
  //color_graph(chart_num)
  //console.log(center_coordinates)


//function recenter(){
 // map.flyTo({center:center_coordinates,zoom:4.5});
//}

 /*function searchAgain(){
    $("html, body, left_side").animate({
      scrollTop: $("#search").offset().top -10                
  }, 500); 
    $("#indicator").val("total");
    $("#comparison").val("all");

    for (layer of indicator_layers){
      map.setFilter(layer,undefined)
      map.setLayoutProperty(layer,'visibility','none')
    }
  

    //map.setLayoutProperty('counties',"visibility","none");
    //map.setLayoutProperty('counties-border',"visibility","none");
    map.setLayoutProperty('states-6all0o',"visibility","none");
    //map.setLayoutProperty('centroids_info',"visibility","none")
    //map.setLayoutProperty('county-rank',"visibility","none")
    //map.setLayoutProperty('states-highlight',"visibility","none")
    //map.setLayoutProperty('counties-highlight',"visibility","none")
    //map.setLayoutProperty('counties-poly-background',"visibility","none")
    //decolorGraph()
    //map.setLayoutProperty('better',"visibility","hidden");
    //map.setLayoutProperty('worse',"visibility","hidden");
    //document.querySelector('.mapboxgl-ctrl-geocoder').display = 'none'
    map.flyTo({center: [-1.750,-0.727],zoom: 3.2});
  
 }*/


  //var coordinates = e.features[0].geometry.coordinates.slice();
  //var description = e.features[0].properties.description;
 
// Ensure that if the map is zoomed out such that multiple
// copies of the feature are visible, the popup appears
// over the copy being pointed to.
// while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
// coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
// }