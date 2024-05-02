<script>
	import {
		Button,
		ButtonGroup, Dot,
		El,
		Icon,
		Label,
		Modal,
		ModalBody,
		ModalHeader,
		ModalTitle,
		Popover,
		PopoverBody, Status
	} from 'yesvelte'
	import { onMount } from 'svelte';
    import { Card, CardBody, CardTitle } from 'yesvelte'
	import TempsQueue from "./queue/TempsQueue.svelte";
	import {connected} from './stores.js';
	import {goto} from '$app/navigation';

	let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	let today  = new Date();
	let actualDate = today.toISOString().split('T')[0];
	today = today.toLocaleDateString('fr-FR', options);
	let indexDate = 0;


	let show = false;
	let show2 = false;
	let actualRU = 'Resto U\' Astrolabe';
	function toggleModal() {
		show = !show;
	}

	function toggleModalCity() {
		show2 = !show2;
		if(!show2)toggleModal();
	}

	function changeRU(nomRU, index) {
		actualRU = nomRU;
		idResto = restosId[index];
		titlesHour = [];
		titlesStand = [[]];
		toggleModal();
		load_menu();
	}

	function changeCity(cityName) {
		city = cityName;
		crous = ville_crous[city];
		getRUs();
		toggleModalCity();
	}

	let connectedValue = true;
	connected.subscribe((value) => {
		connectedValue = value;
		console.log(value);
	});
	// Lecture de la valeur
	$: {
		if (!connectedValue) {
			goto("/login");
		}
	}

	let villes = [
		"Rennes - Bretagne",
		"Normandie",
		"Paris",
		"Versailles",
		"Créteil",
		"Amiens",
		"Nantes - Pays de la Loire",
		"Poitiers",
		"Bordeaux - Aquitaine",
		"Toulouse - Occitanie",
		"Montpellier - Occitanie",
		"Limoges",
		"Orléans - Tours",
		"Lille - Nord-Pas-de-Calais",
		"Reims",
		"Lorraine",
		"Strasbourg",
		"Bourgogne - Franche-Comté",
		"Lyon",
		"Clermont - Auvergne",
		"Grenoble - Alpes",
		"Aix - Marseilles - Avignon",
		"Nice - Toulon",
		"Corse",
		"La Réunion",
		"Antilles et Guyane",
	];
	let ville_crous = {
		"Rennes - Bretagne" : "rennes",
		"Normandie" : "normandie",
		"Nantes - Pays de la Loire" : "nantes",
		"Bordeaux - Aquitaine" : "bordeaux",
		"Toulouse - Occitanie" : "toulouse",
		"Montpellier - Occitanie" : "montpellier",
		"Orléans - Tours" : "orleans.tours",
		"Lille - Nord-Pas-de-Calais" : "lille",
		"Lorraine" : "nancy.metz",
		"Bourgogne - Franche-Comté" : "bfc",
		"Clermont - Auvergne" : "clermont.ferrand",
		"Grenoble - Alpes" : "grenoble",
		"Aix - Marseilles - Avignon" : "aix.marseille",
		"Nice - Toulon" : "nice",
		"Corse" : "corse",
		"La Réunion" : "reunion",
		"Antilles et Guyane" : "antilles.guyane",
		"Paris": "paris",
		"Marseille": "aix.marseille",
		"Lyon": "lyon",
		"Toulouse": "toulouse",
		"Nice": "nice",
		"Nantes": "nantes",
		"Montpellier": "montpellier",
		"Strasbourg": "strasbourg",
		"Bordeaux": "bordeaux",
		"Lille": "lille",
		"Rennes": "rennes",
		"Reims": "reims",
		"Le Havre": "normandie",
		"Saint-Étienne": "lyon",
		"Toulon": "nice",
		"Grenoble": "grenoble",
		"Dijon": "bfc",
		"Angers": "nantes",
		"Nîmes": "montpellier",
		"Villeurbanne": "lyon",
		"Saint-Denis": "reunion",
		"Le Mans": "nantes",
		"Aix-en-Provence": "aix.marseille",
		"Clermont-Ferrand": "clermont.ferrand",
		"Brest": "rennes",
		"Tours": "orleans.tours",
		"Limoges": "limoges",
		"Amiens": "amiens",
		"Annecy": "grenoble",
		"Perpignan": "montpellier",
		"Besançon": "bfc",
		"Metz": "nancy.metz",
		"Orléans": "orleans.tours",
		"Rouen": "normandie",
		"Mulhouse": "strasbourg",
		"Caen": "normandie",
		"Nanterre": "paris",
		"Nancy": "nancy.metz",
		"Argenteuil": "paris",
		"Montreuil": "paris",
		"Roubaix": "lille",
		"Tourcoing": "lille",
		"Fort-de-France": "antilles.guyane",
		"Avignon": "aix.marseille",
		"Créteil": "creteil",
		"Poitiers": "poitiers",
		"Courbevoie": "paris",
		"Versailles": "versailles",
		"Colombes": "paris",
		"La Rochelle": "poitiers",
		"Antibes": "nice",
		"Saint-Maur-des-Fossés": "paris",
		"Calais": "lille",
		"Béziers": "montpellier",
		"Bourg-en-Bresse": "lyon",
		"Issy-les-Moulineaux": "paris",
		"Levallois-Perret": "paris",
		"Valence": "grenoble",
		"Drancy": "paris",
		"Quimper": "rennes",
		"Troyes": "reims",
		"Neuilly-sur-Seine": "paris",
		"Noisy-le-Grand": "paris",
		"Antony": "paris",
		"Vénissieux": "lyon",
		"Cergy": "paris",
		"Clichy": "paris",
		"Niort": "poitiers",
		"Pessac": "bordeaux",
		"Chambéry": "grenoble",
		"Montauban": "toulouse",
		"Sarcelles": "paris",
		"Fontenay-sous-Bois": "paris",
		"Épinay-sur-Seine": "paris",
		"Évry": "paris",
		"Chelles": "paris",
		"Meaux": "paris",
		"Villejuif": "paris",
		"Sevran": "paris",
		"Laval": "nantes",
		"Chalon-sur-Saône": "bfc",
		"La Seyne-sur-Mer": "nice",
		"Le Blanc-Mesnil": "paris",
		"Maisons-Alfort": "paris",
		"Pantin": "paris",
		"Charleville-Mézières": "reims",
		"Beauvais": "amiens",
		"Bayonne": "bordeaux",
		"Cholet": "nantes",
		"Ivry-sur-Seine": "paris",
		"Châteauroux": "orleans.tours",
		"Cannes": "nice",
		"La Roche-sur-Yon": "nantes",
		"Hyères": "nice",
		"Évreux": "normandie",
		"Châtellerault": "poitiers",
		"Meudon": "paris",
		"Saint-Quentin": "amiens",
		"Albi": "toulouse",
		"Le Cannet": "nice",
		"Douai": "lille",
		"Noisy-le-Sec": "paris",
		"Tarbes": "toulouse",
		"Salon-de-Provence": "aix.marseille",
		"Gagny": "paris",
		"Villepinte": "paris",
		"Suresnes": "paris",
		"Échirolles": "grenoble",
		"Talence": "bordeaux",
		"Livry-Gargan": "paris",
		"Saint-Herblain": "nantes",
		"Saint-Martin-d'Hères": "grenoble",
		"Saint-Priest": "lyon",
		"Martigues": "aix.marseille",
		"Aubagne": "aix.marseille",
		"Belfort": "bfc",
		"Corbeil-Essonnes": "paris",
		"Brive-la-Gaillarde": "limoges",
		"Saint-Ouen": "paris",
		"Montrouge": "paris",
		"Sainte-Geneviève-des-Bois": "paris",
		"Massy": "paris",
		"Bourgoin-Jallieu": "lyon",
		"Vincennes": "paris",
		"Villefranche-sur-Saône": "lyon",
		"La Courneuve": "paris",
		"Alfortville": "paris",
		"Sète": "montpellier",
		"Gap": "aix.marseille",
		"Bagneux": "paris",
		"Draguignan": "nice",
		"Arras": "lille",
		"Saint-Laurent-du-Var": "nice",
		"Alès": "montpellier",
		"Saint-Germain-en-Laye": "paris",
		"Villeneuve-Saint-Georges": "paris",
		"La Ciotat": "aix.marseille",
		"Angoulême": "limoges",
		"Gennevilliers": "paris",
		"Saint-Malo": "rennes",
		"Cachan": "paris",
		"Montigny-le-Bretonneux": "paris",
		"Aix-les-Bains": "grenoble",
		"Carcassonne": "montpellier",
		"Vitrolles": "aix.marseille",
		"Vaulx-en-Velin": "lyon",
		"Bastia": "corse",
		"Thionville": "nancy.metz",
		"Cavaillon": "aix.marseille",
		"Cambrai": "lille",
		"La Garde": "nice",
		"Saint-Raphaël": "nice",
		"Sainte-Foy-lès-Lyon": "lyon",
		"Bourg-lès-Valence": "grenoble",
		"Franconville": "paris",
		"Agen": "bordeaux",
		"Garges-lès-Gonesse": "paris",
		"Tremblay-en-France": "paris",
		"Liévin": "lille",
		"Saint-Brieuc": "rennes",
		"Le Chesnay": "paris",
		"Saint-Leu": "reunion",
		"Ermont": "paris",
		"Saint-Chamond": "lyon",
		"Athis-Mons": "paris",
		"Roanne": "lyon",
		"Châlons-en-Champagne": "reims",
		"Chatou": "paris",
		"Puteaux": "paris",
		"Savigny-sur-Orge": "paris",
		"Sainte-Marie": "reunion",
		"Haguenau": "strasbourg",
		"Montluçon": "limoges",
		"Conflans-Sainte-Honorine": "paris",
		"Goussainville": "paris",
		"Saint-Dié-des-Vosges": "nancy.metz",
		"Saint-Cloud": "paris",
		"Palaiseau": "paris",
		"Lens": "lille",
		"Villeneuve-la-Garenne": "paris",
		"Villenave-d'Ornon": "bordeaux",
		"Montbéliard": "bfc",
		"Saint-Louis": "strasbourg",
		"Villeparisis": "paris",
		"L'Haÿ-les-Roses": "paris",
		"Châtenay-Malabry": "paris",
		"Saint-Médard-en-Jalles": "bordeaux",
		"Guyancourt": "paris",
		"Yerres": "paris",
		"Houilles": "paris",
		"Eaubonne": "paris",
		"Compiègne": "amiens",
		"Charenton-le-Pont": "paris",
		"Menton": "nice",
		"Villemomble": "paris",
		"Les Ulis": "paris",
		"Sotteville-lès-Rouen": "normandie",
		"La Teste-de-Buch": "bordeaux",
		"Vierzon": "orleans.tours",
		"Montfermeil": "paris",
		"Champigny-sur-Marne": "paris",
		"Plaisir": "paris",
		"Les Mureaux": "paris",
		"Bagnolet": "paris",
		"Carpentras": "aix.marseille",
		"Vienne": "lyon",
		"Schiltigheim": "strasbourg",
		"Saint-Étienne-du-Rouvray": "normandie",
		"Saint-Ouen-l'Aumône": "paris",
		"Périgueux": "bordeaux",
		"Bezons": "paris",
		"Saint-Michel-sur-Orge": "paris",
		"Laon": "amiens",
		"Saumur": "nantes",
		"Aurillac": "limoges",
		"Montigny-lès-Metz": "nancy.metz",
		"Coulommiers": "paris",
		"Élancourt": "paris",
		"La Possession": "reunion",
		"Sannois": "paris",
		"Saint-Dizier": "reims",
		"Champs-sur-Marne": "paris",
		"Creil": "paris",
		"Saint-Gratien": "paris",
		"La Garenne-Colombes": "paris",
		"Dreux": "paris",
		"Clichy-sous-Bois": "paris",
		"Châtillon": "paris",
		"Le Plessis-Robinson": "paris",
		"Les Lilas": "paris",
		"Lambersart": "lille",
		"La Chapelle-sur-Erdre": "nantes",
		"Pierrefitte-sur-Seine": "paris",
		"Villiers-le-Bel": "paris",
		"Saint-Avertin": "orleans.tours",
		"Sartrouville": "paris",
		"Plaisance-du-Touch": "toulouse",
		"Ozoir-la-Ferrière": "paris",
		"Coudekerque-Branche": "lille",
		"Malakoff": "paris",
		"Grigny": "paris",
		"Épernay": "reims",
		"Gif-sur-Yvette": "paris",
		"Vigneux-sur-Seine": "paris",
		"Rillieux-la-Pape": "lyon",
		"Combs-la-Ville": "paris",
		"Lunel": "montpellier",
		"Auch": "toulouse",
		"Oullins": "lyon",
		"L'Isle-sur-la-Sorgue": "aix.marseille",
		"Oyonnax": "bfc",
		"Grasse": "nice",
		"Thiais": "paris"};

	let ip = "";
	let city = "Rennes";
	let crous = "rennes";
	let idResto = "r550";
	let restos = ["Resto U' Astrolabe"];
	let restosId = [];

	function getRUs(){
		const queryParams = new URLSearchParams({ get_ids: true });
		fetch(`https://qx68e2c3ei.execute-api.eu-west-1.amazonaws.com/prod/datagouv/`+crous+`?${queryParams}`)
			.then(res => res.text()).then(res => {
				let test = res;
				var domParser = new DOMParser();
				var doc = domParser.parseFromString(test, 'text/xml');
				let balises = doc.getElementsByTagName("resto");
				restos = [];
				restosId = [];
				for (let i = 0; i < balises.length; i++) {
					if(balises[i].getAttribute("type") === "Restaurant"){
						restosId.push(balises[i].getAttribute("id"));
						restos.push(balises[i].getAttribute("title"));
					}
				}

		})
	}

	onMount(async () => {

		await fetch("https://api.ipify.org?format=json")
				.then(response => response.json())
				.then(data => {
					ip = data.ip;
				}).catch(error => {
					console.log(error);
				});


		await fetch("http://ip-api.com/json/"+ip+"?lang=fr&fields=city")
				.then(response => response.json())
				.then(data => {
					city = data.city;
					crous = ville_crous[city];
					load_menu();
					console.log(city);
					console.log(crous);
				}).catch(error => {
			console.log(error);
		});

		getRUs();
	});

    let titlesHour = [];
    let titlesStand = [[]];
    let mealNames = [[]];
    let plat = "";

    onMount(async () => {

        // Data from previous selection

        // Getting the menu from the API
        var res = await fetch(`https://qx68e2c3ei.execute-api.eu-west-1.amazonaws.com/prod/datagouv/${crous}`);
        res = await res.text();
        var domParser = new DOMParser();
        var menu = domParser.parseFromString(res, 'text/html');

        // Parsing the right restaurant and date in the XML file
        var menuToText = menu.querySelector(`resto[id="${idResto}"]`).querySelector(`menu[date="${actualDate}"]`).innerHTML;
        
        // Cleaning the text
        menuToText = menuToText.substring(12, menuToText.length - 8);
        menuToText = menuToText.replace(/<h2-->/g, '<h2>');
        var doc = domParser.parseFromString(menuToText, 'text/html');
        
        // Initialize titlesStand array with empty arrays
		// Empty all arrays
		titlesHour = [];
		titlesStand = [[]];
		mealNames = [[]];
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
                    //console.log(Array.from(nextNodeMeal.getElementsByTagName("li")).map(item => item.innerHTML));
                    mealNames[i][j] = Array.from(nextNodeMeal.getElementsByTagName("li")).map(item => item.innerHTML).join(" ");
                    console.log(mealNames[i][j]);
                }
                nextNode = nextNode.nextSibling;
            }
            j = 0;
        }

        
        plat = doc.getElementsByTagName('ul')[0].getElementsByTagName('li')[0].innerHTML;
    });
    
	async function load_menu(){

        // Getting the menu from the API
        var res = await fetch(`https://qx68e2c3ei.execute-api.eu-west-1.amazonaws.com/prod/datagouv/${crous}`);
        res = await res.text();
        var domParser = new DOMParser();
        var menu = domParser.parseFromString(res, 'text/html');

        // Parsing the right restaurant and date in the XML file
        var menuToText = menu.querySelector(`resto[id="${idResto}"]`).querySelector(`menu[date="${actualDate}"]`).innerHTML;
        
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
                    //console.log(Array.from(nextNodeMeal.getElementsByTagName("li")).map(item => item.innerHTML));
                    mealNames[i][j] = Array.from(nextNodeMeal.getElementsByTagName("li")).map(item => item.innerHTML).join(" ");
                }
                nextNode = nextNode.nextSibling;
            }
            j = 0;
        }

        
        plat = doc.getElementsByTagName('ul')[0].getElementsByTagName('li')[0].innerHTML;
	}
	
