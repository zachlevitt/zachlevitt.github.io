

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["app/immutable/nodes/1.yqf6lNum.js","app/immutable/chunks/DExNXC0L.js","app/immutable/chunks/DKvm-sTM.js","app/immutable/chunks/D_sZ7TFb.js"];
export const stylesheets = [];
export const fonts = [];
