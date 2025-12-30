<script>
// @ts-nocheck

    import data from '../projects.js';
    import Project from '../lib/Project.svelte';
    
    $: projects = data.filter(item => item.include === 'true');

</script>

<section>
  <h1 class="heading">Zach Levitt</h1>
  <p class="bio-text">Hello, I'm currently making maps and interactive graphics at the <a href="https://www.nytimes.com/by/zach-levitt">New York Times</a>. Previously, I worked at the <a href="https://www.washingtonpost.com/people/zach-levitt/">Washington Post</a>, <a href="https://www.npr.org/people/966348865/zach-levitt" target="_blank">NPR</a> and the <a href="https://www.latimes.com/people/zach-levitt">Los Angeles Times</a>.</p>
  <p class="bio-text">I have a background in software development, cartographic design, geospatial analysis and data visualization, in addition to oil painting, figure drawing and creative coding.</p>
  <p class="bio-text">Please be in touch via levittzach [at] gmail.</p>
  <p class="bio-text">Here are some selected projects I have worked on:</p>
</section>

{#if projects && projects.length > 0}
  <div class="projects-grid">
    {#each projects as project}
      <Project {project} />
    {/each}
  </div>
{/if}


<style>
    section {
        font-family: 'Helvetica', 'Arial', sans-serif;
        background-color: #ffffff;
        margin: auto;
        max-width: 600px;
        width:100%;
        margin-top:25px;
        margin-bottom:25px;
    }

    h1 {
        margin: 0px 0px 25px 0px;
        font-family: 'Helvetica', 'Arial', sans-serif;
        font-size: 2.8rem;
        font-weight: bold;
        color: #121212;
        text-decoration: none;
        text-align: center;
        padding-bottom:25px;
        border-bottom: 1px solid rgb(180, 180, 180);
    }


    .bio-text {
        font-family: 'EB Garamond', 'Georgia', 'Times New Roman', Times, serif;
        color: #121212;
        font-size: 1.2rem;
        line-height: 1.6;
        text-align: left;
        font-weight: 100;
    }

    .bio-text a {
        text-decoration:underline!important;
        text-decoration-thickness: 0.5px!important;
        text-underline-offset: 2px!important;
        color: #121212!important;
        font-weight:100!important;
    }

    :global(a:hover) {
        color: black!important;
    }

    .projects-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;
        width: 100%;
        max-width: 1600px;
        justify-content: center;
    }

    @media (min-width: 500px) {
        .projects-grid {
            grid-template-columns: repeat(auto-fill, minmax(200px, 300px));
        }
    }
    

    /* .projects-grid a {
      text-decoration: none;
    } */

    
</style>
