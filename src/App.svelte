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
    box-sizing: border-box;
    font-family: 'Apercu', Helvetica, sans-serif;
    background-color: rgb(28, 28, 28);
  }

  @font-face {
    font-family: 'Apercu';
    font-style: normal;
    font-weight: 500;
    src: url('./apercu_regular-webfont.woff');
  }

  .App {
    height: 100vh;
    display: flex;
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
