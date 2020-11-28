<script>
  import axios from 'axios';
  import CatButton from './CatButton.svelte';
  import ImageDiv from './ImageDiv.svelte';

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

  const selectBreed = (e) => {
    currentBreed = e.target.value;
  };

  // to set one reactive variable
  $: console.log(catData);

  // to set more than one reactive variable
  $: {
    console.log(currentBreed);
  }
</script>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 75%;
    height: 600px;
    background-color: rgb(70, 70, 70);
    border-radius: 1em;
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
  }

  select:hover {
    background-color: rgba(30, 215, 96, 0.6);
  }

  select:active {
    background-color: rgba(30, 215, 96, 0.3);
  }
</style>

<main>
  {#if !catData.length}
    <CatButton {getCatData}>{buttonText}</CatButton>
  {/if}
  {#if catData.length}
    <ImageDiv breedId={currentBreed} />
    <!-- svelte-ignore a11y-no-onchange -->
    <select on:change={(e) => selectBreed(e)}>
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
</main>
