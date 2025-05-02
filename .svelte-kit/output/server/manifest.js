export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "app",
	appPath: "zachlevitt.github.io/app",
	assets: new Set([".DS_Store",".nojekyll","CNAME","favicon.ico","favicon.png","images/.DS_Store","images/afgh_resized.png","images/bitcoin_resized_smaller.png","images/blackfeet.png","images/carlisle_resized_smaller.png","images/cartogram.png","images/census2020_resized.png","images/cpcs_resized.png","images/disasters2021_resized.png","images/earthquake_resized.png","images/eaton-fire.jpg","images/ee_ss_resized.png","images/extreme-weather.jpg","images/federal-workforce.png","images/flood.png","images/gaza-displacement_resized.jpg","images/gulf-mexico.jpg","images/hosp-vax_resized.png","images/hurricane-ian-victims.jpg","images/immigrants_resized_smaller.png","images/joy-generator_resized.png","images/la-fire-damage_resized.jpg","images/monsoon_resized_smaller.png","images/native-schools.jpg","images/npr_hospitalizations.png","images/nyc-votes.jpg","images/power_resized.png","images/redlining_resized.png","images/reservoirs.png","images/santa-ana-winds.jpg","images/senior_project_summary_image_resized.png","images/smoke_resized.png","images/snow-winter.jpg","images/snow_resized_smaller.png","images/south_to_mexico_resized.png","images/summer-heat.jpg","images/ukraine-babyn-yar_resized_smaller.png","images/ukraine_bubbles_resized.png","images/ukraine_map_resized.png","images/university-funding_resized_smaller.png","images/urbanGrowth_resized.png","images/vaccineDaily.png","images/voting-groups.png","images/washington-gop.png","images/white-christmas.jpg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {start:"app/immutable/entry/start.D7Es8D2H.js",app:"app/immutable/entry/app.D8SrGxke.js",imports:["app/immutable/entry/start.D7Es8D2H.js","app/immutable/chunks/Cmfmd9x6.js","app/immutable/chunks/DExNXC0L.js","app/immutable/entry/app.D8SrGxke.js","app/immutable/chunks/DExNXC0L.js","app/immutable/chunks/DKvm-sTM.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		prerendered_routes: new Set(["/zachlevitt.github.io/","/zachlevitt.github.io/art"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
