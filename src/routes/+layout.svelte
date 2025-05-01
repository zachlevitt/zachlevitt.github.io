<script>
  // import '../style.css';
</script>

<div class="page-wrapper">
  <slot />
</div>

<style>
  :global(body) {
    font-family: 'Helvetica', 'Arial', sans-serif;
    margin: 0;
  }

  :global(.page-wrapper) {
    width: calc(100% - 40px);
    margin-left:20px;
    margin-right:20px;
    max-width: 1600px;
    margin: auto;
  }

  /* :global(a) {
    text-decoration: none;
    color: #737272;
    font-weight: 100;
  }

  :global(a:hover) {
    text-decoration: none;
    color: black;
    font-weight: 500;
  } */
</style> 