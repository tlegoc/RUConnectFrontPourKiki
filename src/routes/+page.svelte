<script>
	import { El, Label} from 'yesvelte'
	import { Button, ButtonGroup } from 'yesvelte'
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
	
</script>

<main>
	
	<El container class="center">
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
			<El col style="margin-top: 2vh">
				<Label>{today}</Label>
			</El>
			<El col class="XS">
				<Button size="lg" class="{current === 'astro' ? 'selected' : ''}"
				on:click="{() => current = 'astro'}">Astrolabe</Button>
				<Button style="margin-left: 2%;" size="lg" class="{current === 'insa' ? 'selected' : ''}"
				on:click="{() => current = 'insa'}">INSA</Button>
				<Button style="margin-left: 2%;" size="lg" class="{current === 'metro' ? 'selected' : ''}"
				on:click="{() => current = 'metro'}">Métronome</Button>
			</El>
		
	</El>

	

	

		<El container class="center">
			<El row>
				<El col>
					<Button class="stand1" color="primary" href="/stands">
						STAND 1
					</Button>
					<!--<Button class="pencil" color="green" href = "../add_meal"><Icon name="pencil"/></Button>-->
				</El>
			</El>
			<El row>
				<El col>
					<Button class="stand2" color="primary" href="/stands">
						STAND 2
					</Button>
					<!--<Button class="pencil" color="green" href = "../add_meal"><Icon name="pencil"/></Button>-->
				</El>
			</El>
			<El row>
				<El col>
					<Button class="stand3" color="primary" href="/stands">
						STAND 3
					</Button>
					<!--<Button class="pencil" color="green" href = "../add_meal"><Icon name="pencil"/></Button>-->
				</El>
			</El>
		</El>
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