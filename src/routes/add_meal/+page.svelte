<script>
	// Importing components from 'yesvelte'
	import { Button, Icon, El } from 'yesvelte'

	// Input value for the Autocomplete component
	let value = ''

	// Count of currently displayed buttons
	let buttonCount = 0

	// Array to store ingredient buttons
	let buttons = []

	// ID for tracking the current ingredient being modified
	let stand_id = ''

	let showStand1 = false;
	let showStand2 = false;
	let showStand3 = false;
	
	// Function to add a stand
	function addStand() {
		buttons[buttonCount] = value // Add the ingredient to the buttons array
		stand_id = "stand_added"
		stand_id += buttonCount // Generate a unique ID for the ingredient button
		document.getElementById(stand_id).style.display = "inline"; // Display the ingredient button
		buttonCount += 1 // Increment the button count
		if(buttonCount == 3){
			document.getElementById("stand_add").style.display = "none"; // Hide the "Ajouter un ingrédient" button if 3 ingredients are added
		}
		else if (buttonCount > 0){
			document.getElementById("delete_stand").style.display = "inline"; // Display the "Supprimer l'ingrédient" button if there are ingredients
		}
	}

	// Function to delete an stand
	function deleteStand(){
		buttonCount -= 1 // Decrement the button count
		stand_id = "stand_added"
		stand_id += buttonCount // Generate the ID of the ingredient being deleted
		document.getElementById(stand_id).style.display = "none"; // Hide the ingredient button
		if(buttonCount == 2){
			document.getElementById("stand_add").style.display = "inline"; // Display the "Ajouter un ingrédient" button if 2 ingredients are left
		}
		else if (buttonCount == 0){
			document.getElementById("delete_stand").style.display = "none"; // Hide the "Supprimer l'ingrédient" button if no ingredients are left
		}
	}
</script>

<main>
<El container>
	<El row rowCols="1">

		<!-- First stand -->
		<div id="stand_added0">
			<Button class="button" color="green">
				<a href="/add_meal/add_ingredients">Stand 1</a>
			</Button>
		</div>

		<!-- Second stand -->
		<div id="stand_added1">
			<Button class="button" color="green">
				<a href="/add_meal/add_ingredients">Stand 2</a>
			</Button>
		</div>

		<!-- Third stand -->
		<div id="stand_added2">
			<Button class="button" color="green">
				<a href="/add_meal/add_ingredients">Stand 3</a>
			</Button>
		</div>

		<!-- Button to add a stand -->
		<div id="stand_add">
		<Button color="secondary" on:click={() => (addStand())}>
			<Icon name="plus" />Ajouter un stand
		</Button>
		</div>
	</El>

	<!-- Button to delete a stand -->
	<div id="delete_stand">
		<Button outline color="red" on:click={() => (deleteStand())}>Supprimer le stand</Button>
	</div>

</El>

</main>

<style>
	div#delete_stand {
		display: none; /* Initially hide the "Supprimer l'ingrédient" button */
	}

	div#stand_added0 {
		display: none; /* Initially hide the first ingredient button */
	}
	div#stand_added1 {
		display: none; /* Initially hide the second ingredient button */
	}
	div#stand_added2 {
		display: none; /* Initially hide the third ingredient button */
	}
</style>