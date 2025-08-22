

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["app/immutable/nodes/1.BXPt0xke.js","app/immutable/chunks/BukE7bu8.js","app/immutable/chunks/Cwb68jx0.js","app/immutable/chunks/DDQrYpFA.js"];
export const stylesheets = [];
export const fonts = [];
