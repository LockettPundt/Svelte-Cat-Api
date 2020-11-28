<script>
  import axios from 'axios';
  export let breedId = null;
  export let numImages = 4;
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
    grid-template-columns: repeat(auto-fill, 120px);
    justify-items: center;
    justify-content: center;
    gap: 10px;
    width: 90%;
    margin: 50px auto;
  }

  img {
    width: 120px;
    height: 100px;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px 0px, rgba(0, 0, 0, 0.3) 0px 6px 20px 0px;
  }
</style>

<div>
  {#if imageData && breedId}
    {#each imageData as { url, breeds }}
      <img src={url} alt={`image of a ${breeds[0].name}`} />
    {/each}
  {/if}
</div>
