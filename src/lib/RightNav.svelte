<script>
import pfp from '../assets/images/pfp.jpg'



</script>
<div class="right-nav">
    <br>
     <input type="text" placeholder="Meow...">
    <br>
    <div class="mightlike">
      <h1 style="color:black; padding-left:65px;">You might like</h1>
      <div class="followsuggest">
        <div class="profiel"><img src="{pfp}"></div>
        <div class="username"><h2>The cool cat</h2><h3>@TheCoolCat</h3></div>
        <div class ="followbutton"><button>follow</button></div>
      </div>
      <div class="followsuggest">
        <div class="profiel"><img src="{pfp}"></div>
        <div class="username"><h2>The cool cat</h2><h3>@TheCoolCat</h3></div>
        <div class ="followbutton"><button>follow</button></div>
      </div>
    </div>
    <div class="mightlike">
        <h1 style="color:black; padding-left:100px;">Trending</h1>
        <div class="trend">
            <div class = "topic"><p>Trending amongst kittens</p></div> 
            <div class = "subject"><p>#MEOWWWWW</p></div> 
            <div class = "tweets"><p>50k meows</p></div> 




        </div>






    </div>

  
  
  </div>

<style>
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
    padding-bottom: 10px;
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
  .trend{
    flex-direction: column;
    margin:0px;
    }
    .topic{
        font-size: 15px;
    }
    .subject{
        font-size:20px;
        color:white;
    }
    .tweets{
        font-size:15px;
    }
  </style>