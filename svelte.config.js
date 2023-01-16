import adapter from "@sveltejs/adapter-static"; 
// was "@sveltejs/adapter-auto"

const dev = "production" === "development";

/** @type {import(""@sveltejs/kit").Config} */
const config = {
    kit: {
        adapter: adapter(),
        paths: {
            base: process.env.NODE_ENV === "production" ? "/zachlevitt.github.io" : "",
        },
    }
};

export default config;