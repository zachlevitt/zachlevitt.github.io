import { c as create_ssr_component, e as escape, d as each } from "../../chunks/index.js";
const headline = "Zach Levitt";
const menu = [
  {
    type: "text",
    value: "Projects"
  },
  {
    type: "text",
    value: "About"
  }
];
const index = [];
const projects = [
  {
    title: "The New York Times",
    section: "true"
  },
  {
    title: '<a href="https://www.nytimes.com/interactive/2022/10/04/climate/south-asia-monsoon-climate-change.html">The Monsoon Is Becoming More Extreme</a>'
  },
  {
    title: '<a href="https://www.nytimes.com/interactive/2022/10/01/us/hurricane-ian-fort-myers-beach-damage.html">What Hurricane Ian Destroyed in a Florida Beach Town</a>'
  },
  {
    title: '<a href="https://www.nytimes.com/interactive/2022/us/heat-wave-map-tracker.html">Tracking Dangerous Heat in the U.S.</a>'
  },
  {
    title: '<a href="https://www.nytimes.com/interactive/2022/07/11/opinion/immigrants-success-america.html">Why So Many Children of Immigrants Rise to the Top</a>'
  },
  {
    title: '<a href="https://www.nytimes.com/interactive/2022/06/13/opinion/ukraine-russia-babyn-yar.html">Who Will Remember the Horrors of Ukraine?</a>'
  },
  {
    title: '<a href="https://www.nytimes.com/interactive/2022/05/12/opinion/crisis-pregnancy-centers-roe.html">Pregnant? Need Help? They Have an Agenda.</a>',
    imageLink: "images/resize50/cpcs.png",
    organization: "New York Times",
    tools: "HTML/CSS, JavaScript, Svelte, QGIS, Illustrator, Mapshaper",
    include: "true"
  },
  {
    title: '<a href="https://www.nytimes.com/interactive/2022/03/15/opinion/ukraine-refugee-crisis.html">How to Think About the Ukrainian Refugee Crisis, in Maps and Charts</a>',
    imageLink: "images/ukraine_bubbles.png",
    organization: "The New York Times",
    tools: "JavaScript (Svelte), D3, HTML/CSS, QGIS, Illustrator",
    include: "true"
  },
  {
    title: "The Washington Post",
    section: "true"
  },
  {
    title: '<a href="https://www.washingtonpost.com/nation/interactive/2021/weather-disasters-2021/">Cold, heat, fires, hurricanes and tornadoes: The year in weather disasters</a>',
    imageLink: "images/disasters2021.png",
    organization: "The Washington Post",
    tools: "JavaScript (React), HTML/CSS, QGIS, Illustrator, GDAL, ffmpeg",
    include: "true"
  },
  {
    title: '<a href="https://www.washingtonpost.com/nation/interactive/2021/census-maps-race-population-demographics/">America\u2019s demographics are changing. How has your county shifted?</a>',
    organization: "Washington Post",
    imageLink: "images/resize50/smoke.png",
    tools: "D3, HTML/CSS, JavaScript, React, QGIS",
    include: "true"
  },
  {
    title: '<a href="https://www.washingtonpost.com/nation/2021/08/26/wildfires-smoke-air-quality-pollution/">Here\u2019s what to know as a summer of wildfires prompts air-quality alerts across the West</a>',
    organization: "Washington Post",
    tools: "ai2html, HTML/CSS, Illustrator, QGIS",
    include: "true"
  },
  {
    title: '<a href="https://www.washingtonpost.com/health/2021/09/23/covid-vaccination-hospitalization-map/">Mapping America\u2019s hospitalization and vaccination divide</a>',
    imageLink: "images/resize50/hosp-vax.png",
    organization: "Washington Post",
    tools: "QGIS, Illustrator, ai2html",
    include: "true"
  },
  {
    title: '<a href="https://www.washingtonpost.com/weather/2021/07/09/western-reservoirs-drought-california-nevada/">Reservoirs are drying up as consequences of the Western drought worsen</a>',
    imageLink: "images/resize50/urbanGrowth.png,",
    organization: "Washington Post",
    tools: "Illustrator, ai2html, QGIS",
    include: "true"
  },
  {
    title: '<a href="https://www.washingtonpost.com/nation/interactive/2021/land-development-urban-growth-maps/">Where America\u2019s developed areas are growing</a>',
    organization: "Washington Post",
    tools: "Mapbox, ai2html, HTML/CSS, JavaScript, React, QGIS",
    include: "true"
  },
  {
    title: "National Public Radio",
    section: "true"
  },
  {
    title: '<a href="https://www.npr.org/sections/codeswitch/2021/05/08/991535564/black-americans-and-the-racist-architecture-of-homeownership">Black Americans And The Racist Architecture Of Homeownership</a>',
    imageLink: "images/resize50/redlining.png",
    organization: "NPR",
    tools: "JavaScript (D3), Illustrator, Photoshop",
    include: "true"
  },
  {
    title: '<a href="https://apps.npr.org/joy-generator/">Joy Generator</a>',
    imageLink: "images/resize50/joy-generator.png",
    organization: "National Public Radio",
    tools: "JavaScript, React, Illustrator, Figma",
    include: "true"
  },
  {
    title: '<a href="https://www.npr.org/2021/02/22/966428165/a-looming-disaster-new-data-reveal-where-flood-damage-is-an-existential-threat">A Looming Disaster: New Data Reveal Where Flood Damage Is An Existential Threat</a>',
    organization: "NPR",
    imageLink: "images/resize50/flood.png",
    tools: "JavaScript (D3)",
    include: "true"
  },
  {
    title: '<a href="https://www.npr.org/2021/04/26/983082132/census-to-release-1st-results-that-shift-electoral-college-house-seats">Here\u2019s How The First 2020 Census Results Changed Electoral College, House Seats</a>',
    imageLink: "images/resize50/cartogram.png",
    organization: "NPR",
    tools: "JavaScript (D3), Illustrator",
    include: "true"
  },
  {
    title: '<a href="https://www.npr.org/sections/health-shots/2021/01/28/960901166/how-is-the-covid-19-vaccination-campaign-going-in-your-state">COVID-19 Vaccine Tracker</a>',
    imageLink: "images/resize50/vaccineDaily.png",
    organization: "NPR",
    tools: "JavaScript, D3, Python",
    include: "true"
  },
  {
    title: '<a href="https://www.npr.org/sections/health-shots/2020/12/09/944379919/new-data-reveal-which-hospitals-are-dangerously-full-is-yours">COVID-19 Hospital Capacity Tracker</a>',
    imageLink: "images/resize50/npr_hospitalizations.png",
    organization: "NPR",
    tools: "JavaScript, D3, Python",
    include: "true"
  },
  {
    title: "Los Angeles Times",
    section: "true"
  },
  {
    title: '<a href="https://www.latimes.com/projects/california-earthquake-fault-map/">What would a powerful earthquake feel like where you live?</a>',
    imageLink: "images/resize50/earthquake.png",
    organization: "Los Angeles Times",
    tools: "Mapbox, JavaScript, HTML/CSS, QGIS, Illustrator, Mapshaper",
    include: "true"
  }
];
const doc = {
  headline,
  menu,
  index,
  projects
};
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".jumbotron.svelte-1mc1d54.svelte-1mc1d54{font-family:'Helvetica', 'Arial', sans-serif}a{text-decoration:none!important;color:#737272!important;font-weight:100!important}a:hover{text-decoration:none!important;color:black!important;font-weight:500!important}.project.svelte-1mc1d54.svelte-1mc1d54{text-align:left!important}.jumbotron.svelte-1mc1d54.svelte-1mc1d54{width:95%;font-family:'Helvetica', 'Arial', sans-serif;max-width:400px;background-color:#ffffff;margin:auto;margin-bottom:20px;padding:0px;text-align:center;margin-top:25px}h1.jumbotron-heading.svelte-1mc1d54.svelte-1mc1d54{margin-top:25px;margin-bottom:25px;font-family:'Helvetica', 'Arial', sans-serif;font-size:40px}.jumbotron.svelte-1mc1d54 p.svelte-1mc1d54{max-width:100%}.jumbotron.svelte-1mc1d54 p.svelte-1mc1d54:last-child{margin-bottom:0}.row.svelte-1mc1d54.svelte-1mc1d54{display:flex;flex-wrap:wrap;padding:0 4px;width:100%;margin:auto;max-width:400px}.column.svelte-1mc1d54.svelte-1mc1d54{flex:100%;max-width:100%;padding:0 10px 0 10px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let headline2 = doc.headline, projects2 = doc.projects;
  $$result.css.add(css);
  return `<section class="${"jumbotron svelte-1mc1d54"}"><h1 class="${"jumbotron-heading svelte-1mc1d54"}">${escape(headline2)}</h1>
    
    
    
    <div class="${"row svelte-1mc1d54"}"><div class="${"column svelte-1mc1d54"}">${each(projects2, (project, i) => {
    return `<p class="${"project svelte-1mc1d54"}" style="${"font-style:" + escape(project.section ? "italic" : "normal", true) + "; margin-top:" + escape(project.section && i > 0 ? "35px" : "0px", true)}"><span><!-- HTML_TAG_START -->${project.title}<!-- HTML_TAG_END --></span>
                </p>`;
  })}</div></div>

  </section>`;
});
export {
  Page as default
};
