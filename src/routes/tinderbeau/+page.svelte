<!--<script defer>

	import { Button } from 'yesvelte';
    import { Icon } from 'yesvelte';
    let plats = ["fromage","paella","ratatouille","galette de sarrazin","tomate"];
    let images = ["/src/images/fromage.png","/src/images/paella.jpg","/src/images/ratatouille.jpg","/src/images/galette.jpg","/src/images/tomate.webp"]
    let bool = [];
    let length = plats.length;
    let width;
    let i = 0;
    let currentIndex = 0;
    
   
    function like(){
        if(i < length){
            bool[i] = true;
        i++;
        }
        
    }
    function dislike(){
        card = document.getElementById(`card-${currentIndex}`);
        console.log("dislike");
        card.style.transform = `translateX(40px) rotate(4}deg)`;
        card.remove();
        //card.style.visibility='hidden';
        currentIndex += 1;
        card = document.getElementById(`card-${currentIndex}`);
        if(i < length){
            bool[i] = false;
            console.log(bool[i]);
        i++;
        }
        
    }

    
    let startX = 0;
    let isDragging = false;
    let isThrowing = false;

    let card;


    function handleStart(event) {
        startX = event.touches ? event.touches[0].clientX : event.clientX;
        isDragging = true;
    }

    function handleMove(event) {
        if (isDragging) {
            const currentX = event.touches ? event.touches[0].clientX : event.clientX;
            const deltaX = currentX - startX;
            console.log(currentIndex);
            card = document.getElementById(`card-${currentIndex}`);

            if (card) {
                card.style.transform = `translateX(${deltaX}px) rotate(${(deltaX / 10)}deg)`;
            }
            
        }
    }

    function handleEnd(event) {
        if (isDragging) {
            const currentX = event.touches ? event.touches[0].clientX : event.clientX;
            card = document.getElementById(`card-${currentIndex}`);

            /*if (card) {
                card.style.transform = "translateX(0) rotate(0)";
            }*/

            isDragging = false;
            if(currentX < width/4){
                card.style.transform = `translateX(40px) rotate(4}deg)`;
                //card.remove();
                //card.style.visibility='hidden';
                dislike();
                //currentIndex += 1;
            }
        }
    }

</script>


<body>
    <h1>Tinder des plats</h1>
    
<Button shape="pill" color="red" size="lg" on:click={dislike}>
    <Icon name="x" color="dark"/>
</Button>

    <div role="tablist" class="chart-container"
    bind:clientWidth={width}>
    {#each plats as plat,i} 
        <button
        bind:this={plat[i]}
        id={`card-${i}`}
        on:mousedown={handleStart}
        on:touchstart={handleStart}
        class="card" style="--i:{i}">
           {plat}
            <img src={images[i]} alt=""/>
        </button>
    {/each}
    </div>
    


<Button shape="pill" color="green" size="lg" on:click={like}>
    <Icon name="heart" color="dark"/>
</Button>
</body>

<p>{bool}</p>

<svelte:window 
on:mousemove={handleMove}
on:touchmove={handleMove}
on:mouseup={handleEnd}
on:touchend={handleEnd} />-->

<script>

	import { Button, Icon } from 'yesvelte';
    import { goto } from '$app/navigation';
    let plats = ["Fromage","Paella","Ratatouille","Galette de sarrazin","Tomate"];
    let images = ["/src/images/fromage.png","/src/images/paella.jpg","/src/images/ratatouille.jpg","/src/images/galette.jpg","/src/images/tomate.webp"]
    let bool = [];
    let width;
    let length = plats.length;
    let i = 0;
    function like(){
        if(i < length) {
            bool[i] = true;
            if (i === length - 1) goToHome();
            i++;
        }
    }
    function dislike(){
        if(i < length){
            bool[i] = false;
            if (i === length - 1) goToHome();
            i++;
        }
    }

    function goToHome() {
        goto("/");
    }
</script>
<style>
    .chart-container {
    height: 50vh;
    aspect-ratio: 2 / 3;
    perspective: 1000px;
    perspective-origin: center 50%;
    transform-style: preserve-3d;
    position: relative;
    }

    .card {
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    transform: translateZ(calc(-30px * var(--i))) translateY(calc(-20px * var(--i))) rotate(calc(-4deg * var(--i)));
    filter: drop-shadow(2px 2px 20px rgba(0, 0, 0, 0.5));
    cursor: pointer;
    user-select: none;
    transition: transform 0.5s;
    }

    .card img {
    border-radius: 20px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 50%;
    pointer-events: none; 
    }
    
</style>

<main>
        <h1 class="center title">Tinder des plats</h1>
    {#if i < length}
        <div class="flex center">

        <Button shape="pill" color="green" size="lg" on:click={like} style="margin-right: 10px">
            <Icon name="heart" color="dark"/>
        </Button>
        <div role="tablist" class="chart-container"
        bind:clientWidth={width}>

            <div class="card">
            <img src={images[i]} alt="" height=100px/>
            </div>

        </div>
<Button shape="pill" color="red" size="lg" on:click={dislike}  style="margin-left: 10px">
    <Icon name="x" color="dark"/>
</Button>
</div>
    {/if}
    {#if i >= length}
        <h3 class="center">Redirection vers la page principale</h3>
    {:else}
        <h3 class="center XS">{plats[i]}</h3>
    {/if}


</main>