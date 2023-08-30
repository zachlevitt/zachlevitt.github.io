var data = [
    {column: 0,
     content: [
         {
             title:"'War Against the Children'",
             toLink: 'https://www.nytimes.com/interactive/2023/08/30/us/native-american-boarding-schools.html',
             include: 'true',
             organization: 'New York Times',
         },
         {
             title:"Extreme Weather Maps: Track the Risks for Your Places",
             toLink: 'https://www.nytimes.com/interactive/2023/us/extreme-weather-forecast-maps.html',
             include: 'true',
             organization: 'New York Times',
         },
         {
        title: "Why the West Got Buried in Snow, While the East Got Little",
        toLink: "https://www.nytimes.com/interactive/2023/04/12/us/snow-winter-2023.html",
        include: 'true',
        organization: 'New York Times',
      },
          {
        title: "The Real-World Costs of the Digital Race for Bitcoin",
        toLink: "https://www.nytimes.com/2023/04/09/business/bitcoin-mining-electricity-pollution.html",
        include: 'true',
        organization: 'New York Times',
      },
      {
        title: "Tracking the California Storms",
        toLink: "https://www.nytimes.com/article/california-storm-maps-weather-rain.html",
        include: 'true',
        organization: 'New York Times',
      },
      {
        title: "Will You Have a White Christmas This Year?",
        toLink: "https://www.nytimes.com/interactive/2022/12/22/us/white-christmas.html",
        include: 'true',
        organization: 'New York Times',
      },
      {
        title: "The Monsoon Is Becoming More Extreme",
        toLink: "https://www.nytimes.com/interactive/2022/10/04/climate/south-asia-monsoon-climate-change.html",
        include: 'true',
        organization: 'New York Times',
      },
      {
        title: "Vulnerable and Trapped: A Look at Those Lost in Hurricane Ian",
        toLink: "https://www.nytimes.com/2022/10/21/us/hurricane-ian-victims.html",
        include: 'true',
        organization: 'New York Times',
      },
      {
        title: "How to Think About the Ukrainian Refugee Crisis, in Maps and Charts",
        toLink: "https://www.nytimes.com/interactive/2022/03/15/opinion/ukraine-refugee-crisis.html",
        include: 'false',
        organization: 'New York Times',
      },
      {
        title: "Why So Many Children of Immigrants Rise to the Top",
        toLink: "https://www.nytimes.com/interactive/2022/07/11/opinion/immigrants-success-america.html",
        include: 'true',
        organization: 'New York Times',
      },
      {
        title: "Who Will Remember the Horrors of Ukraine?",
        toLink: "https://www.nytimes.com/interactive/2022/06/13/opinion/ukraine-russia-babyn-yar.html",
        include: 'true',
        organization: 'New York Times',
      },
      {
        imageLink: 'images/resize50/afgh.png',
        toLink: 'https://www.nytimes.com/interactive/2022/04/12/opinion/taliban-afghanistan-revenge.html',
        title: "The Taliban Promised Them Amnesty. Then They Executed Them.",
        organization: 'New York Times',
        tools: 'JavaScript, D3, ai2html, QGIS',
        include: 'true',
      },
      {
        imageLink: 'images/disasters2021.png',
        toLink: 'https://www.washingtonpost.com/nation/interactive/2021/weather-disasters-2021/',
        title: 'Cold, heat, fires, hurricanes and tornadoes: The year in weather disasters',
        organization: 'Washington Post',
        tools: 'JavaScript (React), HTML/CSS, QGIS, Illustrator, GDAL, ffmpeg',
        include: 'true',
      },
      {
        imageLink: 'images/resize50/cpcs.png',
        toLink: 'https://www.nytimes.com/interactive/2022/05/12/opinion/crisis-pregnancy-centers-roe.html',
        title: 'Pregnant? Need Help? They Have an Agenda.',
        organization: 'New York Times',
        tools: 'HTML/CSS, JavaScript, Svelte, QGIS, Illustrator, Mapshaper',
        include: 'true',
      },
      {
        imageLink: 'images/resize50/census2020.png',
        toLink: 'https://www.washingtonpost.com/nation/interactive/2021/census-maps-race-population-demographics/',
        title: "Mapping America’s racial population shifts over the last decade",
        organization: 'Washington Post',
        tools: 'D3, HTML/CSS, JavaScript, React, QGIS',
        include: 'true',
      },

      {
        imageLink: 'images/resize50/hosp-vax.png',
        toLink: 'https://www.washingtonpost.com/health/2021/09/23/covid-vaccination-hospitalization-map/',
        title: 'Mapping America’s hospitalization and vaccination divide',
        organization: 'Washington Post',
        tools: 'QGIS, Illustrator, ai2html',
        include: 'true',
      },
      {
        imageLink: 'images/resize50/reservoirs.png',
        toLink: 'https://www.washingtonpost.com/weather/2021/07/09/western-reservoirs-drought-california-nevada/',
        title: 'Reservoirs are drying up as consequences of the Western drought worsen',
        organization: 'Washington Post',
        tools: 'Illustrator, ai2html, QGIS',
        include: 'true',
      },
      {
        imageLink: 'images/resize50/urbanGrowth.png',
        toLink: 'https://www.washingtonpost.com/nation/interactive/2021/land-development-urban-growth-maps/',
        title: "Where America's developed areas are growing",
        organization: 'Washington Post',
        tools: 'Mapbox, ai2html, HTML/CSS, JavaScript, React, QGIS,',
        include: 'true',
      },
      {
        imageLink: 'images/resize50/smoke.png',
        toLink: 'https://www.washingtonpost.com/nation/2021/08/26/wildfires-smoke-air-quality-pollution/',
        title: "Here’s what to know as a summer of wildfires prompts air-quality alerts across the West",
        organization: 'Washington Post',
        tools: 'ai2html, HTML/CSS, Illustrator, QGIS,',
        include: 'true',
      },
      {
        imageLink: 'images/resize50/vaccineDaily.png',
        toLink: 'https://www.npr.org/sections/health-shots/2021/01/28/960901166/how-is-the-covid-19-vaccination-campaign-going-in-your-state',
        title: 'COVID-19 Vaccine Tracker',
        organization: 'NPR',
        tools: 'JavaScript, D3, Python',
        include: 'true',
      },

      {
        imageLink: 'images/resize50/joy-generator.png',
        toLink: 'https://apps.npr.org/joy-generator/',
        title: 'Joy Generator',
        organization: 'NPR',
        tools: 'JavaScript, React, Illustrator, Figma',
        include: 'true',
      },
      {
        imageLink: 'images/resize50/flood.png',
        toLink: 'https://www.npr.org/2021/02/22/966428165/a-looming-disaster-new-data-reveal-where-flood-damage-is-an-existential-threat',
        title: "A Looming Disaster: New Data Reveal Where Flood Damage Is An Existential Threat",
        organization: 'NPR',
        tools: 'JavaScript (D3)',
        include: 'true',
      },
      {
        imageLink: 'images/resize50/cartogram.png',
        toLink: 'https://www.npr.org/2021/04/26/983082132/census-to-release-1st-results-that-shift-electoral-college-house-seats',
        title: "Here's How The First 2020 Census Results Changed Electoral College, House Seats",
        organization: 'NPR',
        tools: 'JavaScript (D3), Illustrator',
        include: 'true',
      },

      {
        imageLink: 'images/resize50/npr_hospitalizations.png',
        toLink: 'https://www.npr.org/sections/health-shots/2020/12/09/944379919/new-data-reveal-which-hospitals-are-dangerously-full-is-yours',
        title: 'COVID-19 Hospital Capacity Tracker',
        organization: 'NPR',
        tools: 'JavaScript, D3, Python',
        include: 'true',
      },
      {
        imageLink: 'images/resize50/power.png',
        toLink: 'https://www.latimes.com/projects/la-fi-power-companies-ranked-climate-change/',
        title: 'Which power companies are the worst polluters?',
        organization: 'Los Angeles Times',
        tools: 'Illustrator, HTML/CSS, JavaScript',
        include: 'true',
      },

      {
        imageLink: 'images/resize50/earthquake.png',
        toLink: 'https://www.latimes.com/projects/california-earthquake-fault-map/',
        title: 'What would a powerful earthquake feel like where you live?',
        organization: 'Los Angeles Times',
        tools: 'Mapbox, JavaScript, HTML/CSS, QGIS, Illustrator, Mapshaper',
        include: 'true',
      }]}
    ]

