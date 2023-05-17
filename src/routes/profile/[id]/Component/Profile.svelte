<script lang=ts>
    import type { Post } from "@prisma/client";
    import p_img from "../../../../assets/images/user.png"
    import PostViewer from "$lib/Posts/PostViewer.svelte";
    export let name : string = "";
    export let identifier : string = "";
    export let user_posts : Post[]; 
</script>


<div class="profile-container">
    <img src={p_img} alt=" ">
    <div class="">
        <h1>{name}</h1>    
        <h3>@{identifier}</h3>

        {#if user_posts.length > 0}
            <PostViewer 
                posts={user_posts}
            />
        {/if}

    </div>
</div>

<style lang="scss">
    .profile-container {
        display: flex;
        background-color: rgb(15, 15, 15);
        padding: 10px;
        border: #111 solid 2px;
        border-radius: 20px;
        img {
            width: 60px;
            height: 60px;
            background-color: rgb(194, 194, 194);
            border-radius: 45px;
        }
        h1,h3 {
            margin: 0;
        }
        h1 {
            margin: 0px 0px 0px 10px;
            color: rgba(255, 255, 255, 0.815);
        }
        h3 {
            margin: 0px 0px 0px 10px;
            color: gray;
        }

    }
</style>