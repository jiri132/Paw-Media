<script lang="ts">
    // import PostViewer from '$lib/Posts/PostViewer.svelte';
    import Post from '../lib/Post.svelte'
    import type { PageData } from './$types'
    export let data: PageData

// /** @type {import('./+page.server').Action}  */
    // export let actions;

//   async function handleSubmit(event) {
//   event.preventDefault();

//   const formData = new FormData(event.target);

//   try {
//     const response = await actions.default({ request: { formData } });

//     // Handle the response if needed
//     if (response.status === 303) {
//       // Redirect to a new page
//       const location = response.headers.get('Location');
//       if (location) {
//         window.location.href = location;
//       }
//     } else {
//       // Handle other response statuses
//     }
//   } catch (error) {
//     console.error('Error:', error);
//     // Handle the error
//   }
// }



</script>

<main>
  <form class="tweet-input" on:submit="{handleSubmit}">
    <!-- Form inputs -->
    <!-- <input type="text" name="content" /> -->
    <!-- <input type="text" name="author_identifier" /> -->
    <!-- <input type="text" name="author_display" /> -->
  
    <!-- Submit button -->
    <!-- <button class="tweet-button" type="submit">Create Post</button> -->
  <!-- </form> 
  
  <!-- <div>
    <form id="text" class="tweet-input" placeholder="mow purrrr :3"></form>
    <button on:click={actions} class="tweet-button">paw</button>
</div> -->
<!-- 
  <Post /> -->

  You don't have a following feed (╯°□°)╯︵ ┻━┻
</main>

<style lang="scss">
  main {
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
