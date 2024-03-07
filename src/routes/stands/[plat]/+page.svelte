<script>
    import { onMount } from 'svelte';
    import { Card, CardBody, CardTitle, CardMedia, El, Icon } from 'yesvelte'
    import { Button, ButtonGroup } from 'yesvelte'

    export let data;

    let menu = "";
    let plat = "";

    onMount(async () => {
        await fetch(`https://qx68e2c3ei.execute-api.eu-west-1.amazonaws.com/prod/datagouv/strasbourg`).then(res => res.text()).then(res => {
            menu = res;
            var domParser = new DOMParser();
            var doc = domParser.parseFromString(menu, 'text/html');
            console.log(doc);
            plat = doc.getElementsByTagName('resto')[0].getElementsByTagName('menu')[0].getElementsByTagName('ul')[0].getElementsByTagName('li')[0].innerHTML;
        })});

</script>


<main>
<!-- Return to main page -->
<div class="flex center">
    <Icon style="margin-bottom: 0.5em; margin-right: 0.6em;" size="2x" name="arrow-left" on:click={() => (window.location.href="/")}/>
    <h1 class="title" style="margin-right: 0.5em;">Stand</h1>
    <h1 class="title">{data.nom_plat}</h1>
</div>

    <div class="center" style="height: 50vh;">
        <p>{plat}</p>
    </div>
</main>