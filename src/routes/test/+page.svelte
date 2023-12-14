<script>
  let plats = ["fromage","paella","ratatouille","galette de sarrazin","tomate"];
  let images = ["/src/images/fromage.png","/src/images/paella.jpg","/src/images/ratatouille.jpg","/src/images/galette.jpg","/src/images/tomate.webp"]
    

  let currentIndex = 0;
  let startX = 0;
  let isDragging = false;

  function handleStart(event) {
      startX = event.touches ? event.touches[0].clientX : event.clientX;
      isDragging = true;
  }

  function handleMove(event) {
      if (isDragging) {
          const currentX = event.touches ? event.touches[0].clientX : event.clientX;
          const deltaX = currentX - startX;
          const card = document.getElementById(`card-${currentIndex}`);

          if (card) {
              card.style.transform = `translateX(${deltaX}px) rotate(${(deltaX / 10)}deg)`;
          }
      }
  }

  function handleEnd() {
      if (isDragging) {
          const card = document.getElementById(`card-${currentIndex}`);

          if (card) {
              card.style.transform = "translateX(0) rotate(0)";
          }

          currentIndex +=1;

          isDragging = false;
      }
  }
</script>

<style>
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
    }

    body {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    }

    #swiper {
    height: 70vh;
    aspect-ratio: 2 / 3;
    perspective: 1000px;
    perspective-origin: center 50%;
    transform-style: preserve-3d;
    position: relative;
    }
</style>
<main>
  <body>
<div class="swiper">
{#each plats as text , i}
  <button
          id={`card-${i}`}
          on:mousedown={handleStart}
          on:touchstart={handleStart}
          class="card" style="--i:{i}"
  >
      {text}
      <img src={images[i]} alt=""/>
</button>
{/each}
</div>
</body>
</main>
<svelte:window 
on:mousemove={handleMove}
on:touchmove={handleMove}
on:mouseup={handleEnd}
on:touchend={handleEnd} />