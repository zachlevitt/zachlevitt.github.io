<script>
// @ts-nocheck

    //node scripts/doc-to-archieml.js
    import doc from '../doc.json';

    let menu = doc.menu,
        headline = doc.headline,
        projects = doc.projects;

</script>
<section class="jumbotron">

    <h1 class="jumbotron-heading">{headline}</h1>
    
    <!-- {#each menu as item}
        <p class="menu">
            <span>{@html item.value}</span>
        </p>
    {/each} -->
    
    <div class="row"> 
        <div class="column">
            {#each projects as project, i}
                <p class="project" style="font-style:{project.section ? 'italic' : 'normal' }; margin-top:{project.section && i > 0 ? '35px' : '0px' }">
                    <span>{@html project.title}</span>
                </p>
            {/each}
        </div>
    </div>

  </section>

<style>
    .jumbotron {
        font-family: 'Helvetica', 'Arial', sans-serif;
    }

    :global(a) {
        text-decoration:none!important;
        color: #737272!important;
        font-weight:100!important;
    }

    :global(a:hover) {
        text-decoration:none!important;
        color: black!important;
        font-weight:500!important;
    }

.project {
    text-align:left!important;
}

.jumbotron {
  width: 95%;
  font-family: 'Helvetica', 'Arial', sans-serif;
  max-width: 400px;
  background-color: #ffffff;
  margin: auto;
  margin-bottom: 20px;
  padding: 0px;
  text-align: center;
  margin-top: 25px;
}

h1.jumbotron-heading {
  margin-top: 25px;
    margin-bottom: 25px;
    font-family: 'Helvetica', 'Arial', sans-serif;
    font-size:40px;
}


.jumbotron p {
  max-width: 100%;
}

.jumbotron p:last-child {
  margin-bottom: 0;
}




.row {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
  width: 100%;
  margin: auto;
  max-width:400px;
}


/* Create four equal columns that sits next to each other */
.column {
  flex: 100%;
  max-width: 100%;
  padding: 0 10px 0 10px;
}


</style>