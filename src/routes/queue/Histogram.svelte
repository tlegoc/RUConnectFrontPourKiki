<script>
    import mermaid from 'mermaid';
    import {scaleLinear} from 'd3-scale';
    mermaid.initialize({ startOnLoad: true });
    export var width;
    export var height;
    export var currentTime;
    export var data;
    $: time = ((currentTime-11.25)/2.5)*width;
    let xTicksGrand = [0,10,20,30,40,50,60,70,80,90,100];
    let xTicksPetit = [0,20,40,60,80,100];
    let xTextGrand = ["11h15","11h30","11h45","12h00","12h15","12h30","12h45","13h00","13h15","13h30","13h45"];
    let xTextPetit = ["11h15","11h45","12h15","12h45","13h15","13h45"];
    let yTicks = [0,1,2,3,4]
    let yTexte = ["Attente très longue", "Attente longue", "Attente moyenne","Peu d'attente","Pas d'attente"];
    $: yScale = scaleLinear().domain([0,4]).range([0,height]);
    $: xScale = scaleLinear().domain([0,100]).range([0,width]);
    
   

  // Declare the y (vertical position) scale.
    

</script>

<div
  class="chart-container"
  bind:clientWidth={width}
>
    <svg {width} {height}>
        {#each yTicks as tick,i}
        <g class='tick' transform="translate(0,{yScale(tick)})">
            <line x1=0 x2=6 y1=0 y2=0 stroke="black" />
            <text x=10 y={i === 0 ? -2 : i === 4 ? -14 : -7} dy=9 font-size={11} text-anchor="start" dominant-baseline="middle">{yTexte[i]}</text>
        </g>
        {/each}
        {#each xTicksGrand as tick}
            <rect 
			width={width/10} 
			height={yScale(data[tick+10])}
			x={xScale(tick)-width/20}
			y={height-yScale(data[tick+10])}
			fill={data[tick+10] === 4 ? "red" : data[tick+10] === 3 ? "orangeRed" : data[tick+10] === 2 ? "orange" : "green"} 
            opacity=0.4/>

        {/each}
        <line x1=0 x2=0 y1=0 y2={height} stroke="black" /> 
        <line x1={currentTime} x2={currentTime} y1=0 y2={height} stroke="red" /> 
        
    </svg>
    
</div>
<div
  class="chart-container"
  bind:clientWidth={width}
>
<svg {width} height=50>
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
  