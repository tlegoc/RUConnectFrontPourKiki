<script>
	import { Button, Icon, El, Offcanvas, OffcanvasBody, OffcanvasHeader, Autocomplete   } from 'yesvelte'
    let show = false

	let items = ['Hamburger', 'Frites', 'Pâtes', 'Chili', 'Cazoulette Cendrée']
	let value = ''
	let buttonCount = 0
	let buttons = []
	let choosen_food = ''
	
	function createButton() {
		buttonCount += 1
		buttons.push(buttonCount)
		show = false
	}

</script>

<El container>
	<El row rowCols="1">
		{#each buttons as button (button)}
			<Button color="green">Button {button}</Button>
		{/each}
		<Button color="secondary" on:click={() => (show = !show)}>
			<Icon name="plus" />Ajouter un ingrédient
		</Button>
	</El>
</El>

<Offcanvas bind:show>   
	<OffcanvasHeader title="Ajouter un ingrédient" />
	<OffcanvasBody>
        <Autocomplete {items} bind:value placeholder="Choisissez un ingrédient"
		on:changed={() => (createButton())}>
	</Autocomplete>
	</OffcanvasBody>
</Offcanvas>