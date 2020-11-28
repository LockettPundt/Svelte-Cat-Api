<script>
  export let getCatData;
</script>

<style>
  button {
    font-family: inherit;
    font-size: inherit;
    padding: 1em 2em;
    font-size: 1.3em;
    font-weight: 900;
    color: rgb(28, 28, 28);
    background-color: rgba(30, 215, 96, 0.8);
    border-radius: 2em;
    border: none;
    outline: none;
    width: 200px;
    font-variant-numeric: tabular-nums;
  }

  button:hover {
    background-color: rgba(30, 215, 96, 0.6);
  }

  button:active {
    background-color: rgba(30, 215, 96, 0.3);
  }
</style>

<button on:click={getCatData}>
  <slot />
</button>
