export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "app",
	appPath: "zachlevitt.github.io/app",
	assets: new Set([".DS_Store",".nojekyll","CNAME","favicon.ico","favicon.png","images/.DS_Store","images/afgh.png","images/bitcoin.png","images/blackfeet.png","images/carlisle.png","images/cartogram.png","images/census2020.png","images/cpcs.png","images/disasters2021.png","images/earthquake.png","images/eaton-fire.jpg","images/ee_ss.png","images/extreme-weather.jpg","images/federal-workforce.png","images/flood.png","images/gaza-displacement.jpg","images/gulf-mexico.jpg","images/hosp-vax.png","images/hurricane-ian-victims.jpg","images/immigrants.png","images/joy-generator.png","images/la-fire-damage.jpg","images/monsoon.jpg","images/monsoon.png","images/native-schools.jpg","images/npr_hospitalizations.png","images/nyc-votes.jpg","images/power.png","images/redlining.png","images/reservoirs.png","images/santa-ana-winds.jpg","images/senior_project_summary_image.png","images/smoke.png","images/snow-winter.jpg","images/snow.png","images/south_to_mexico.png","images/summer-heat.jpg","images/ukraine-babyn-yar.png","images/ukraine_bubbles.png","images/ukraine_map.png","images/university-funding.png","images/urbanGrowth.png","images/vaccineDaily.png","images/voting-groups.png","images/washington-gop.png","images/white-christmas.jpg","images/writing.png"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {start:"app/immutable/entry/start.CzogKCFq.js",app:"app/immutable/entry/app.CgdVCa7N.js",imports:["app/immutable/entry/start.CzogKCFq.js","app/immutable/chunks/BQK_htk1.js","app/immutable/chunks/DExNXC0L.js","app/immutable/entry/app.CgdVCa7N.js","app/immutable/chunks/DExNXC0L.js","app/immutable/chunks/DKvm-sTM.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/art",
				pattern: /^\/art\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
