<script>
	import { Card, CardBody, CardTitle, CardMedia, El} from 'yesvelte'
	import { Button, ButtonGroup } from 'yesvelte'
</script>

<main>
	<El colLg="8" colMd="10" offsetLg="2" offsetMd="1">
		<Card borderless>
			<ButtonGroup vertical>
				<Button color="primary" size="lg" href = "../add_meal"> Modifier un stand</Button>
				<Button color="secondary" size="lg">Changer de RU</Button>
				<Button href = "/stands">
					STAND 1
				</Button>
				<Button href = "/stands">
					STAND 2
				</Button>
				<Button href = "/stands">
					STAND 3
				</Button>
			</ButtonGroup>
		</Card>
	</El>
</main>