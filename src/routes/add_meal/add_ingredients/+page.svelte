<script>
	// Importing components from 'yesvelte'
	import { Button, Icon, El, Offcanvas, OffcanvasBody, OffcanvasHeader, Autocomplete, Alert } from 'yesvelte'

	// Boolean flag to control the visibility of the Offcanvas
	let show = false

	// List of available ingredients
	let items = ['Hamburger', 'Frites', 'Pâtes', 'Chili', 'Cazoulette Cendrée']

	// Input value for the Autocomplete component
	let value = ''

	// Count of currently displayed buttons
	let buttonCount = 0

	// Index of the button being modified
	let buttonCountModify = 0

	// Array to store ingredient buttons
	let buttons = []

	// ID for tracking the current ingredient being modified
	let food_id = ''

	// Flag to indicate whether we are adding or modifying an ingredient
	let modify = false

	export let actualId;
	
	// Function to add an ingredient
	function addIngredient() {
		buttons[buttonCount] = value // Add the ingredient to the buttons array
		show = false // Hide the Offcanvas
		food_id = "food_added"
		food_id += buttonCount // Generate a unique ID for the ingredient button
		document.getElementById(food_id).style.display = "inline"; // Display the ingredient button
		toggle();
		buttonCount += 1 // Increment the button count
		if(buttonCount == 3){
			document.getElementById("food_add").style.display = "none"; // Hide the "Ajouter un ingrédient" button if 3 ingredients are added
		}
		else if (buttonCount > 0){
			document.getElementById("delete_food").style.display = "inline"; // Display the "Supprimer l'ingrédient" button if there are ingredients
		}
	}

	// Function to change an ingredient (not currently used in the code)
	function changeIngredient() {
		buttons[buttonCountModify] = value
		show = false
	}

	// Function to delete an ingredient
	function deleteIngredient(){
		buttonCount -= 1 // Decrement the button count
		food_id = "food_added"
		food_id += buttonCount // Generate the ID of the ingredient being deleted
		document.getElementById(food_id).style.display = "none"; // Hide the ingredient button
		if(buttonCount == 2){
			document.getElementById("food_add").style.display = "inline"; // Display the "Ajouter un ingrédient" button if 2 ingredients are left
		}
		else if (buttonCount == 0){
			document.getElementById("delete_food").style.display = "none"; // Hide the "Supprimer l'ingrédient" button if no ingredients are left
		}
	}

	function onCreated({ detail }) {
  		value = detail;
  		items = [...items, detail];
		addIngredient();
	}
</script>

<main>
<El container>
	<El row rowCols="1">

		<p>{actualId}</p>
		<!-- First ingredient -->
		<div id="food_added0">
			<Button id="food_added0" class="button" color="green" on:click={() => (show = !show, modify = true, buttonCountModify = 0)}>
				{buttons[0]}
			</Button>
		</div>

		<!-- Second ingredient -->
		<div id="food_added1">
			<Button class="button" color="green" on:click={() => (show = !show, modify = true, buttonCountModify = 1)}>
				{buttons[1]}
			</Button>
		</div>

		<!-- Third ingredient -->
		<div id="food_added2">
			<Button class="button" color="green" on:click={() => (show = !show, modify = true, buttonCountModify = 2)}>
				{buttons[2]}
			</Button>
		</div>

		<!-- Button to add ingredient -->
		<div id="food_add">
		<Button color="secondary" on:click={() => (show = !show, modify = false)}>
			<Icon name="plus" />Ajouter un ingrédient
		</Button>
		</div>
	</El>

	<!-- Button to delete ingredient -->
	<div id="delete_food">
		<Button outline color="red" on:click={() => (deleteIngredient())}>Supprimer l'ingrédient</Button>
	</div>

</El>

<Offcanvas placement="bottom" bind:show>   
	<OffcanvasHeader title="Ajouter un ingrédient" />
	<OffcanvasBody>
		<Autocomplete on:created={onCreated} create {items} bind:value placeholder="Choisissez un ingrédient"
		on:changed={() => {
			if (modify == false) {
				addIngredient();
			} else {
				changeIngredient();
			}}}>
		</Autocomplete>
	</OffcanvasBody>
</Offcanvas>
</main>

<style>
	div#delete_food {
		display: none; /* Initially hide the "Supprimer l'ingrédient" button */
	}

	div#food_added0 {
		display: none; /* Initially hide the first ingredient button */
	}
	div#food_added1 {
		display: none; /* Initially hide the second ingredient button */
	}
	div#food_added2 {
		display: none; /* Initially hide the third ingredient button */
	}
</style>