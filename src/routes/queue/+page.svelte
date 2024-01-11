<script>
    import TempsQueue from './TempsQueue.svelte'
    let currentNumber = 2;
    let currentTime = 50;
    let nbrQueue = {
        10 : 0,
        20 : 0,
        30 : 1,
        40 : 1,
        50 : 2,
        60 : 3,
        70 : 4,
        80 : 3,
        90 : 2,
        100 : 1,
        110 : 1
    };
    let nbrQueue2 = {
        10 : 2,
        20 : 3,
        30 : 4,
        40 : 3,
        50 : 2,
        60 : 1,
        70 : 1,
        80 : 2,
        90 : 2,
        100 : 0,
        110 : 1
    };
</script>

<main>


<div class="center">
<h1> Temps de queue dans les RU les plus proches</h1>
    <TempsQueue 
                data={nbrQueue}
                nomRU="Astrolabe"
                time={currentTime}
    sizeX="400"
    sizeY="200"/>

    <div class="XS"></div>

    <TempsQueue
    data={nbrQueue2}
    nomRU="INSA"
    time={currentTime}
    sizeX="400"
    sizeY="200"/>
</div>
    
</main>