</script>

<main>
	<div class="center" style="margin-top: -50px">
		<ButtonGroup>
			<Button on:click={
						() => {
							if(indexDate === 0){
								today = new Date();
								actualDate = today.toISOString().split('T')[0];
								today = today.toLocaleDateString('fr-FR', options);
								titlesHour = [];
								titlesStand = [[]];
								mealNames = [[]];
								load_menu();
							}
							else if(indexDate === 1){
								today = new Date();
								actualDate = today.toISOString().split('T')[0];
								today = today.toLocaleDateString('fr-FR', options);
								indexDate = 0;
								titlesHour = [];
								titlesStand = [[]];
								mealNames = [[]];
								load_menu();
							}
							else if(indexDate === 2){
								today = new Date();
								today.setDate(today.getDate() + 1);
								actualDate = today.toISOString().split('T')[0];
								today = today.toLocaleDateString('fr-FR', options);
								indexDate = 1;
								titlesHour = [];
								titlesStand = [[]];
								mealNames = [[]];
								load_menu();
							}
						}
					} ghost color="dark" ><Icon name="chevron-left"/></Button>
			<p style="margin-top: 15px">{today}</p>
			<Button on:click={
						() => {
							if(indexDate === 0){
								today = new Date();
								today.setDate(today.getDate() + 1);
								actualDate = today.toISOString().split('T')[0];
								today = today.toLocaleDateString('fr-FR', options);
								indexDate = 1;
								titlesHour = [];
								titlesStand = [[]];
								mealNames = [[]];
								load_menu();
							}
							else if(indexDate === 1){
								today = new Date();
								today.setDate(today.getDate() + 2);
								actualDate = today.toISOString().split('T')[0];
								today = today.toLocaleDateString('fr-FR', options);
								indexDate = 2;
								titlesHour = [];
								titlesStand = [[]];
								mealNames = [[]];
								load_menu();
							}
							else if(indexDate === 2){
								today = new Date();
								today.setDate(today.getDate() + 2);
								actualDate = today.toISOString().split('T')[0];
								today = today.toLocaleDateString('fr-FR', options);
								indexDate = 2;
								titlesHour = [];
								titlesStand = [[]];
								mealNames = [[]];
								load_menu();
							}
						}
					} ghost color="dark"><Icon name="chevron-right"/></Button>
		</ButtonGroup>
	</div>
		<span class="flex center" style="margin-top: -20px">
			<Icon name="map-pin" style="margin-right: 5px; margin-bottom: 5px"/>
			<h3 style="margin-right: 5px; margin-top: 15px">{city}</h3>
			<Button size="sm"><Icon name="replace" on:click={() =>(toggleModalCity())} /></Button>
			<Popover trigger="hover" placement="right">
			<PopoverBody>Changer de Crous</PopoverBody>
