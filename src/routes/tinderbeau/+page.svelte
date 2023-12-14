<script defer>

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
        console.log("dislike");
        const card = document.getElementById(`card-${currentIndex}`);
        card.style.transform = `translateX(40px) rotate(4}deg)`;
        card.remove();
        //card.style.visibility='hidden';
        currentIndex += 1;
        if(i < length){
            bool[i] = false;
            console.log(bool[i]);
        i++;
        }
        
    }

    
    let startX = 0;
    let isDragging = false;
    let isThrowing = false;

    function handleStart(event) {
        startX = event.touches ? event.touches[0].clientX : event.clientX;
        isDragging = true;
    }

    function handleMove(event) {
        if (isDragging) {
            const currentX = event.touches ? event.touches[0].clientX : event.clientX;
            const deltaX = currentX - startX;
            console.log(currentIndex);
            const card = document.getElementById(`card-${currentIndex}`);

            if (card) {
                card.style.transform = `translateX(${deltaX}px) rotate(${(deltaX / 10)}deg)`;
            }
            
        }
    }

    function handleEnd(event) {
        if (isDragging) {
            const currentX = event.touches ? event.touches[0].clientX : event.clientX;
            const card = document.getElementById(`card-${currentIndex}`);

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
<style>
    body {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    }

    .chart-container {
    height: 70vh;
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

<body>
    <h1>Tinder des plats</h1>
<!--    
<Button shape="pill" color="red" size="lg" on:click={dislike}>
    <Icon name="x" color="dark"/>
</Button>--> 

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
            <img src={images[i]} alt="" draggable="false"/>
        </button>
    {/each}
    </div>
    

<!--
<Button shape="pill" color="green" size="lg" on:click={like}>
    <Icon name="heart" color="dark"/>
</Button>-->
</body>

<p>{bool}</p>

<svelte:window 
on:mousemove={handleMove}
on:touchmove={handleMove}
on:mouseup={handleEnd}
on:touchend={handleEnd} />

