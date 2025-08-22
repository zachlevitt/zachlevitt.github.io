

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/art/_page.svelte.js')).default;
export const imports = ["app/immutable/nodes/3.Dl8xeDjO.js","app/immutable/chunks/BukE7bu8.js","app/immutable/chunks/Cwb68jx0.js"];
export const stylesheets = ["app/immutable/assets/3.CtO4eJto.css"];
export const fonts = [];
