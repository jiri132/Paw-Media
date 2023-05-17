<script lang="ts">
    import PostViewer from '$lib/Posts/PostViewer.svelte';

    import type { PageData } from './$types'

  export let data: PageData
</script>

<main>
  You don't have a following feed :(
</main>

<style lang="scss">
  main {
    text-align: center;
  }
</style>
