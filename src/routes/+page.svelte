<script>
	import { Card, CardBody, CardTitle, CardMedia, El} from 'yesvelte'
	import { Button, ButtonGroup, Icon } from 'yesvelte'
	class Plat {
		constructor(nom, descr) {
			this.nom = nom;
			this.description = descr;
		}
		
	}
	let plat1 = new Plat("hamburger", "c'est bon hein");
	let plat2 = new Plat("haricot", "c'est bon hein");
	let plat3 = new Plat("potimaron", "c'est bon hein");
</script>

<main>

	<Button style="margin-left: 2%;"color="secondary" size="lg">Changer de RU</Button>

		<El container>
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
</main>

<style>
	:global(.stand1) {
		width: 45%;
		font-size: 2em;
		margin-top: 3%;
		margin-left: 2%;
	}
	:global(.stand2) {
		width: 45%;
		font-size: 2em;
		margin-top: 1%;
		margin-left: 2%;
	}
	:global(.stand3) {
		width: 45%;
		font-size: 2em;
		margin-top: 1%;
		margin-left: 2%;
	}
	:global(.pencil) {
		margin-top: 2%;
		margin-left: 1%;
		width: 5%;
		height: 10%;
	}
</style>