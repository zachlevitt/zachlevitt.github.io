import { c as create_ssr_component } from "../../chunks/ssr.js";
const css = {
  code: "body{font-family:'Helvetica', 'Arial', sans-serif;margin:0}.page-wrapper{width:calc(100% - 40px);margin-left:20px;margin-right:20px;max-width:1600px;margin:auto}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="page-wrapper">${slots.default ? slots.default({}) : ``} </div>`;
});
export {
  Layout as default
};
