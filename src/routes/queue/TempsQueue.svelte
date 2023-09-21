<script>
	import { Card, CardBody, CardHeader, CardTitle } from 'yesvelte';
    import { Progress, ProgressBar } from 'yesvelte';
    import { Slider, SliderKnob } from "yesvelte";
    export var nomRU;
    export let nombreDansQueue;
    export var time;
    let list = {};

    {#each items as nombreDansQueue}
	    if(items.nombre)
    {/each}

</script>

<Card title={nomRU}>
	<CardBody>Temps de queue
        <Progress>
            <ProgressBar value="20" color="green" />
            <ProgressBar value="50" color="warning" />
            <ProgressBar value="70" color="danger" />
            <ProgressBar value="80" color="warning" />
            <ProgressBar value="100" color="green" />
        </Progress>
        <Slider>
            <SliderKnob disabled bind:time />
        </Slider>
    </CardBody>
</Card>