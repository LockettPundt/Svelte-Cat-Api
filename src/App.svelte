<script>
  import MainPage from './MainPage.svelte';
</script>

<style>
  :global(body) {
    margin: 0;
    font-family: Helvetica, sans-serif;
  }
  .App {
    display: flex;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgb(28, 28, 28);
  }
</style>

<div class="App">
  <MainPage />
</div>
