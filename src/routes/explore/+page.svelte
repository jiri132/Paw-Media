<script lang="ts">
    import PostViewer from '$lib/Posts/PostViewer.svelte';

    import type { PageData } from './$types'

    export let data: PageData
</script>
<main>
    <PostViewer posts={data.feed}/>
</main>
<style lang="scss">
    main {
      text-align:start;
    }
  </style>
  