export const manifest = {
	appDir: "_app",
	appPath: "zachlevitt.github.io/_app",
	assets: new Set([".nojekyll","CNAME","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-4a076ec5.js","imports":["_app/immutable/start-4a076ec5.js","_app/immutable/chunks/index-b2c91288.js","_app/immutable/chunks/singletons-bdea7335.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
