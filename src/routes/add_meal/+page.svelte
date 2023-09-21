<script>
	import { goto } from '$app/navigation';
	import { Button, Icon, El} from 'yesvelte'
	export let stand_number1 = 1;
	export let stand_number2 = 2;
	export let stand_number3 = 3;

	function goTo() {
		goto('/add_meal/add_ingredients');
	}

</script>

<El container>
	<El row rowCols="1">
		<El col>
			<Button color="azure" on:click={goTo}>
				Stand {stand_number1}
			</Button>
		</El>
		<El col>
			<Button color="secondary">
				<Icon name="plus" />Ajouter un plat
			</Button>
		</El>
	</El>
</El>
