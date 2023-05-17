<script lang=ts>
    export let title : string = "";
    export let content : string = "";
    export let author : string = "";
    export let authorId : string = "";
</script>

<div class="container">
    <a href="/profile/{authorId}">{author}</a>
    <h2>{title}</h2>
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