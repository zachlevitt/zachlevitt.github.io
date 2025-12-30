import { c as create_ssr_component, d as add_attribute, e as escape, f as each, v as validate_component } from "../../chunks/ssr.js";
const data = [
  {
    title: "The Complex Deportation Network Behind Trump’s Immigration Crackdown",
    toLink: "https://www.nytimes.com/interactive/2025/12/22/us/trump-immigration-deportation-network-ice-arrests.html",
    include: "true",
    organization: "New York Times",
    imageLink: "ice.jpg"
  },
  {
    title: "The Real-World Costs of the Digital Race for Bitcoin",
    toLink: "https://www.nytimes.com/2023/04/09/business/bitcoin-mining-electricity-pollution.html",
    include: "true",
    organization: "New York Times",
    imageLink: "bitcoin_resized_smaller.png"
  },
  {
    title: "'War Against the Children'",
    toLink: "https://www.nytimes.com/interactive/2023/08/30/us/native-american-boarding-schools.html",
    include: "true",
    organization: "New York Times",
    imageLink: "carlisle_resized_smaller.png"
  },
  {
    imageLink: "disasters2021_resized.png",
    toLink: "https://www.washingtonpost.com/nation/interactive/2021/weather-disasters-2021/",
    title: "Cold, heat, fires, hurricanes and tornadoes: The year in weather disasters",
    organization: "Washington Post",
    tools: "JavaScript (React), HTML/CSS, QGIS, Illustrator, GDAL, ffmpeg",
    include: "true"
  },
  {
    imageLink: "urbanGrowth_resized.png",
    toLink: "https://www.washingtonpost.com/nation/interactive/2021/land-development-urban-growth-maps/",
    title: "Where America's developed areas are growing",
    organization: "Washington Post",
    tools: "Mapbox, ai2html, HTML/CSS, JavaScript, React, QGIS",
    include: "true"
  },
  {
    title: "How Louisiana Built Trump’s Busiest Deportation Hub",
    toLink: "https://www.nytimes.com/interactive/2025/07/31/us/ice-deportation-hub-alexandria-louisiana.html",
    include: "true",
    organization: "New York Times",
    imageLink: "louisiana.jpg"
  },
  {
    title: "Mapping the Damage in Altadena and Pacific Palisades",
    toLink: "https://www.nytimes.com/interactive/2025/01/09/us/la-wildfires-damage-photos-map.html",
    include: "true",
    organization: "New York Times",
    imageLink: "la-fire-damage_resized.jpg"
  },
  {
    title: "The Monsoon Is Becoming More Extreme",
    toLink: "https://www.nytimes.com/interactive/2022/10/04/climate/south-asia-monsoon-climate-change.html",
    include: "true",
    organization: "New York Times",
    imageLink: "monsoon_resized_smaller.png"
  },
  {
    title: "Extreme Weather Maps: Track the Risks for Your Places",
    toLink: "https://www.nytimes.com/interactive/2023/us/extreme-weather-forecast-maps.html",
    include: "true",
    organization: "New York Times",
    imageLink: "extreme-weather.jpg"
  },
  {
    title: "Where Federal Dollars Flow to Universities Around the Country",
    toLink: "https://www.nytimes.com/interactive/2025/04/30/us/university-funding-research.html",
    include: "true",
    organization: "New York Times",
    imageLink: "university-funding_resized_smaller.png"
  },
  {
    title: "These Maps Show Federal Employees Work in Every Corner of America",
    toLink: "https://www.nytimes.com/interactive/2025/04/20/us/politics/federal-workers-america-map.html",
    include: "true",
    organization: "New York Times",
    imageLink: "federal-workforce.png"
  },
  {
    title: "Who Controls the Gulf of Mexico?",
    toLink: "https://www.nytimes.com/interactive/2025/02/13/world/americas/gulf-mexico-trump.html",
    include: "false",
    organization: "New York Times",
    imageLink: "gulf-mexico.jpg"
  },
  {
    title: "New Data Shows Major Electrical Disruption Ahead of Eaton Fire",
    toLink: "https://www.nytimes.com/interactive/2025/01/29/business/energy-environment/eaton-fire-electrical-faults-southern-california-edison.html",
    include: "false",
    organization: "New York Times",
    imageLink: "eaton-fire.jpg"
  },
  {
    title: "These Are the Winds That Turn Wildfires Deadly in L.A.",
    toLink: "https://www.nytimes.com/interactive/2025/01/29/climate/santa-ana-winds-fire-risk.html",
    include: "false",
    organization: "New York Times",
    imageLink: "santa-ana-winds.jpg"
  },
  {
    title: "Did Republicans Take Washington in a Landslide? Not So Much",
    toLink: "https://www.nytimes.com/interactive/2025/01/16/us/politics/2024-election-washington-gop.html",
    include: "true",
    organization: "New York Times",
    imageLink: "washington-gop.png"
  },
  {
    title: "Trump Gained 95,000 Votes in New York City. Democrats Lost Half a Million.",
    toLink: "https://www.nytimes.com/interactive/2024/11/22/us/elections/nyc-harris-trump-votes.html",
    include: "true",
    organization: "New York Times",
    imageLink: "nyc-votes.jpg"
  },
  {
    title: "See the Voting Groups That Swung to the Right in the 2024 Vote",
    toLink: "https://www.nytimes.com/interactive/2024/11/06/us/elections/trump-america-red-shift-victory.html",
    include: "true",
    organization: "New York Times",
    imageLink: "voting-groups.png"
  },
  {
    title: "What Visual and Audio Evidence Reveals About the Air India Crash",
    toLink: "https://www.nytimes.com/interactive/2025/06/27/world/asia/air-india-crash-cause.html",
    include: "true",
    organization: "New York Times",
    imageLink: "air-india.jpg"
  },
  {
    title: "What the Scale of Displacement in Gaza Looks Like",
    toLink: "https://www.nytimes.com/interactive/2023/12/02/world/middleeast/gaza-map-displaced-people.html",
    include: "false",
    organization: "New York Times",
    imageLink: "gaza-displacement_resized.jpg"
  },
  {
    title: "Where This Summer Was Relentlessly Hot",
    toLink: "https://www.nytimes.com/interactive/2023/10/09/world/hottest-summer-global-map.html",
    include: "true",
    organization: "New York Times",
    imageLink: "summer-heat.jpg"
  },
  {
    title: "Why the West Got Buried in Snow, While the East Got Little",
    toLink: "https://www.nytimes.com/interactive/2023/04/12/us/snow-winter-2023.html",
    include: "true",
    organization: "New York Times",
    imageLink: "snow-winter.jpg"
  },
  {
    title: "Tracking the California Storms",
    toLink: "https://www.nytimes.com/article/california-storm-maps-weather-rain.html",
    include: "false",
    organization: "New York Times"
  },
  {
    title: "Will You Have a White Christmas This Year?",
    toLink: "https://www.nytimes.com/interactive/2025/12/22/weather/white-christmas-forecast-2025.html",
    include: "true",
    organization: "New York Times",
    imageLink: "snow_resized_smaller.png"
  },
  {
    title: "Vulnerable and Trapped: A Look at Those Lost in Hurricane Ian",
    toLink: "https://www.nytimes.com/interactive/2022/10/22/us/hurricane-ian-florida-victims.html",
    include: "false",
    organization: "The New York Times",
    imageLink: "hurricane-ian-victims.jpg",
    date: "Oct 22, 2022"
  },
  {
    title: "Why So Many Children of Immigrants Rise to the Top",
    toLink: "https://www.nytimes.com/interactive/2022/07/11/opinion/immigrants-success-america.html",
    include: "true",
    organization: "New York Times",
    imageLink: "immigrants_resized_smaller.png"
  },
  {
    title: "Who Will Remember the Horrors of Ukraine?",
    toLink: "https://www.nytimes.com/interactive/2022/06/13/opinion/ukraine-russia-babyn-yar.html",
    include: "true",
    organization: "New York Times",
    imageLink: "ukraine-babyn-yar_resized_smaller.png"
  },
  {
    imageLink: "afgh_resized.png",
    toLink: "https://www.nytimes.com/interactive/2022/04/12/opinion/taliban-afghanistan-revenge.html",
    title: "The Taliban Promised Them Amnesty. Then They Executed Them.",
    organization: "New York Times",
    tools: "JavaScript, D3, ai2html, QGIS",
    include: "false"
  },
  {
    imageLink: "cpcs_resized.png",
    toLink: "https://www.nytimes.com/interactive/2022/05/12/opinion/crisis-pregnancy-centers-roe.html",
    title: "Pregnant? Need Help? They Have an Agenda.",
    organization: "New York Times",
    tools: "HTML/CSS, JavaScript, Svelte, QGIS, Illustrator, Mapshaper",
    include: "true"
  },
  {
    imageLink: "census2020_resized.png",
    toLink: "https://www.washingtonpost.com/nation/interactive/2021/census-maps-race-population-demographics/",
    title: "Mapping America's racial population shifts over the last decade",
    organization: "Washington Post",
    tools: "D3, HTML/CSS, JavaScript, React, QGIS",
    include: "true"
  },
  {
    imageLink: "hosp-vax_resized.png",
    toLink: "https://www.washingtonpost.com/health/2021/09/23/covid-vaccination-hospitalization-map/",
    title: "Mapping America's hospitalization and vaccination divide",
    organization: "Washington Post",
    tools: "QGIS, Illustrator, ai2html",
    include: "true"
  },
  {
    imageLink: "reservoirs.png",
    toLink: "https://www.washingtonpost.com/weather/2021/07/09/western-reservoirs-drought-california-nevada/",
    title: "Reservoirs are drying up as consequences of the Western drought worsen",
    organization: "Washington Post",
    tools: "Illustrator, ai2html, QGIS",
    include: "true"
  },
  {
    imageLink: "smoke_resized.png",
    toLink: "https://www.washingtonpost.com/nation/2021/08/26/wildfires-smoke-air-quality-pollution/",
    title: "Here's what to know as a summer of wildfires prompts air-quality alerts across the West",
    organization: "Washington Post",
    tools: "ai2html, HTML/CSS, Illustrator, QGIS",
    include: "true"
  },
  {
    imageLink: "joy-generator_resized.png",
    toLink: "https://apps.npr.org/joy-generator/",
    title: "Joy Generator",
    organization: "NPR",
    tools: "JavaScript, React, Illustrator, Figma",
    include: "false"
  },
  {
    imageLink: "flood_resized.png",
    toLink: "https://www.npr.org/2021/02/22/966428165/a-looming-disaster-new-data-reveal-where-flood-damage-is-an-existential-threat",
    title: "A Looming Disaster: New Data Reveal Where Flood Damage Is An Existential Threat",
    organization: "NPR",
    tools: "JavaScript (D3)",
    include: "false"
  },
  {
    imageLink: "cartogram.png",
    toLink: "https://www.npr.org/2021/04/26/983082132/census-to-release-1st-results-that-shift-electoral-college-house-seats",
    title: "Here's How The First 2020 Census Results Changed Electoral College, House Seats",
    organization: "NPR",
    tools: "JavaScript (D3), Illustrator",
    include: "true"
  },
  {
    imageLink: "vaccineDaily.png",
    toLink: "https://www.npr.org/sections/health-shots/2021/01/28/960901166/how-is-the-covid-19-vaccination-campaign-going-in-your-state",
    title: "COVID-19 Vaccine Tracker",
    organization: "NPR",
    tools: "JavaScript, D3, Python",
    include: "true"
  },
  {
    imageLink: "npr_hospitalizations.png",
    toLink: "https://www.npr.org/sections/health-shots/2020/12/09/944379919/new-data-reveal-which-hospitals-are-dangerously-full-is-yours",
    title: "COVID-19 Hospital Capacity Tracker",
    organization: "NPR",
    tools: "JavaScript, D3, Python",
    include: "true"
  },
  {
    imageLink: "power_resized.png",
    toLink: "https://www.latimes.com/projects/la-fi-power-companies-ranked-climate-change/",
    title: "Which power companies are the worst polluters?",
    organization: "Los Angeles Times",
    tools: "Illustrator, HTML/CSS, JavaScript",
    include: "false"
  },
  {
    imageLink: "earthquake_resized.png",
    toLink: "https://www.latimes.com/projects/california-earthquake-fault-map/",
    title: "What would a powerful earthquake feel like where you live?",
    organization: "Los Angeles Times",
    tools: "Mapbox, JavaScript, HTML/CSS, QGIS, Illustrator, Mapshaper",
    include: "true"
  }
];
const css$1 = {
  code: '.project-card.svelte-qa1zds.svelte-qa1zds{width:100%;max-width:100%;background:#fff;border-radius:0px;overflow:hidden;transition:transform 0.2s ease-in-out;box-sizing:border-box}.project-card.svelte-qa1zds.svelte-qa1zds:hover{transform:translateY(-4px)}.project-image.svelte-qa1zds.svelte-qa1zds{width:100%;height:200px;overflow:hidden}.project-image.svelte-qa1zds img.svelte-qa1zds{width:100%;height:100%;object-fit:cover}.project-image.placeholder.svelte-qa1zds.svelte-qa1zds{background-color:#f5f5f5}.project-content.svelte-qa1zds.svelte-qa1zds{padding-top:0.5rem;padding-bottom:0.5rem}.project-content.svelte-qa1zds a.project-title.svelte-qa1zds{font-family:"EB Garamond", "Georgia", "Times New Roman", Times, serif;display:block;margin-bottom:0.2rem;font-size:1.0rem;line-height:1.2;color:#121212;text-decoration:none}.project-content.svelte-qa1zds p.svelte-qa1zds{font-size:0.6rem;color:#666;margin:0;text-transform:uppercase;font-weight:100;letter-spacing:0.5px}',
  map: null
};
const Project = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { project } = $$props;
  if ($$props.project === void 0 && $$bindings.project && project !== void 0) $$bindings.project(project);
  $$result.css.add(css$1);
  return `<div class="project-card svelte-qa1zds">${project.imageLink ? `<a${add_attribute("href", project.toLink, 0)} target="_blank"><div class="project-image svelte-qa1zds"><img src="${"images/" + escape(project.imageLink, true)}"${add_attribute("alt", project.title, 0)} class="svelte-qa1zds"></div></a>` : `<a${add_attribute("href", project.toLink, 0)}><div class="project-image placeholder svelte-qa1zds"></div></a>`} <div class="project-content svelte-qa1zds"><a class="project-title svelte-qa1zds"${add_attribute("href", project.toLink, 0)}>${escape(project.title)}</a> <p class="svelte-qa1zds">${escape(project.organization)}</p></div> </div>`;
});
const css = {
  code: "section.svelte-18awyhp.svelte-18awyhp{font-family:'Helvetica', 'Arial', sans-serif;background-color:#ffffff;margin:auto;max-width:600px;width:100%;margin-top:25px;margin-bottom:25px}h1.svelte-18awyhp.svelte-18awyhp{margin:0px 0px 25px 0px;font-family:'Helvetica', 'Arial', sans-serif;font-size:2.8rem;font-weight:bold;color:#121212;text-decoration:none;text-align:center;padding-bottom:25px;border-bottom:1px solid rgb(180, 180, 180)}.bio-text.svelte-18awyhp.svelte-18awyhp{font-family:'EB Garamond', 'Georgia', 'Times New Roman', Times, serif;color:#121212;font-size:1.2rem;line-height:1.6;text-align:left;font-weight:100}.bio-text.svelte-18awyhp a.svelte-18awyhp{text-decoration:underline!important;text-decoration-thickness:0.5px!important;text-underline-offset:2px!important;color:#121212!important;font-weight:100!important}a:hover{color:black!important}.projects-grid.svelte-18awyhp.svelte-18awyhp{display:grid;grid-template-columns:1fr;gap:1rem;width:100%;max-width:1600px;justify-content:center}@media(min-width: 500px){.projects-grid.svelte-18awyhp.svelte-18awyhp{grid-template-columns:repeat(auto-fill, minmax(200px, 300px))}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let projects;
  $$result.css.add(css);
  projects = data.filter((item) => item.include === "true");
  return `<section class="svelte-18awyhp" data-svelte-h="svelte-14gsyl8"><h1 class="heading svelte-18awyhp">Zach Levitt</h1> <p class="bio-text svelte-18awyhp">Hello, I&#39;m currently making maps and interactive graphics at the <a href="https://www.nytimes.com/by/zach-levitt" class="svelte-18awyhp">New York Times</a>. Previously, I worked at the <a href="https://www.washingtonpost.com/people/zach-levitt/" class="svelte-18awyhp">Washington Post</a>, <a href="https://www.npr.org/people/966348865/zach-levitt" target="_blank" class="svelte-18awyhp">NPR</a> and the <a href="https://www.latimes.com/people/zach-levitt" class="svelte-18awyhp">Los Angeles Times</a>.</p> <p class="bio-text svelte-18awyhp">I have a background in software development, cartographic design, geospatial analysis and data visualization, in addition to oil painting, figure drawing and creative coding.</p> <p class="bio-text svelte-18awyhp">Please be in touch via levittzach [at] gmail.</p> <p class="bio-text svelte-18awyhp">Here are some selected projects I have worked on:</p></section> ${projects && projects.length > 0 ? `<div class="projects-grid svelte-18awyhp">${each(projects, (project) => {
    return `${validate_component(Project, "Project").$$render($$result, { project }, {}, {})}`;
  })}</div>` : ``}`;
});
export {
  Page as default
};
