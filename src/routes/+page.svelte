<script lang="ts">
    import PostViewer from '$lib/Posts/PostViewer.svelte';

    import type { PageData } from './$types'

  export let data: PageData
</script>

<main>

    <PostViewer posts={data.feed}/>
    

</main>

<style>
    
</style>
  