import { c as create_ssr_component } from "../../../chunks/ssr.js";
const css = {
  code: ".jumbotron.svelte-3lfc58{font-family:'Helvetica', 'Arial', sans-serif;background-color:#ffffff;margin:auto;padding:0px;text-align:center;border-bottom:1px solid rgb(180, 180, 180);margin-bottom:25px}h1.jumbotron-heading.svelte-3lfc58{margin:25px 0px 25px 0px;font-family:'Helvetica', 'Arial', sans-serif;font-size:40px;font-weight:bold;color:#121212;text-decoration:none}.art-container.svelte-3lfc58{margin-top:20px}.art-gallery.svelte-3lfc58{margin-top:30px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="jumbotron svelte-3lfc58" data-svelte-h="svelte-57khr9"><h1 class="jumbotron-heading svelte-3lfc58">Art</h1></section> <div class="art-container svelte-3lfc58" data-svelte-h="svelte-mbvok7"><p class="bio-text">A selection of drawings, paintings, and digital/generative work. 
    <a href="/">Back to projects</a></p>  <div class="art-gallery svelte-3lfc58"> <p class="bio-text">Art gallery coming soon...</p></div> </div>`;
});
export {
  Page as default
};