</Popover>
		</span>

		<div class="center XS" style="margin-bottom: -10px"><Status color="danger"><Dot color="danger" animated />Affluence élevée</Status></div>
		<span class="flex center"><h1 style="margin-right: 5px; margin-top: 10px">{actualRU}</h1>
		<Button size="md"><Icon name="replace" on:click={() =>(toggleModal())} /></Button>
			<Popover trigger="hover" placement="right">
			<PopoverBody>Changer de RU</PopoverBody>
</Popover>
		<!--<Button style="margin-left: 2%;" size="lg" class="{current === 'insa' ? 'selected' : ''}"
        on:click="{() => current = 'insa'}">INSA</Button>
        <Button style="margin-left: 2%;" size="lg" class="{current === 'metro' ? 'selected' : ''}"
        on:click="{() => current = 'metro'}">Métronome</Button>*/-->
		</span>


	<Modal size="lg" scrollable backdrop={false} placement="center" bind:show={show}>
		<ModalHeader>
			<ModalTitle style="width: 100%">
				<p style="text-align: center">Choisissez votre RU</p>
			</ModalTitle>
		</ModalHeader>
		<ModalBody class="center">
			{#each restos as ru, index}
				<Button color="info" on:click={() =>(changeRU(ru, index))} style="margin-bottom: 5px">
					{ru}
				</Button>
				<br>
			{/each}
		</ModalBody>
	</Modal>

	<Modal size="lg" scrollable backdrop={false} placement="center" bind:show={show2}>
		<ModalHeader>
			<ModalTitle style="width: 100%">
				<p style="text-align: center">Choisissez votre Crous</p>
			</ModalTitle>
		</ModalHeader>
		<ModalBody class="center">
			{#each villes as city}
				<Button color="info" on:click={() =>(changeCity(city))} style="margin-bottom: 5px">
					{city}
				</Button>
				<br>
			{/each}
		</ModalBody>
	</Modal>

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

<style>
	:global(.stand1) {
		width: 150px;
		font-size: 2em;
		margin-top: 3%;
	}
	:global(.stand2) {
		width: 150px;
		font-size: 2em;
		margin-top: 1%;
	}
	:global(.stand3) {
		width: 150px;
		font-size: 2em;
		margin-top: 1%;
	}
	:global(.pencil) {
		margin-top: 2%;
		margin-left: 1%;
		width: 5%;
		height: 10%;
	}
	:global(.selected) {
		background-color: #00cc33;
		color: white;
	}
</style>