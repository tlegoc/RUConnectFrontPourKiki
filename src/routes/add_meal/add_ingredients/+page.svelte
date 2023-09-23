<script>
	import { Button, Icon, El, Offcanvas, OffcanvasBody, OffcanvasHeader, Autocomplete   } from 'yesvelte'
    let show = false

	let items = ['Hamburger', 'Frites', 'Pâtes', 'Chili', 'Cazoulette Cendrée']
	let value = ''
	let buttonCount = 0
	let buttonCountModify = 0
	let buttons = []
	let food_id = ''
	let modify = false
	
	function addIngredient() {
		buttons[buttonCount] = value
		show = false
		food_id = "food_added"
		food_id += buttonCount
		console.log(food_id)
		document.getElementById(food_id).style.display = "inline";
		buttonCount += 1
		if(buttonCount == 3){
			document.getElementById("food_add").style.display = "none";
		}
		else if (buttonCount > 0){
			document.getElementById("delete_food").style.display = "inline";
		}
	}

	function changeIngredient() {
		buttons[buttonCountModify] = value
		show = false
	}

	function deleteIngredient(){
		buttonCount -= 1
		food_id = "food_added"
		food_id += buttonCount
		console.log(food_id)
		document.getElementById(food_id).style.display = "none";
		if(buttonCount == 2){
			document.getElementById("food_add").style.display = "inline";
		}
		else if (buttonCount == 0){
			document.getElementById("delete_food").style.display = "none";
		}
	}

</script>
<El container>
	<El row rowCols="1">

		<div id="food_added0">
		<Button id="food_added0" class="button" color="green" on:click={() => (show = !show, modify = true, buttonCountModify = 0)}>
			{buttons[0]}
		</Button>
		</div>

		<div id="food_added1">
			<Button class="button" color="green" on:click={() => (show = !show, modify = true, buttonCountModify = 1)}>
				{buttons[1]}
			</Button>
		</div>

		<div id="food_added2">
				<Button class="button" color="green" on:click={() => (show = !show, modify = true, buttonCountModify = 2)}>
					{buttons[2]}
				</Button>
		</div>

		<div id="food_add">
		<Button color="secondary" on:click={() => (show = !show, modify = false)}>
			<Icon name="plus" />Ajouter un ingrédient
		</Button>
		</div>
	</El>
		<div id="delete_food">
			<Button outline color="red" on:click={() => (deleteIngredient())}>Supprimer l'ingrédient</Button>
		</div>
</El>

<Offcanvas placement="bottom" bind:show>   
	<OffcanvasHeader title="Ajouter un ingrédient" />
	<OffcanvasBody>
        <Autocomplete {items} bind:value placeholder="Choisissez un ingrédient"
		on:changed={() => {
			if (modify == false) {
				addIngredient();
			} else {
				changeIngredient();
			}}}>
	</Autocomplete>
	</OffcanvasBody>
</Offcanvas>

<style>

div#delete_food {
	display: none;
}

div#food_added0 {
    display: none;
}
div#food_added1 {
    display: none;
}
div#food_added2 {
    display: none;
}
</style>