<script lang="ts">
  import PostViewer from '$lib/Posts/PostViewer.svelte';

  import type { PageData } from './$types'
  export let data: PageData


  let inputText = "";
  const letters = ["m", "e", "o", "w"]; 
  let currentIndex = 0;

  function handleKeyDown(event) {
    const allowedCharacters = /[meowpr@*#!?:;3,. ]/gi;
    const lastInsertedCharacter = inputText.slice(-1);

    if (!allowedCharacters.test(lastInsertedCharacter)) {
      inputText = inputText.slice(0, -1);
    }


    // if (event.key.length === 1) {
    //   event.preventDefault();
    //   inputText += letters[currentIndex];
    //   currentIndex = (currentIndex + 1) % letters.length;
    // }
  }

</script>

<main>
  <form method="POST">
    <!-- Form inputs -->
		<textarea id="content" class="tweet-input" name="content"bind:value={inputText} on:keydown={handleKeyDown} rows={5} />
    <!-- Submit button -->
    <button class="tweet-button" type="submit">Paw</button>
  </form>
  <div class="feed">
    {#if data.feed.length > 0}
      <PostViewer posts={data.feed} />
    {:else}
      <div class="no-feed">
        You don't have a following feed (╯°□°)╯︵ ┻━┻
      </div>
    {/if}
  </div>
  
</main>

<style lang="scss">
  form {
    padding-bottom: 10px;
    border-bottom: 2px solid red;
  }
  .no-feed {
    text-align: center;
  }
  .tweet-input {
      width: 100%;
      padding: 10px;
      font-size: 16px;
      border: 1px solid #ccc;
      border-radius: 5px;
      resize: vertical;
    }

    .tweet-button {
      margin-top: 10px;
      padding: 8px 16px;
      font-size: 16px;
      background-color: #1da1f2;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
</style>
