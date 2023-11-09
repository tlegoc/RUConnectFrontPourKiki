<script>
	import { Card, CardBody, CardTitle, CardMedia, El} from 'yesvelte'
	import { goto } from '@app/navigation';
	import { Button, ButtonGroup } from 'yesvelte'


	function goTo() {
		goto("/platSelect")
	}
	
</script>


<El colLg="8" colMd="10" offsetLg="2" offsetMd="1">
	<Card>
		<CardMedia elementPosition="top">
			<img
				src="https://preview.tabler.io/static/photos/home-office-desk-with-macbook-iphone-calendar-watch-and-organizer.jpg"
				alt="" />
		</CardMedia>
		<CardBody>
			<!--  -->
		</CardBody>
	</Card>
</El>
<Card>
	<Button color="primary" size="lg">Ajouter Plat</Button>
	<Button color="secondary" size="lg">Changer ru</Button>

</Card>




<Card borderless>
	<ButtonGroup vertical>
		<Button>PLAT 1</Button>
		<Button>PLAT 2</Button>
		<Button>PLAT 3</Button>
	</ButtonGroup>
</Card>