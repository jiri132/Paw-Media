<script lang=ts>
    export let content : string = "";
    export let author : string = "";
    export let authorId : string = "";
    export let createdAt : Date;
</script>

<div class="container">
    <a href="/profile/{authorId}">{author} </a> @{authorId} · {createdAt.toDateString().slice(3,10)}
    <p>{content}</p>
</div>

<style lang="scss">
    .container {
        display: block; 
        background-color: #111;
        padding: 10px;
        border-radius: 15px;
        margin: 10px 20px 10px 20px; 
        border: #222222 solid 2px;
    }
</style>