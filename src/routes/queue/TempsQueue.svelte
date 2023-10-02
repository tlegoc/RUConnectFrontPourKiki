<script>
	import { Card, CardBody, CardHeader, CardTitle } from 'yesvelte';
    import { Progress, ProgressBar } from 'yesvelte';
    import { Slider, SliderKnob } from "yesvelte";
    import TimeScale from "./TimeScale.svelte";
    export var nomRU;
    export var data;
    let currentTime = 30;
    const keys = Object.keys(data);
    const values = Object.values(data);

    keys.filter((value,i)=>{
    if(values[i]==values[i+1]){
        keys[i+1] = "";
    }
    });

    let hours = keys.filter(hour => hour != "");
    let people = values.filter((value,i)=>keys[i]!="");

    people = people.map(number=>{
        if(number == 1) return "green";
        else if(number==2) return "orange";
        else if(number==3) return "red";
        else return "grey";
    })

</script>

<Card title={nomRU}>
	<CardBody>Temps de queue
        <Progress>
            {#each hours as h,i}
                <ProgressBar value={hours[i+1]-h} color={people[i]} />
            {/each}
        </Progress>

        <Slider min={0} max={100} step={10}>
            <SliderKnob bind:currentTime />
        </Slider>

        <TimeScale width=1000 height=50></TimeScale>
        
    </CardBody>
</Card>
