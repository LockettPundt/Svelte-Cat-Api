<script>
  import axios from 'axios';
  export let breedId = null;
  export let numImages = 1;
  import darkMode from './darkModeStore';
  import { get } from 'svelte/store';

  let darkModeValue = get(darkMode);

  darkMode.subscribe((value) => (darkModeValue = value));
  const API_KEY = '11765b01-2516-4db9-8e2a-2083dc6938d7';

  let imageData;

  const getImages = async (breedId, numImages) => {
    const catImageAPIUrl = `https://api.thecatapi.com/v1/images/search?breed_id=${breedId}&limit=${numImages}`;
    const catImages = await axios.get(catImageAPIUrl, {
      method: 'GET',
      headers: {
        'x-api-key': API_KEY,
      },
    });
    console.log(catImages.data);
    imageData = catImages.data;
    return catImages.data;
  };

  $: {
    console.log(`breed id was changed ${breedId}`);
    if (breedId) {
      getImages(breedId, numImages);
    }
  }
</script>

<style>
  div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-items: center;
    gap: 10px;
    width: 90%;
    margin: 10px auto 40px auto;
  }

  @media screen and (max-width: 640px) {
    div {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  h3 {
    color: rgb(30, 215, 96);
    transition: color 0.4s ease-in-out;
  }

  h3.darkModeValue {
    color: rgb(28, 28, 28);
    transition: color 0.4s ease-in-out;
  }

  img {
    width: 200px;
    height: 200px;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px 0px, rgba(0, 0, 0, 0.3) 0px 6px 20px 0px;
  }
</style>

<div>
  {#if imageData && breedId}
    {#each imageData as { url, breeds }}
      <img src={url} alt={`image of a ${breeds[0].name}`} />
      <h3 class:darkModeValue>{breeds[0].description}</h3>
    {/each}
  {/if}
</div>
