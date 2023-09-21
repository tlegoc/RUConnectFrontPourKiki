<script>
	import { Card, CardBody, CardTitle, CardMedia, El} from 'yesvelte'
	import { goto } from '@app/navigation';
	import { Button, ButtonGroup } from 'yesvelte'


	function goTo() {
		goto("/platSelect")
	}
	
</script>



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