//get columns and rows
var homepageGrid = document.querySelector(".row")
var homepageColumn = document.getElementById("story_column")

//add clips
document.body.onload = setupHP(data);

////////////////////////////////////////////////
//HOMEPAGE
////////////////////////////////////////////////

function setupHP(data) {

  data.forEach(function(group,i){
      group.content.forEach(function(item,i){
        if (item.include=='true'){
          addElementToHP(item,group.column)
        }
      })
  })
}

function addElementToHP(item,index){

  //new content div
  const newDiv = document.createElement("div");
  newDiv.classList.add("link")

  // and give it some content
  const newP = document.createElement("p");
  //newP.href = item.toLink;
  newP.innerHTML = item.organization;
  // and give it some content
  const newContent = document.createElement("a");
  newContent.href = item.toLink;
  newContent.innerHTML = item.title;

  //create new image
  // const newImage = document.createElement("img")
  // newImage.src = item.imageLink;
  // newImage.classList.add("image_hp")

  //inner text
  const innerDiv = document.createElement("div");
  innerDiv.innerHTML = `<b>${item.title}</b><br>${item.organization}<br><span style="color:darkgray; font-size:12px">${item.tools}</span></div>`

  const hr = document.createElement("hr");

  //ADD IMAGE AND OTHER STUFF HERE
  
  // newContent.appendChild(newImage)
  //newContent.appendChild(innerDiv)
  // add the text node to the newly created div
  newDiv.appendChild(newContent);
  newDiv.appendChild(newP)

  // add the newly created element and its content into the DOM
  homepageColumn.appendChild(newDiv);

}
