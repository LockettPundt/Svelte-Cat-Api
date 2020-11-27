<script>
  import axios from 'axios';
  import CatButton from './CatButton.svelte';

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

  $: console.log(catData);
</script>

<style>
  main {
    margin: auto;
    width: 75%;
    height: 600px;
    background-color: aquamarine;
  }
</style>

<main>
  {#if !catData.length}
    <CatButton {getCatData}>{buttonText}</CatButton>
  {/if}
  {#if catData.length}
    <select>
      <!-- 2 ways to do this... -->
      {#each catData as { name, id }}
        <option value={id}>{name}</option>
      {/each}

      <!-- {@html catData.map((x, i) => `<option value=${x.id}>${x.name}</option>`).join()} -->
    </select>
  {/if}
</main>
