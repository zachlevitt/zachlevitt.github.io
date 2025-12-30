import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["app/immutable/nodes/0.UhGk4ZAB.js","app/immutable/chunks/BukE7bu8.js","app/immutable/chunks/Cwb68jx0.js"];
export const stylesheets = ["app/immutable/assets/0.DBFTIPdn.css"];
export const fonts = [];
