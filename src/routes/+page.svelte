<script>
	import {El, Icon, Label, Popover, PopoverBody, PopoverHeader} from 'yesvelte'
	import { Button, ButtonGroup } from 'yesvelte'
	import TempsQueue from "./queue/TempsQueue.svelte";
	let current = 'astro'
	let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	let today  = new Date();
	let tomorrow = new Date(today);
	tomorrow.setDate(today.getDate() + 1);
	let aftertomorrow = new Date(tomorrow);
	aftertomorrow.setDate(tomorrow.getDate() + 1);
	tomorrow = tomorrow.toLocaleDateString('fr-FR', options);
	aftertomorrow = aftertomorrow.toLocaleDateString('fr-FR', options);
	today = today.toLocaleDateString('fr-FR', options);
	class Plat {
		constructor(nom, descr) {
			this.nom = nom;
			this.description = descr;
		}
		
	}
	let plat1 = new Plat("hamburger", "c'est bon hein");
	let plat2 = new Plat("haricot", "c'est bon hein");
	let plat3 = new Plat("potimaron", "c'est bon hein");
	let currentTime = 10;
	let nbrQueue = {
		10 : 0,
		20 : 0,
		30 : 1,
		40 : 1,
		50 : 2,
		60 : 3,
		70 : 4,
		80 : 3,
		90 : 2,
		100 : 1,
		110 : 1
	};
</script>

<main>
	<El col class="XS">
		<span class="flex center"><h1 style="margin-right: 5px; margin-top: 10px">Astrolabe</h1>
		<Button size="md"><Icon name="replace" /></Button>
			<Popover trigger="hover" placement="right">
			<PopoverBody>Changer de RU</PopoverBody>
</Popover>
		<!--<Button style="margin-left: 2%;" size="lg" class="{current === 'insa' ? 'selected' : ''}"
        on:click="{() => current = 'insa'}">INSA</Button>
        <Button style="margin-left: 2%;" size="lg" class="{current === 'metro' ? 'selected' : ''}"
        on:click="{() => current = 'metro'}">Métronome</Button>*/-->
		</span>
	</El>
	<El container class="center">
		<El col style="margin-top: 2vh">
			<Label>{today}</Label>
		</El>
			<El col>
				<ButtonGroup>
					<Button on:click={
						() => {
							today = new Date();
							today = today.toLocaleDateString('fr-FR', options);
						}
					}>Aujourd'hui</Button>
					<Button on:click={
						() => {
							today = tomorrow;
						}
					}>Demain</Button>
					<Button on:click={
						() => {
							today = aftertomorrow;
						}
					}>Après-demain</Button>
				</ButtonGroup>
			</El>


		
	</El>

	

	

		<El container class="center">
			<El row>
				<El col>
					<Button class="stand1" color="primary" href="/stands/{plat1.nom}">
						STAND 1
					</Button>
					<!--<Button class="pencil" color="green" href = "../add_meal"><Icon name="pencil"/></Button>-->
				</El>
			</El>
			<El row>
				<El col>
					<Button class="stand2" color="primary" href="/stands/{plat2.nom}">
						STAND 2
					</Button>
					<!--<Button class="pencil" color="green" href = "../add_meal"><Icon name="pencil"/></Button>-->
				</El>
			</El>
			<El row>
				<El col>
					<Button class="stand3" color="primary" href="/stands/{plat3.nom}">
						STAND 3
					</Button>
					<!--<Button class="pencil" color="green" href = "../add_meal"><Icon name="pencil"/></Button>-->
				</El>
			</El>
		</El>
	<div class="center" style="margin-top: 30px; position:relative;">
	<TempsQueue
			data={nbrQueue}
			nomRU=""
			time={currentTime}
			sizeY="200"
			sizeX="400"/>
		<a href="/queue">Queues aux autres RU</a>
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