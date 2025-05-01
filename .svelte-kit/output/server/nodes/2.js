

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["app/immutable/nodes/2.y0PY5Tcg.js","app/immutable/chunks/DExNXC0L.js","app/immutable/chunks/DKvm-sTM.js"];
export const stylesheets = ["app/immutable/assets/2.Bf8VV53a.css"];
export const fonts = [];
