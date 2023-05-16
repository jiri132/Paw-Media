<script lang="ts">
    import './+page.css'
    import '../app.css'
    import paw  from '../assets/images/logosite.png'
  import { navbarButtons, getCurrentRoute } from '../data/routes';

  let current:string = '/';
  current = getCurrentRoute();
</script>

<div class="left-nav">
  {#each navbarButtons as paws, i}
    <a 
      href={paws.path} 
      class={(paws.path === current && i != 0) ? "active" : ""}  
      on:click={() => current = paws.path}
    >
      <img src={paws.icon} alt="icon">
      <div class="text">{paws.name}</div>
    </a>  
  {/each}
    
</div>

<div class="right-nav">

</div>


<slot />

<style lang="scss">
  
  .left-nav {
    flex-flow: column;
    display: flex;
    justify-content: flex-start;
    align-items:stretch;

    .text {
      margin-left: 20px;
      flex-grow: 1;
    }

    a {
      margin: 10px 10px 0px 10px;
      padding: 10px 10px 10px 20px;
      font-size: xx-large;
      display: flex;
      flex-direction: row;
      // text-decoration: none;
      img {
        max-width: 40px;
        height: 40px;
      }
    }
    a:hover {
      opacity: 0.85;
    }
    .active {
      opacity: 1;
      background-color: #111111;
      border-radius: 40px;
    }

  }
    
</style>