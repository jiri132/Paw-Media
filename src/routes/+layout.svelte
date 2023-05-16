<script>
    import './+page.css'
    import '../app.css'
    import paw  from '../assets/images/logosite.png'
   

  import { navbarButtons } from '../data/routes';
    import RightNav from '$lib/RightNav.svelte';

</script>

<div class="left-nav">
  {#each navbarButtons as paws}
  <a href={paws.path}>
    <img src={paws.icon} alt="icon">
    {paws.name}
  </a>
  {/each}
    
</div>

<RightNav/>


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
</style>