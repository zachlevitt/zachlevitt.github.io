<script>
    //node scripts/doc-to-archieml.js
    import doc from '../doc.json';
    let menu = doc.menu;
    let headline = doc.headline;

</script>
<section class="jumbotron">

    <h1 class="jumbotron-heading">{headline}</h1>
    
    {#each menu as item}
        <div class="about">
            <h2>{item.value}</h2>
        </div>
    {/each}

  </section>

<div id="ports" class="row"> 
<div class="column"></div>
</div>

<style>
    .jumbotron {
        font-family: 'Helvetica', 'Arial', sans-serif;
    }


/* Parent Container */
.content_img{
 position: relative;
 filter:grayscale(255)!important;
 margin-top:10px;
 margin-bottom:50px;
 text-decoration:none!important;
 position:relative;
 
}

.content_img p {
  margin-bottom:5px;
  line-height:18px;
  font-size:16px;
  text-decoration:none!important;
  color:gray;
}

.content_img p:hover {
  text-decoration: none!important;
  color:black
}

.content_img a:hover, .content_img a {
  text-decoration: none!important;
  color:black
}

/* Child Text Container */
.content_img div{
 position: absolute;
 bottom: 0;
 right: 0;
 color: black;
 background-color:rgba(255,255,255,0.9);
 margin-bottom: 15px;
 opacity: 0;
 visibility: hidden;
 -webkit-transition: visibility 0.5s, opacity 0.5s linear; 
 transition: visibility 0.5s, opacity 0.5s linear;
 width: 100%;
 text-align:right;
 font-size:12px;
 /*border: 1px solid black;*/
}

/* Hover on Parent Container */
.content_img:hover{
 cursor: pointer;
 filter:grayscale(0)!important;
}

.content_img:hover div{
 visibility: visible;
 opacity: 1; 
}

h2.about {
  color: black;
  font-size: 16px;
  font-weight:300;
  margin: auto;
  margin-top: 15px;
  margin-bottom: 15px;
  max-width: 500px;
  text-align:left;
  line-height: 20px;
  font-family: 'Helvetica', 'Arial', sans-serif;
}

pre {
  color: gray;
  font-family: 'Helvetica', 'Arial', sans-serif;
}

h2#about.about {
  text-align:center;
}

h2.about:last-of-type {
  margin-bottom: 25px;
}

.overlay2 h5 {
  font-weight: medium;
}

hr {
  border-top: 2px solid rgba(0,0,0,.1);
}

h2.about a {
  color: black;
  font-weight: bold;
  font-size: 16px;
  font-family: 'Helvetica', 'Arial', sans-serif;
  text-decoration: none;
}

h2.about a:hover {
  text-decoration: none;
  color: gray;
}

.section-header {
  text-align: left;
  font-weight: 200;
  margin-bottom: 50px;
  margin-top: 50px;
}



.jumbotron {
  width: 95%;
  font-family: 'Helvetica', 'Arial', sans-serif;
  max-width: 400px;
  background-color: #ffffff;
  margin: auto;
  margin-bottom: 20px;
  padding: 0px;
  text-align: center;
  margin-top: 25px;
}

h1.jumbotron-heading {
  margin-top: 25px;
    margin-bottom: 25px;
    font-family: 'Helvetica', 'Arial', sans-serif;
    font-size:40px;
}

.jumbotron-heading a {
  font-weight: bold;
  color: black;
  margin-top: 25px;
  text-decoration: none;
}

.jumbotron-heading a:hover {
  text-decoration: none;
  color: gray;
}

.jumbotron p {
  max-width: 100%;
}

.jumbotron p:last-child {
  margin-bottom: 0;
}

.album {
  background-color: #ffffff;
}

.container {
  width: 90%;
  max-width: 1000px;
}

.float-right a{
  color: gray;
  font-weight: bold;
}

.float-right a:hover{
  color: lightgray;
  text-decoration: none;
  
}


.container2 {
  max-width: 90%;
  width: 400px;
  margin: auto;
  margin-top: 30px;
}

.example {
  position: relative;
  /*width: 50%;*/
}

.image {
  display: block;
  width: 60%;
  margin-left: 0%;
  height: auto;
  margin-bottom: 20px;
  float: left;
  
}

.image3 {
  width: 60%;
  margin-left: 0%;
  height: auto;
  margin-bottom: 20px;
  float: left;
  
}

.image_hp {
  padding: 0px!important;
  /*border: 1px solid lightgray!important;*/
}

.image2 {
  display: block;
  width: 100%;
  margin-left: 0%;
  height: auto;
  margin-bottom: 10px;
}

.image5 {
  display:block;
  max-width:600px;
  max-height: 500px;
  margin:auto;
  margin-bottom:2px;
}


.overlay2 {
  position: relative;
  float: right;
  /*height: 100%;*/
  width: 37%;
}

.overlay2 a:hover{
  text-decoration: underline;
}

.overlay2 a {
  color: black;
  font-weight: bold;
}


.card {
  border: 0;
  margin-bottom:30px;
  margin-top: 30px;
}


.card-text {
  font-weight: 300;
  font-size: 14px;
  color: gray;
}

.card-text2 {
  font-weight: 300;
  color: black;
}

.card-text2 a {
  color: black;
  text-decoration: underline;
}

.card-text2 a:hover {
  text-decoration: none;
  color: gray;
}

.subhead {
  line-height: 18px;
  margin-top: 100px;
}

.subhead a {
  color: gray;
  font-weight: lighter;
}

footer {
  padding-top: 3rem;
  padding-bottom: 3rem;
}

footer p {
  margin-bottom: .25rem;
}

.row {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
  width: 100%;
  margin: auto;
  max-width:400px;
}


/* Create four equal columns that sits next to each other */
.column {
  flex: 100%;
  max-width: 100%;
  padding: 0 10px 0 10px;
}

.column img {
  margin-top: 0px;
  margin-bottom: 0px;
  vertical-align: middle;
  width: 100%;
}


</style>