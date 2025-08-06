<script>
// @ts-nocheck

    import data from '../projects.js';
    
    $: projects = data.filter(item => item.include === 'true');

</script>

<section>
  <h1 class="heading">Zach Levitt</h1>
  <p class="bio-text">Hello, I'm currently making maps and interactive graphics at the <a href="https://www.nytimes.com/by/zach-levitt">New York Times</a>. Previously, I worked at the <a href="https://www.washingtonpost.com/people/zach-levitt/">Washington Post</a>, <a href="https://www.npr.org/people/966348865/zach-levitt" target="_blank">NPR</a> and the <a href="https://www.latimes.com/people/zach-levitt">Los Angeles Times</a>. I have a background in software development, cartographic design, geospatial analysis and data visualization.</p>
  <p class="bio-text">Please be in touch via levittzach [at] gmail</p>
  <p class="bio-text">Here are some selected stories I have worked on:</p>
</section>

{#if projects && projects.length > 0}
  <div class="projects-grid">
    {#each projects as project}
      <div class="project-card">
        {#if project.imageLink}
          <a href={project.toLink} target="_blank">
            <div class="project-image">
              <img src="images/{project.imageLink}" alt={project.title} />
            </div>
          </a>
        {:else}
        <a href={project.toLink}>
          <div class="project-image placeholder"></div>
        </a>
          
        {/if}
        <div class="project-content">
          <a class="project-title" href={project.toLink}>{project.title}</a>
          <p>{project.organization}</p>
        </div>
      </div>
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
    

    .projects-grid a {
      text-decoration: none;
    }

    .project-card {
        width: 100%;
        max-width: 100%;
        background: #fff;
        border-radius: 8px;
        overflow: hidden;
        transition: transform 0.2s ease-in-out;
        box-sizing: border-box;
    }

    .project-card:hover {
        transform: translateY(-4px);
    }

    .project-image {
        width: 100%;
        height: 200px;
        overflow: hidden;
    }

    .project-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .project-image.placeholder {
        background-color: #f5f5f5;
    }

    .project-content {
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
    }

    .project-content a.project-title {
        font-family: "EB Garamond", "Georgia", "Times New Roman", Times, serif;
        display: block;
        margin-bottom: 0.2rem;
        font-size: 1.0rem;
        line-height: 1.2;
        /* font-weight: 600; */
        color: #121212;
    }

    .project-content p {
        font-size: 0.6rem;
        color: #666;
        margin: 0;
        text-transform: uppercase;
        font-weight: 100;
        letter-spacing: 0.5px;
    }

    
</style>
