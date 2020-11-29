<script>
  export let getCatData;
  import darkMode from './darkModeStore';
  import { get } from 'svelte/store';

  let darkModeValue = get(darkMode);

  darkMode.subscribe((value) => (darkModeValue = value));
</script>

<style>
  button {
    font-family: inherit;
    font-size: inherit;
    padding: 1em 2em;
    font-size: 1.3em;
    font-weight: 900;
    color: rgb(28, 28, 28);
    background-color: rgb(30, 215, 96);
    border-radius: 2em;
    border: none;
    outline: none;
    width: 200px;
    font-variant-numeric: tabular-nums;
    transition: 0.4s ease-in-out;
  }

  button:hover {
    background-color: rgba(30, 215, 96, 0.6);
  }

  button:active {
    background-color: rgba(30, 215, 96, 0.3);
  }

  button.darkModeValue {
    background-color: rgb(28, 28, 28);
    color: rgb(30, 215, 96);
    transition: 0.4s ease-in-out;
  }

  @media screen and (max-width: 300px) {
    button {
      width: inherit;
    }
  }
</style>

<button on:click={getCatData} class:darkModeValue>
  <slot />
</button>
