<script>
	import { Card, CardBody, CardHeader, CardTitle } from 'yesvelte';
    import Histogram from "./Histogram.svelte";
    export var nomRU;
    export var data;
    export var sizeX;
    export var sizeY;
    let currentTime = 11.789;
    let width;
    $: time = ((currentTime-11.25)/2.5)*width;
    const keys = Object.keys(data);
    const values = Object.values(data);
    keys.filter((value,i)=>{
    if(values[i]==values[i+1]){
        keys[i+1] = "";
    }
    });

    let hours = keys.filter(hour => hour != "");
    let people = values.filter((value,i)=>keys[i]!="");

</script>

<div
class="chart-container"
bind:clientWidth={width}
>
    <Histogram width={sizeX} height={sizeY} currentTime={time} {data}></Histogram>
</div>