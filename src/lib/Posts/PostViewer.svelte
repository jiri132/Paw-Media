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
        title={post.title}
        content={post.content}
        author={post.author_display}
        authorId={post.author_identifier}
    />
    {/each}

</div>
<style lang="scss">
    .post-container {

    }
</style>