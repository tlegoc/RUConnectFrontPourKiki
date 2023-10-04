<script>
    import {scaleLinear} from 'd3-scale';
    export var width;
    export var height;
    export var currentTime;
    $: time = ((currentTime-11.25)/2.5)*width;
    let xTicksGrand = [0,10,20,30,40,50,60,70,80,90,100];
    let xTicksPetit = [0,20,40,60,80,100];
    let xTextGrand = ["11h15","11h30","11h45","12h00","12h15","12h30","12h45","13h00","13h15","13h30","13h45"];
    let xTextPetit = ["11h15","11h45","12h15","12h45","13h15","13h45"];
    $: xScale = scaleLinear().domain([0,100]).range([0,width]);

</script>
<div
  class="chart-container"
  bind:clientWidth={width}
>
<svg {width} {height}>
{#if width>=600}
    {#each xTicksGrand as tick,i}
    <g class='tick' transform="translate({xScale(tick)}, 0)">
        <line x1=0 x2=0 y1=0 y2=6 stroke="black" />
        <text y=6 dy=9 font-size={11} text-anchor={i === 0 ? "start" : i === 10 ? "end" : "middle"} dominant-baseline="middle">{xTextGrand[i]}</text>
    </g>
    {/each}
{:else}
    {#each xTicksPetit as tick,i}
    <g class='tick' transform="translate({xScale(tick)}, 0)">
        <line x1=0 x2=0 y1=0 y2=6 stroke="black" />
        <text y=6 dy=9 font-size={11} text-anchor={i === 0 ? "start" : i === 5 ? "end" : "middle"} dominant-baseline="middle">{xTextPetit[i]}</text>
    </g>
    {/each}
{/if}


<line x1=0 x2={width} y1=0 y2=0 stroke="black" /> 
</svg>
</div>
