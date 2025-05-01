// Project data
const data = [
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
        title: "Mapping the Damage in Altadena and Pacific Palisades",
        toLink: "https://www.nytimes.com/interactive/2025/01/09/us/la-wildfires-damage-photos-map.html",
        include: "true",
        organization: "New York Times",
        imageLink: "la-fire-damage_resized.jpg"
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
        title: "What the Scale of Displacement in Gaza Looks Like",
        toLink: "https://www.nytimes.com/interactive/2023/12/02/world/middleeast/gaza-map-displaced-people.html",
        include: "false",
        organization: "New York Times",
        imageLink: "gaza-displacement_resized.jpg"
    },
    {
        title: "'War Against the Children'",
        toLink: "https://www.nytimes.com/interactive/2023/08/30/us/native-american-boarding-schools.html",
        include: "true",
        organization: "New York Times",
        imageLink: "carlisle_resized_smaller.png"
    },
    {
        title: "Where This Summer Was Relentlessly Hot",
        toLink: "https://www.nytimes.com/interactive/2023/10/09/world/hottest-summer-global-map.html",
        include: "true",
        organization: "New York Times",
        imageLink: "summer-heat.jpg"
    },
    {
        title: "Extreme Weather Maps: Track the Risks for Your Places",
        toLink: "https://www.nytimes.com/interactive/2023/us/extreme-weather-forecast-maps.html",
        include: "true",
        organization: "New York Times",
        imageLink: "extreme-weather.jpg"
    },
    {
        title: "Why the West Got Buried in Snow, While the East Got Little",
        toLink: "https://www.nytimes.com/interactive/2023/04/12/us/snow-winter-2023.html",
        include: "true",
        organization: "New York Times",
        imageLink: "snow-winter.jpg"
    },
    {
        title: "The Real-World Costs of the Digital Race for Bitcoin",
        toLink: "https://www.nytimes.com/2023/04/09/business/bitcoin-mining-electricity-pollution.html",
        include: "true",
        organization: "New York Times",
        imageLink: "bitcoin_resized_smaller.png"
    },
    {
        title: "Tracking the California Storms",
        toLink: "https://www.nytimes.com/article/california-storm-maps-weather-rain.html",
        include: "false",
        organization: "New York Times"
    },
    {
        title: "Will You Have a White Christmas This Year?",
        toLink: "https://www.nytimes.com/interactive/2022/12/22/us/white-christmas.html",
        include: "true",
        organization: "New York Times",
        imageLink: "snow_resized_smaller.png"
    },
    {
        title: "The Monsoon Is Becoming More Extreme",
        toLink: "https://www.nytimes.com/interactive/2022/10/04/climate/south-asia-monsoon-climate-change.html",
        include: "true",
        organization: "New York Times",
        imageLink: "monsoon_resized_smaller.png"
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
        imageLink: "disasters2021_resized.png",
        toLink: "https://www.washingtonpost.com/nation/interactive/2021/weather-disasters-2021/",
        title: "Cold, heat, fires, hurricanes and tornadoes: The year in weather disasters",
        organization: "Washington Post",
        tools: "JavaScript (React), HTML/CSS, QGIS, Illustrator, GDAL, ffmpeg",
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
        imageLink: "urbanGrowth_resized.png",
        toLink: "https://www.washingtonpost.com/nation/interactive/2021/land-development-urban-growth-maps/",
        title: "Where America's developed areas are growing",
        organization: "Washington Post",
        tools: "Mapbox, ai2html, HTML/CSS, JavaScript, React, QGIS",
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

export default data; 