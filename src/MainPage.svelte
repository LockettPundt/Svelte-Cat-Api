<script>
  import axios from 'axios';
  import CatButton from './CatButton.svelte';
  import DarkModeButton from './DarkModeButton.svelte';
  import ImageDiv from './ImageDiv.svelte';
  import darkMode from './darkModeStore';
  import { get } from 'svelte/store';

  let darkModeValue = get(darkMode);

  darkMode.subscribe((value) => (darkModeValue = value));

  const buttonText = 'Cats!';
  const API_KEY = '11765b01-2516-4db9-8e2a-2083dc6938d7';
  const catBreedsUrl = `https://api.thecatapi.com/v1/breeds`;
  let catData = [];

  const getCatData = async () => {
    const data = await axios.get(catBreedsUrl, {
      method: 'GET',
      headers: {
        'x-api-key': API_KEY,
      },
    });
    const res = data.data;
    catData = res;
  };
  let currentBreed;

  // to set one reactive variable
  $: console.log(catData);

  // to set more than one reactive variable
  $: {
    console.log(currentBreed);
  }
</script>

<style>
  main {
    width: 75%;
    height: 600px;
    background-color: rgb(70, 70, 70);
    border-radius: 1em;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px 0px, rgba(0, 0, 0, 0.3) 0px 6px 20px 0px;
    transition: 0.4s ease-in-out;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 1em;
    width: 100%;
    height: 100%;
  }

  main.darkModeValue {
    background-color: rgba(30, 215, 96, 0.8);
    transition: 0.4s ease-in-out;
  }

  select {
    color: rgb(28, 28, 28);
    background-color: rgba(30, 215, 96, 0.8);
    border: none;
    border-radius: 2em;
    padding: 1em 1em;
    font-size: 1.1em;
    font-weight: 900;
    outline: none;
    width: fit-content;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    transition: 0.4s ease-in-out;
  }

  select.darkModeValue {
    background-color: rgb(28, 28, 28);
    color: rgb(30, 215, 96);
    transition: 0.4s ease-in-out;
  }
</style>

<main class:darkModeValue>
  <DarkModeButton />
  <div>
    {#if !catData.length}
      <CatButton {getCatData}>{buttonText}</CatButton>
    {/if}
    {#if catData.length}
      <ImageDiv breedId={currentBreed} />
      <!-- binds the variable to the value selected -->
      <select bind:value={currentBreed} class:darkModeValue>
        <!-- 2 ways to do this... -->
        {#each catData as { name, id }, i}
          {#if i === 0}
            <option value={null}>Select A Breed</option>
            <option value={id}>{name}</option>
          {:else}
            <option value={id}>{name}</option>
          {/if}
        {/each}

        <!-- {@html catData.map((x, i) => `<option value=${x.id}>${x.name}</option>`).join()} -->
      </select>
    {/if}
  </div>
</main>
