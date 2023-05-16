<script>
    import './+page.css'
    import '../app.css'
    import paw  from '../assets/images/logosite.png'
    import pfp from '../assets/images/pfp.jpg'

  import { navbarButtons } from '../data/routes';

</script>

<div class="left-nav">
  {#each navbarButtons as paws}
  <a href={paws.path}>
    <img src={paws.icon} alt="icon">
    {paws.name}
  </a>
  {/each}
    
</div>

<div class="right-nav">
  <br>
   <input type="text" placeholder="Search..">
  <br>
  <div class="mightlike">
    <h1 style="color:black; padding-left:65px;">You might like</h1>
    <div class="followsuggest">
      <div class="profiel"><img src="{pfp}"></div>
      <div class="username"><h2>The cool cat</h2><h3>@TheCoolCat</h3></div>
      <div class ="followbutton"><button>follow</button></div>




    </div>
    


  </div>
  


</div>


<slot />

<style lang="scss">
  
  .left-nav {
    flex-flow: column;
    display: flex;
    justify-content: flex-start;
    align-items:center;
  }
  
  a {
    margin: 10px 10px 0px 10px;
    padding: 10px 10px 10px 20px;
    font-size: xx-large;
    img {
      max-width: 40px;
    }
  }
  .active {
    background-color: #100100;
    border-radius: 40px;
  }

  .right-nav input[type=text]{
    padding:10px;
    padding-right:200px;
    padding-top: 5px;
    margin-left: 45px;
    border-radius: 50px;
    background-color: lightgrey;
  }
  .mightlike{
  background-color: lightgrey;
  width: 350px;
  height: 350px;
  border: 15px solid rgb(31, 38, 31);
  margin: 50px;
  border-radius: 35px;
  }

  .followsuggest{
    display: flex;
    flex-direction: row;
    }
  .profiel img{
    max-width: 48px;
    border-radius: 30px;
  }
  .profiel{
    margin-left: 20px;
  }
  .username h2,h3{
    color:black;
    margin: 0px;
    padding-left: 20px;
  }
  .username h3{
    color:gray;
  }
  .followbutton{
    padding-left: 20px;
  }
</style>