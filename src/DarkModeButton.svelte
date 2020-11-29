<script>
  import darkMode from './darkModeStore';
  import { get } from 'svelte/store';

  let darkModeValue = get(darkMode);

  $: console.log(darkModeValue);

  darkMode.subscribe((value) => (darkModeValue = value));

  const toggleMode = () => {
    darkMode.update((existing) => !existing);
  };
</script>

<style>
  button {
    background: none;
    border: none;
    outline: none;
    margin: 15px;
  }

  div {
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
  }

  i:hover {
    color: rgba(30, 215, 96, 0.6);
  }

  i:active {
    color: rgba(30, 215, 96, 0.3);
  }

  i {
    color: rgb(30, 215, 96);
    transition: 0.4s ease-in-out;
  }

  i.darkModeValue {
    color: rgb(28, 28, 28);
    transition: color 0.4s ease-in-out;
  }
</style>

<div>
  <button type="button" on:click={toggleMode}><i
      class="fas fa-cat fa-5x"
      class:darkModeValue /></button>
</div>
