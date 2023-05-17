<script lang="ts">


let content:string;

</script>
  
<div>
    <textarea id="text" class="tweet-input" placeholder="mow purrrr :3" bind:value={content}></textarea>
    <button  class="tweet-button">paw</button>
</div>

  <style>
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