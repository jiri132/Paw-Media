<script lang=ts>
    import type { PageData } from './$types';
    import Profile from './Component/Profile.svelte';
    
    export let data: PageData
</script>


<main>
    <Profile 
        name={data.user?.name_display}
        identifier={data.user?.name_identifier}
        user_posts={data.user_posts}
    />
</main>


<style lang="scss">

</style>