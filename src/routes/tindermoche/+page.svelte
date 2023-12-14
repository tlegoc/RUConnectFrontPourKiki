<script>

	import { Button } from 'yesvelte';
    import { Icon } from 'yesvelte';
    let plats = ["fromage","paella","ratatouille","galette de sarrazin","tomate"];
    let images = ["/src/images/fromage.png","/src/images/paella.jpg","/src/images/ratatouille.jpg","/src/images/galette.jpg","/src/images/tomate.webp"]
    let bool = [];
    let length = plats.length;
    let i = 0;
    function like(){
        if(i < length){
            bool[i] = true;
        i++;
        }
        
    }
    function dislike(){
        if(i < length){
            bool[i] = false;
        i++;
        }
        
    }
</script>
<style>
    .tinder{
        align-items: center;
        justify-content: center;
        perspective: 1000px;
        perspective-origin: center 50%;
    }
</style>
<div class= "tinder">
<h1>Tinder des plats</h1>
{#if i >= length}
    <p>Tous les plats sont notés</p>
{:else}
    <p>{plats[i]}</p>
    <img src={images[i]} alt="" height=100px/>
    <p></p>
{/if}

<Button shape="pill" color="green" size="lg" on:click={like}>
    <Icon name="heart" color="dark"/>
</Button>

<Button shape="pill" color="red" size="lg" on:click={dislike}>
    <Icon name="x" color="dark"/>
</Button>

<p>{bool}</p>
</div>