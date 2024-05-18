<script>
    import { onMount } from 'svelte';
    import { Card, CardBody, CardTitle, Icon } from 'yesvelte'

    export let data;
    let titlesHour = [];
    let titlesStand = [[]];
    let mealNames = [[]];
    let plat = "";

    onMount(async () => {
        // //console.log(data);
        var res = await fetch(`https://qx68e2c3ei.execute-api.eu-west-1.amazonaws.com/prod/datagouv/`+data.nom_plat);
        res = await res.text();
        var domParser = new DOMParser();
        var menu = domParser.parseFromString(res, 'text/html');

        // Parsing the right restaurant and date in the XML file
        var menuToText = menu.querySelector(`resto[id="${id}"]`).querySelector(`menu[date="${date}"]`).innerHTML;
        
        // Cleaning the text
        menuToText = menuToText.substring(12, menuToText.length - 8);
        menuToText = menuToText.replace(/<h2-->/g, '<h2>');
        var doc = domParser.parseFromString(menuToText, 'text/html');
        
        // Initialize titlesStand array with empty arrays
        for (let i = 0; i < doc.getElementsByTagName('h2').length; i++) {
            titlesStand.push([]);
        }
        for (let i = 0; i < doc.getElementsByTagName('ul').length; i++) {
            mealNames.push([]);
        }

        var nextNode = null;
        var nextNodeMeal = null;
        var j = 0;
        var w = 0;
        //H2 titles
        for (let i = 0; i < doc.getElementsByTagName('h2').length; i++) {
            titlesHour.push(doc.getElementsByTagName('h2')[i].innerHTML);
            nextNode = doc.getElementsByTagName('h2')[i].nextSibling;
            while(nextNode.tagName != "H2"){

                if(nextNode.tagName == "H4"){
                    titlesStand[i][j] = nextNode.innerHTML;  
                    j++;
                    nextNodeMeal = nextNode.nextSibling;
                    ////console.log(Array.from(nextNodeMeal.getElementsByTagName("li")).map(item => item.innerHTML));
                    mealNames[i][j] = Array.from(nextNodeMeal.getElementsByTagName("li")).map(item => item.innerHTML).join(" ");
                    //console.log(mealNames[i][j]);
                }
                nextNode = nextNode.nextSibling;
            }
            j = 0;
        }

        
        plat = doc.getElementsByTagName('ul')[0].getElementsByTagName('li')[0].innerHTML;
    });

</script>


<main>
<!-- Return to main page -->
<div class="flex center">
    <Icon style="margin-bottom: 0.5em; margin-right: 0.6em;" size="2x" name="arrow-left" on:click={() => (window.location.href="/")}/>
    <h1 class="title" style="margin-right: 0.5em;">Stand</h1>
    <h1 class="title">{data.nom_plat}</h1>
</div>
    <div class="center" style="height: 50vh;">
        {#each titlesHour as title, indexHour}
            <Card>
                <CardBody>
                    <CardTitle style="font-weight: bold; font-size: 2em">{title}</CardTitle>
                        {#each titlesStand[indexHour] as titleStd, indexStand}
                            <h3>{titleStd}</h3>
                            <p>{mealNames[indexHour][indexStand+1]}</p>
                        {/each}
                </CardBody>
            </Card>
        {/each}
    </div>
</main>