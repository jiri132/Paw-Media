<script lang=ts>
    import Profile from './Component/Profile.svelte';
    import type { PageData } from './$types'
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