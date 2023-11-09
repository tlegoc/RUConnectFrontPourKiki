<script>
	import { Card, CardBody, CardHeader, CardTitle } from 'yesvelte';
    import { Progress, ProgressBar } from 'yesvelte';
    import Histogram from "./Histogram.svelte";
    export var nomRU;
    export var data;
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

<Card title={nomRU}>
	<CardBody>
        
        <!--<Progress>
            {#each hours as h,i}
                <ProgressBar value={hours[i+1]-h} color={people[i]} />
            {/each}
        </Progress>-->
        
       
        <div
        class="chart-container"
        bind:clientWidth={width}
        >
            <Histogram width=1000 height=400 currentTime={time} {data}></Histogram>
        </div>
        
        
    </CardBody>
</Card>

