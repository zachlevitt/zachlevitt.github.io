<script>
  export let project;
</script>

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

<style>
  .project-card {
    width: 100%;
    max-width: 100%;
    background: #fff;
    border-radius: 0px;
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
    color: #121212;
    text-decoration: none;
  }

  /* .project-content a.project-title:hover {
    text-decoration: underline;
  } */

  .project-content p {
    font-size: 0.6rem;
    color: #666;
    margin: 0;
    text-transform: uppercase;
    font-weight: 100;
    letter-spacing: 0.5px;
  }
</style>
