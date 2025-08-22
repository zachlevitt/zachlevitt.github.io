

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["app/immutable/nodes/2._jcH7e6y.js","app/immutable/chunks/BukE7bu8.js","app/immutable/chunks/Cwb68jx0.js"];
export const stylesheets = ["app/immutable/assets/2.XtaoXJFi.css"];
export const fonts = [];
