var data = [
      {
        imageLink: 'images/earthquake.png',
        toLink: 'portfolio.html#earthquakes',
        title: 'Interactive earthquake risk map',
        organization: 'Los Angeles Times',
        tools: 'Mapbox GL JS, HTML, CSS, QGIS, Illustrator, Mapshaper',
      },
      {
        imageLink: 'images/blackfeet.png',
        toLink: 'portfolio.html#badger',
        title: 'Blackfeet reservation timeline map',
        organization: '',
        tools: 'Illustrator, QGIS',
      },
      {
        imageLink: 'images/oregon.png',
        toLink: 'portfolio.html#oregon',
        title: 'West Coast housing crisis visualizations',
        organization: 'Los Angeles Times',
        tools: 'Illustrator, R',
      },
      {
        imageLink: 'images/ridgecrest_print.png',
        toLink: 'portfolio.html#ridgecrest',
        title: 'Ridgecrest earthquake map',
        organization: 'Los Angeles Times',
        tools: 'QGIS, Illustrator',
      },
      {
        imageLink: 'images/hospital_capacity.png',
        toLink: 'portfolio.html#hospitals',
        title: 'COVID Hospital Capacity Charts',
        organization: 'NPR',
        tools: 'JavaScript, D3, Python',
      },
      // {
      //   imageLink: 'images/TKTKTKTK.png',
      //   toLink: 'portfolio.html#TKTKTKTK',
      //   title: 'TKTKTKTK',
      //   organization: 'TKTKTKTK',
      //   tools: 'TKTKTKTK, TKTKTKTK, TKTKTKTK',
      // },
      // {
      //   imageLink: 'images/TKTKTKTK.png',
      //   toLink: 'portfolio.html#TKTKTKTK',
      //   title: 'TKTKTKTK',
      //   organization: 'TKTKTKTK',
      //   tools: 'TKTKTKTK, TKTKTKTK, TKTKTKTK',
      // },
      // {
      //   imageLink: 'images/TKTKTKTK.png',
      //   toLink: 'portfolio.html#TKTKTKTK',
      //   title: 'TKTKTKTK',
      //   organization: 'TKTKTKTK',
      //   tools: 'TKTKTKTK, TKTKTKTK, TKTKTKTK',
      // },
      // {
      //   imageLink: 'images/TKTKTKTK.png',
      //   toLink: 'portfolio.html#TKTKTKTK',
      //   title: 'TKTKTKTK',
      //   organization: 'TKTKTKTK',
      //   tools: 'TKTKTKTK, TKTKTKTK, TKTKTKTK',
      // },
      // {
      //   imageLink: 'images/TKTKTKTK.png',
      //   toLink: 'portfolio.html#TKTKTKTK',
      //   title: 'TKTKTKTK',
      //   organization: 'TKTKTKTK',
      //   tools: 'TKTKTKTK, TKTKTKTK, TKTKTKTK',
      // },
      // {
      //   imageLink: 'images/TKTKTKTK.png',
      //   toLink: 'portfolio.html#TKTKTKTK',
      //   title: 'TKTKTKTK',
      //   organization: 'TKTKTKTK',
      //   tools: 'TKTKTKTK, TKTKTKTK, TKTKTKTK',
      // },
      // {
      //   imageLink: 'images/TKTKTKTK.png',
      //   toLink: 'portfolio.html#TKTKTKTK',
      //   title: 'TKTKTKTK',
      //   organization: 'TKTKTKTK',
      //   tools: 'TKTKTKTK, TKTKTKTK, TKTKTKTK',
      // },
      // {
      //   imageLink: 'images/TKTKTKTK.png',
      //   toLink: 'portfolio.html#TKTKTKTK',
      //   title: 'TKTKTKTK',
      //   organization: 'TKTKTKTK',
      //   tools: 'TKTKTKTK, TKTKTKTK, TKTKTKTK',
      // },
      // {
      //   imageLink: 'images/TKTKTKTK.png',
      //   toLink: 'portfolio.html#TKTKTKTK',
      //   title: 'TKTKTKTK',
      //   organization: 'TKTKTKTK',
      //   tools: 'TKTKTKTK, TKTKTKTK, TKTKTKTK',
      // },
      // {
      //   imageLink: 'images/TKTKTKTK.png',
      //   toLink: 'portfolio.html#TKTKTKTK',
      //   title: 'TKTKTKTK',
      //   organization: 'TKTKTKTK',
      //   tools: 'TKTKTKTK, TKTKTKTK, TKTKTKTK',
      // },
    ]


console.log(data)
var homepageGrid = document.querySelector(".row")
//var homepageColumns = document.querySelectorAll(".column")
//console.log(homepageColumns)
var homepageColumns = document.querySelectorAll(".column")

//get the columns, loop through columns

document.body.onload = addClipsToHP(data);

function addClipsToHP (data) {

  //console.log("add")

  var dataLength = data.length
  var dataPerColumn = dataLength/3

  data.forEach(function(item,i){

    if (i <= dataLength/3){
      addElement(item,0)
    }

    else if (i > dataPerColumn && i < dataPerColumn*2){
      addElement(item,1)
    }

    else {
      addElement(item,2)
    }
     

  })

  // homepageColumns.forEach(function(column,i){
    
  //   while (count < dataPerColumn){
  //     addElement(item)
  //   }
    

  
  // })
  // create a new div element
}
    //}
  
//}

function addElement(item,index){

  const newDiv = document.createElement("div");
  newDiv.classList.add("content_img")

  // and give it some content
  const newContent = document.createElement("a");
  newContent.href = item.toLink;

  const newImage = document.createElement("img")
  newImage.src = item.imageLink;
  newImage.classList.add("image_hp")

  const innerDiv = document.createElement("div");
  innerDiv.innerHTML = `<b>${item.title}</b><br>${item.organization}<br><span style="color:darkgray; font-size:12px">${item.tools}</span></div>`


  //ADD IMAGE AND OTHER STUFF HERE
  newContent.appendChild(newImage)
  newContent.appendChild(innerDiv)
  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  //const currentDiv = document.getElementById("ports");
  homepageColumns[index].appendChild(newDiv);

}