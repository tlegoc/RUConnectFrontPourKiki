<script>

	import { Button } from 'yesvelte';
    import { Icon } from 'yesvelte';
    let plats = ["hamburger","paella","ratatouille"];
    let bool = [undefined, undefined, undefined];
    let i = 0;
    function like(){
        bool[i] = true;
        i++;
    }
    function dislike(){
        bool[i] = false;
        i++;
    }
</script>

<h1>Tinder des plats</h1>
{#if i>2}
    <p>Tous les plats sont notés</p>
{:else}
    <p>{plats[i]}</p>
{/if}

<Button shape="pill" color="green" size="lg" on:click={like}>
    <Icon name="heart" color="dark"/>
</Button>

<Button shape="pill" color="red" size="lg" on:click={dislike}>
    <Icon name="x" color="dark"/>
</Button>

<p>{bool}</p>