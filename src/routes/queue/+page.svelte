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
        60 : 2,
        70 : 3,
        80 : 2,
        90 : 1,
        100 : 1,
        110 : -1
    };
    let nbrQueue2 = {
        10 : 2,
        20 : 3,
        30 : 3,
        40 : 2,
        50 : 2,
        60 : 1,
        70 : 1,
        80 : 2,
        90 : 2,
        100 : 0,
        110 : -1
    };
</script>



<TempsQueue 
            data={nbrQueue}
            nomRU="Astrolabe"
            time={currentTime}/>

            <TempsQueue 
            data={nbrQueue2}
            nomRU="INSA"
            time={currentTime}/>