<script lang="ts">
    import { each } from "svelte/internal";
    import PostCard from "./PostCard.svelte";
    import type { Post } from "@prisma/client";
    // import db from "../database"

    // const AllPosts = db.post.findMany();
    export let posts : Post[];
</script>

<div class="post-container">
    {#each posts as post, i}
    <PostCard
        content={post.content}
        author={post.author_display}
        authorId={post.author_identifier}
        createdAt={post.createdAt}
    />
    {/each}

</div>
<style lang="scss">
    .post-container {

    }
</style>