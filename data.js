var data = [
    {column: 0,
     content: [
      {
        imageLink: 'images/earthquake.png',
        toLink: 'portfolio.html#earthquakes',
        title: 'Interactive earthquake risk map',
        organization: 'Los Angeles Times',
        tools: 'Mapbox GL JS, HTML, CSS, QGIS, Illustrator, Mapshaper',
        include: 'true',
      },
      {
        imageLink: 'images/mmusic_hp.png',
        toLink: 'portfolio.html#music',
        title: 'Midd Music web app',
        organization: 'Middlebury College',
        tools: 'JavaScript (React, Node), Google Firebase, GitHub',
        include: 'false',
      },
       {
        imageLink: 'images/art/FilteredSLIC2_Minimalism_20-Sep-18-00-48-17.png',
        toLink: 'portfolio.html#generative',
        title: 'Generative image processing',
        organization: '',
        tools: 'Python (scikit-image, PIL',
        include: 'false',
      },
      {
        imageLink: 'images/art/warhol_processing-Sep-18-00-48-17.png',
        toLink: 'portfolio.html#sketches',
        title: 'Code sketches',
        organization: '',
        tools: 'p5.js',
        include: 'false',
      },
      {
        imageLink: 'images/blackfeet.png',
        toLink: 'portfolio.html#badger',
        title: 'Blackfeet reservation timeline map',
        organization: '',
        tools: 'Illustrator, QGIS',
        include: 'true',
      },
      {
        imageLink: 'images/oregon.png',
        toLink: 'portfolio.html#oregon',
        title: 'West Coast housing crisis visualizations',
        organization: 'Los Angeles Times',
        tools: 'Illustrator, R',
        include: 'true',
      },
      {
        imageLink: 'images/ridgecrest_print.png',
        toLink: 'portfolio.html#ridgecrest',
        title: 'Ridgecrest earthquake map',
        organization: 'Los Angeles Times',
        tools: 'QGIS, Illustrator',
        include: 'true',
      },
      {
        imageLink: 'images/hospital_capacity.png',
        toLink: 'portfolio.html#hospitals',
        title: 'COVID Hospital Capacity Charts',
        organization: 'NPR',
        tools: 'JavaScript, D3, Python',
        include: 'false',
      },

      {
        imageLink: 'images/power.png',
        toLink: 'portfolio.html#power_companies',
        title: 'Interactive power company emissions article',
        organization: 'Los Angeles Times',
        tools: 'Illustrator, HTML/CSS, JavaScript',
        include: 'true',
      },
      {
        imageLink: 'images/antarctica.png',
        toLink: 'portfolio.html#antarctica',
        title: 'Antarctic expeditions map',
        organization: 'Middlebury College',
        tools: 'ArcMap, Illustrator',
        include: 'true',
      }
      ]},
      {column: 1,
      content: [

      {
        imageLink: 'images/senior_project_summary_image.png',
        toLink: 'portfolio.html#cc',
        title: 'The United States of Climate Change',
        organization: 'Middlebury College',
        tools: 'Mapbox GL JS, HTML, CSS, QGIS, Mapshaper',
        include: 'true',
      },
      {
        imageLink: 'images/ee_ss.png',
        toLink: 'portfolio.html#ee',
        title: 'Machine learning and satellite imagery analysis',
        organization: 'Middlebury College',
        tools: 'Google Earth Engine, JavaScript, Python',
        include: 'true',
      },
      {
        imageLink: 'images/houston.png',
        toLink: 'portfolio.html#houston',
        title: 'Environmental Injustice and Natural Disasters',
        organization: 'Middlebury College',
        tools: 'ArcGIS, Illustrator',
        include: 'true',
      },
      {
        imageLink: 'images/antarctica.png',
        toLink: 'portfolio.html#antarctica',
        title: 'Antarctic expeditions map',
        organization: 'Middlebury College',
        tools: 'ArcMap, Illustrator',
        include: 'true',
      },
      {
        imageLink: 'images/homelessness.png',
        toLink: 'portfolio.html#homelessness',
        title: 'Homelessness in Los Angeles graphics',
        organization: 'Los Angeles Times',
        tools: 'Illustrator',
        include: 'true',
      },
      {
        imageLink: 'images/WaterWalks_v2.png',
        toLink: 'portfolio.html#guntram',
        title: 'Indigenous experiences at the U.S.-Canada border',
        organization: 'Middlebury College',
        tools: 'Illustrator, QGIS',
        include: 'true',
      }]},
      {column: 2,
      content: [
      {
        imageLink: 'images/dapl-ss.png',
        toLink: 'portfolio.html#dapl',
        title: 'Dakota Access Pipeline map',
        organization: 'Middlebury College',
        tools: 'ArcMap, Illustrator',
        include: 'true',
      },
      {
        imageLink: 'images/nc_vote.png',
        toLink: 'portfolio.html#nc',
        title: 'Prison gerrymandering in North Carolina',
        organization: 'Voting Rights Data Institute',
        tools: 'QGIS',
        include: 'true',
      },
      {
        imageLink: 'images/chart_ss.png',
        toLink: 'portfolio.html#divest',
        title: 'Middlebury College divestment graphics',
        organization: 'Middlebury Campus',
        tools: 'QGIS, Illustrator, HTML/CSS, JavaScript, WordPress',
        include: 'true',
      },
      {
        imageLink: 'images/gis_work_ss.png',
        toLink: 'portfolio.html#gis',
        title: 'GIS Applications in Environmental Science course',
        organization: 'Middlebury College',
        tools: 'ArcMap',
        include: 'true',
      },
      {
        imageLink: 'images/mggg.png',
        toLink: 'portfolio.html#rules',
        title: 'Congressional redistricting rules',
        organization: 'Voting Rights Data Institute',
        tools: 'R, QGIS',
        include: 'true',
      },
      {
        imageLink: 'images/ss_lapd.png',
        toLink: 'portfolio.html#lapd',
        title: 'LAPD traffic stops graphics',
        organization: 'Los Angeles Times',
        tools: 'Illustrator',
        include: 'true',
      },]}
    ]

//get columns and rows
var homepageGrid = document.querySelector(".row")
var homepageColumns = document.querySelectorAll(".column")

//add clips
document.body.onload = addClipsToHP(data);



function addClipsToHP (data) {
  //figure out how many per column
  var dataLength = data.length
  var dataPerColumn = dataLength/3

  data.forEach(function(group,i){


      group.content.forEach(function(item,i){
        if (item.include=='true'){
          addElement(item,group.column)
        }
        
      })



    // if (item.include == 'true'){ //if we want it published
    //   if (i <= dataLength/3){
    //     addElement(item,0)
    //   }

    //   else if (i > dataPerColumn && i < dataPerColumn*2){
    //     addElement(item,1)
    //   }

    //   else {
    //     addElement(item,2)
    //   }
    // }
     

  })
}


function addElement(item,index){

  //new content div
  const newDiv = document.createElement("div");
  newDiv.classList.add("content_img")

  // and give it some content
  const newContent = document.createElement("a");
  newContent.href = item.toLink;

  //create new image
  const newImage = document.createElement("img")
  newImage.src = item.imageLink;
  newImage.classList.add("image_hp")

  //inner text
  const innerDiv = document.createElement("div");
  innerDiv.innerHTML = `<b>${item.title}</b><br>${item.organization}<br><span style="color:darkgray; font-size:12px">${item.tools}</span></div>`


  //ADD IMAGE AND OTHER STUFF HERE
  newContent.appendChild(newImage)
  newContent.appendChild(innerDiv)
  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  homepageColumns[index].appendChild(newDiv);

}