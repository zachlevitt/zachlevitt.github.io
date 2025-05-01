import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["app/immutable/nodes/0.DUopslY_.js","app/immutable/chunks/DExNXC0L.js","app/immutable/chunks/DKvm-sTM.js"];
export const stylesheets = ["app/immutable/assets/0.DGar18N4.css"];
export const fonts = [];
