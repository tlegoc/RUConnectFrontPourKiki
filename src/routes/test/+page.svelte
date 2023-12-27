<script>
    let cards = [
        { id: 1, content: "Card 1" },
        { id: 2, content: "Card 2" },
        // Ajoutez autant de cartes que nécessaire
    ];

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

            currentIndex += 1;

            isDragging = false;
        }
    }
</script>

<style>
    .card {
        width: 300px;
        height: 200px;
        background-color: #eee;
        border-radius: 8px;
        margin: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        touch-action: none;
    }
</style>
<main>
<div class="center">
{#each cards as { id, content }, index}
    <div
            bind:this={cards[index]}
            id={`card-${index}`}
            on:mousedown={handleStart}
            on:touchstart={handleStart}
            on:mousemove={handleMove}
            on:touchmove={handleMove}
            on:mouseup={handleEnd}
            on:touchend={handleEnd}
            class="card"
    >
        {content}
    </div>
{/each}
</div>
</main>