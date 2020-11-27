<script>
  import axios from 'axios';
  // import dotenv from 'dotenv';

  // dotenv.config();

  const API_KEY = '11765b01-2516-4db9-8e2a-2083dc6938d7';
  const catBreedsUrl = `https://api.thecatapi.com/v1/breeds`;

  let catDataRes = null;

  const getCatData = async () => {
    const data = await axios.get(catBreedsUrl, {
      method: 'GET',
      headers: {
        'x-api-key': API_KEY,
      },
    });
    const res = data.data;
    console.log(res);
    catDataRes = res;
  };
</script>

<style>
  button {
    font-family: inherit;
    font-size: inherit;
    padding: 1em 2em;
    color: #ff3e00;
    background-color: rgba(255, 62, 0, 0.1);
    border-radius: 2em;
    border: 2px solid rgba(255, 62, 0, 0);
    outline: none;
    width: 200px;
    font-variant-numeric: tabular-nums;
  }

  button:focus {
    border: 2px solid #ff3e00;
  }

  button:active {
    background-color: rgba(255, 62, 0, 0.2);
  }
</style>

<button on:click={getCatData}>Cats!</button>
