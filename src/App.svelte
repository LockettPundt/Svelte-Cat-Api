<script>
  import MainPage from './MainPage.svelte';
  import darkMode from './darkModeStore';
  import { get } from 'svelte/store';

  let darkModeValue = get(darkMode);
  darkMode.subscribe((value) => (darkModeValue = value));
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
    transition: 0.4s ease-in-out;
  }
  .App.darkModeValue {
    background-color: rgb(70, 70, 70);
    transition: 0.4s ease-in-out;
  }
</style>

<div class="App" class:darkModeValue>
  <MainPage />
</div>
