<script>
import pfp from '../assets/images/pfp.jpg'
    import Page from '../routes/OK/+page.svelte';

  let inputText = "";
  const letters = ["m", "e", "o", "w"]; 
  let currentIndex = 0;

  function handleKeyDown(event) {
    if (event.key.length === 1) {
      event.preventDefault();
      inputText += letters[currentIndex];
      currentIndex = (currentIndex + 1) % letters.length;
    }
  }
  

</script>
<div class="right-nav">
    <br>
     
    <input  style="width: 350px; height: 50px;" type="text" bind:value={inputText} on:keydown={handleKeyDown}   placeholder="Meow...">
    <br>

    <div style="height:max-content;" class= "mightlike">
      <h1 style="color:white; padding-left:65px;">You might like</h1>
      <a href="/profile/TheCoolCat" class="followsuggest">
        <div class="profiel"><img src="{pfp}"></div>
        <div class="username"><h2>The cool cat</h2><h3>@TheCoolCat</h3></div>
        <!-- <div class ="followbutton"><button>follow</button></div> -->
      </a>
    </div>


    <div class="mightlike">
      <h1 style="color:white; padding-left:100px;">Trending</h1>
      <div class="trendingtab">
        <a href="/profile/TheCoolCat">
            <div class="topic"><p>Trending amongst kittens</p></div> 
            <div class="subject"><p>#MEOWWWWW</p></div> 
            <!-- <div class="tweets"><p>50k meows</p></div>  -->
        </a>
      </div> 
      <div class="trendingtab">   
      <a href="/profile/HelloKitties">
        <div class = "topic"><p>Trending amongst kittens</p></div> 
        <div class = "subject"><p>#PRR</p></div> 
        <!-- <div class = "tweets"><p>50k meows</p></div>  -->
      </a>
      </div>
    </div>
</div>
<style lang=scss>
    .right-nav input[type=text]{
    padding:10px;
    padding-top: 5px;
    margin-left: 45px;
    border-radius: 50px;
    background-color: rgb(30, 33, 38);
    color:white;
    font-family: kitten;
    font-size: large;
    position: relative;
  }
  .mightlike{
  background-color:rgb(22, 24, 28);
  width: 350px;
  height: 350px;
  border: 3px solid rgb(31, 38, 31);
  margin: 50px;
  border-radius: 35px;
  overflow-y: scroll;
  overflow-x: hidden;
  }

  .followsuggest{
    display: flex;
    flex-direction: row;
    padding-bottom: 10px;
    }
    .followsuggest:hover .profiel,
    .followsuggest:hover .username,
    .followsuggest:hover .followbutton {
    background-color:rgb(30, 33, 38);
    }




.trendingtab a:hover .topic,
.trendingtab a:hover .subject,
.trendingtab a:hover .tweets {
    background-color: rgb(30, 33, 38);
}


  .profiel img{
    max-width: 48px;
    border-radius: 30px;
  }
  .profiel{
    margin-left: 20px;
  }
  .username h2,h3{
    color:whitesmoke;
    margin: 0px;
    padding-left: 20px;
  }
  .username h3{
    color:gray;
  }
  .followbutton{
    padding-left: 20px;
  }
  a {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    margin-right: 10px;
    margin-bottom: 10px;

    p{  
      margin:0px;
    }
    
   
      .topic{
        font-size: 15px;
        margin:0px;
        color:grey;
      }
      .subject{
        font-size:20px;
        color:white;
        margin:0px;
      }
      .tweets{
        font-size:15px;
          margin:0px;
          color:grey;
      }

    }
  </style>