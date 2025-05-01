

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/art/_page.svelte.js')).default;
export const imports = ["app/immutable/nodes/3.D7ytokoS.js","app/immutable/chunks/DExNXC0L.js","app/immutable/chunks/DKvm-sTM.js"];
export const stylesheets = ["app/immutable/assets/3.CtO4eJto.css"];
export const fonts = [];
