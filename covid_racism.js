mapboxgl.accessToken = 'pk.eyJ1IjoiemFjaGxldml0dCIsImEiOiJjazFpcHpncngxc21nM2ptdjNxZ2d6eGV6In0.UQA6j8m__GZSNau11Ry3qg';

var map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/zachlevitt/ck9qitn4644xr1ipkp6g6z7fs/draft', // stylesheet location
  center: [-2,2], // starting position [lng, lat]
  zoom: 3.7, // starting zoom
  minZoom: 3,
  maxZoom: 9,
  });

map.scrollZoom.disable();
map.doubleClickZoom.disable();
map.touchZoomRotate.disable();

var geocoder = new MapboxGeocoder({
  accessToken: mapboxgl.accessToken,
  country: 'us',
  mapboxgl: mapboxgl,
  placeholder: "ex. XXXXX",
});

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

map.on('click', 'states-cases-yn', function(e) {
  //console.log(e.features[0])
  //
  //var coordinates= [e.features[0].properties.centroid_xcoord,e.features[0].properties.centroid_ycoord]
  //console.log(coordinates)
  //var description = e.features[0].properties.description
  //console.log(e.features[0].properties)
  //var name = e.features[0].properties.NAME
  var stateData = e.features[0].properties
  console.log(stateData)
  var stateName = stateData.stateName
  var stateCountyLevelData = stateData.CountyLevelData
  var stateDailyCount_Positives_Total = stateData.DailyCount_Positives_Total
  var stateDeaths_DailyCount = stateData.Deaths_DailyCount
  var stateCountyLevelData = stateData.CountyLevelData
  var stateEthnicityIncluded_in_RacialBreakdown = stateData.EthnicityIncluded_in_RacialBreakdown
  var stateEthnicityReportedSeparately = stateData.EthnicityReportedSeparately
  var stateZipcodeData = stateData.ZipcodeData
  var stateDeaths_Percent_Unknown = stateData.Deaths_Percent_Unknown
  var statePositives_RACE_PercentUnknown = stateData.Positives_RACE_PercentUnknown
  
  var stateTotalCases_April1 = stateData.TotalCases_April1
  var stateTotalCases_May1 = stateData.TotalCases_May1
  var stateTotalDeaths_April1 = stateData.TotalDeaths_April1
  var stateTotalDeaths_May1 = stateData.TotalDeaths_May1

  var statePositives_KnownBlack = stateData.Deaths_KnownBlack
  var statePositives_KnownHL = stateData.Deaths_KnownHL
  var statePositives_KnownWhite = stateData.Deaths_KnownWhite
  var statePositives_KnownAsian = stateData.Deaths_KnownAsian

  var stateDeaths_KnownBlack = stateData.Deaths_KnownBlack
  var stateDeaths_KnownHL = stateData.Deaths_KnownHL
  var stateDeaths_KnownWhite = stateData.Deaths_KnownWhite
  var stateDeaths_KnownAsian = stateData.Deaths_KnownAsian

  table_display = '<table class="robotable"><tr valign="top";><td>'+(statePositives_KnownBlack/stateDeaths_DailyCount)*100+'% Black</td><td>'+(statePositives_KnownHL/stateDeaths_DailyCount)*100+'% Hispanic/Latinx</td></tr><tr valign="top"><td>'+(statePositives_KnownWhite/stateDeaths_DailyCount)*100+' % White</td><td>'+(statePositives_KnownAsian/stateDeaths_DailyCount)*100+'% Asian</td></tr><tr valign="top"><td>'+(stateDeaths_KnownBlack/stateDeaths_DailyCount)*100+'% Black</td><td>'+(stateDeaths_KnownHL/stateDeaths_DailyCount)*100+'% Hispanic/Latinx</td></tr><tr valign="top"><td>'+(stateDeaths_KnownWhite/stateDeaths_DailyCount)*100+'% White</td><td>'+(stateDeaths_KnownAsian/stateDeaths_DailyCount)*100+'% Asian</td></tr><tr valign="top"><td></td></tr></table>'

  var stateRacialBreakdown_Deaths = stateData.RacialBreakdown_Deaths
  var stateRacialBreakdown_Cases = stateData.RacialBreakdown_Cases

  if (stateRacialBreakdown_Cases == 'Y'&& stateRacialBreakdown_Deaths == 'Y'){
    var first_sentence = " has released racial breakdowns for COVID-19 confirmed cases and deaths."
    if (stateZipcodeData == 'Y'){
      var second_sentence = "This data has been released at the zip code and county level. Illinois is the only state to release data at the zipcode level and one of only two (Kentucky) that has released at the county level."
    }

    else if (stateCountyLevelData == 'Y'){
      var second_sentence = "This data has been released at the county level. Kentucky and Illinois are the only states that have released county-level racial breakdowns."
    }
    else if (stateCountyLevelData == 'N' && stateZipcodeData == 'N'){
      var second_sentence = "This data has been released only at the statewide level."
    }
    var third_sentence = "Out of " + stateDeaths_DailyCount + " confirmed COVID-19 deaths, " + stateName + " reports "
  } //end of YES YES

  else if (stateRacialBreakdown_Cases == 'N' && stateRacialBreakdown_Deaths == 'Y'){
    var first_sentence = " has released racial breakdowns for COVID-19 confirmed deaths but not cases."

    var second_sentence = "This data has been released only at the statewide level."
  }

  else if (stateRacialBreakdown_Cases == 'Y' && stateRacialBreakdown_Deaths == 'N'){
    var first_sentence = " has released racial breakdowns for COVID-19 confirmed cases but not deaths."
    var second_sentence = "This data has been released only at the statewide level."
  }

  else if (stateRacialBreakdown_Cases == 'N' && stateRacialBreakdown_Deaths == 'N'){
    var first_sentence = " has not released any racial breakdowns for COVID-19 confirmed cases or deaths."
    var second_sentence = ""
  }

  var zeroStates = "Zero states have released racial breakdowns for negative COVID-19 tests."
  //Montana 
  //  Racial breakdown of CASES
  //                      DEATHS
  //  Is ethnicity included?
  //  Is ethnicity inclured spearately?
  //  
  //  What level?
  //    state level
  //    county level
  //    zipcode level
  //
  //  Deaths
  //    X % of deaths are POC, black, each race
  //    X % of cases are _____
  //    
  //      
  //  
  //has released ____ on racial breakdowns. 
  //BOTH:
  //  Based on the avaialble data, ____ percent of cases are .....
  //  .....
  //
  //Total deaths: _____
  //Total cases: ______

  //console.log(e.features[0].properties)
  document.getElementById("robotext1").innerHTML = stateName
  document.getElementById("robotext2").innerHTML = "<b>" + stateName + "</b>" + first_sentence + " " + second_sentence
  });
  //document.getElementById("robotext3").innerHTML = "Total cases: <b>" + numberWithCommas(stateTotalCases_May1) + "</b> (May 1)"
  //document.getElementById("robotext2").innerHTML = "Total deaths: <b>"+ numberWithCommas(stateTotalDeaths_May1) + "</b> (May 1)"
  //document.getElementById("robotext5").innerHTML = "Racial breakdown of cases: " + stateRacialBreakdown_Cases
  //document.getElementById("robotext4").innerHTML = "Racial breakdown of deaths: " + stateRacialBreakdown_Deaths

  
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
  //console.log(window.scrollY)
  if (window.scrollY > 175){
    //console.log("WE ARE AT 1")
    document.getElementById('scroll1').style.visibility = 'visible';
    document.getElementById('scroll1').style.opacity = 1
  }

  if (window.scrollY > 375){
    document.getElementById('scroll2').style.visibility = 'visible';
    document.getElementById('scroll2').style.opacity = 1
  }

  if (window.scrollY > 575){
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