<script>
	// Importing components from 'yesvelte'
	import { Button, Icon, El, Label, Offcanvas, OffcanvasBody, OffcanvasHeader, Autocomplete } from "yesvelte";
	import { writable } from "svelte/store";

	// Count of currently displayed buttons
	let buttonCount = 0;

	// Count of the currently modified button
	let buttonCountModify = 0;

	// Boolean flag to control the visibility of the Offcanvas
	let show = false

	// Input value for the Autocomplete component
	let value = ''

	// List of available ingredients
	let items = ['Hamburger', 'Frites', 'Pâtes', 'Chili', 'Cazoulette Cendrée']

	// Flag to indicate whether we are adding or modifying an ingredient
	let modify = false

	// ID for tracking the current ingredient being modified
	let Ingredient_id1 = writable([]);
	let Ingredient_id2 = writable([]);
	let Ingredient_id3 = writable([]);
	
	// ID for tracking the current ingredient being modified
	let food_id = writable([]);

	// Function to add a Ingredient
	function addIngredient(idIngredient) {
		idIngredient.update((IngredientIds) => {
			buttonCount += 1;
			const newId = `Ingredient_added${buttonCount}`;
			return [...IngredientIds, newId];
		});

		if (buttonCount >= 3) {
			document.getElementById("Ingredient_add").style.display = "none";
		}
	}

	// Function to change an ingredient (not currently used in the code)
	function changeIngredient(idIngredient) {
		idIngredient[buttonCountModify] = value
		show = false
	}

	// Function to delete an Ingredient
	function deleteIngredient(idIngredient) {
		idIngredient.update((IngredientIds) => {
			buttonCount -= 1;
			return IngredientIds.filter((IngredientId_filter) => IngredientId_filter !== idIngredient);
		});

		if (buttonCount < 3) {
			document.getElementById("Ingredient_add").style.display = "inline";
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
		<El row>

			<!-- Stand 1 -->
			<Label>Stand 1</Label>
			{#each $Ingredient_id1 as idIngredient1 (idIngredient1)}
				<Button color="blue">
					{idIngredient1}
				</Button>
				<Button color="red" on:click={() => (food_id=Ingredient_id1, deleteIngredient(food_id))}>
					<Icon name="trash" />
				</Button>
			{/each}
			<!-- Button to add a Ingredient -->
			<div id="Ingredient_add">
				<Button color="secondary" on:click={() => (show = !show, modify = false, food_id=Ingredient_id1)}>
					<Icon name="plus" />Ajouter un Ingredient
				</Button>
			</div>

			<!-- Stand 2 -->
			<Label>Stand 2</Label>
			{#each $Ingredient_id2 as idIngredient2 (idIngredient2)}
				<Button color="blue">
					{idIngredient2}
				</Button>
				<Button color="red" on:click={() => deleteIngredient(idIngredient2)}>
					<Icon name="trash" />
				</Button>
			{/each}
			<!-- Button to add a Ingredient -->
			<div id="Ingredient_add">
				<Button color="secondary" on:click={() => (show = !show, modify = false)}>
					<Icon name="plus" />Ajouter un Ingredient
				</Button>
			</div>

			<!-- Stand 3 -->
			<Label>Stand 3</Label>
			{#each $Ingredient_id3 as idIngredient3 (idIngredient3)}
				<Button color="blue">
					{idIngredient3}
				</Button>
				<Button color="red" on:click={() => deleteIngredient(idIngredient3)}>
					<Icon name="trash" />
				</Button>
			{/each}
			<!-- Button to add a Ingredient -->
			<div id="Ingredient_add">
				<Button color="secondary" on:click={() => (show = !show, modify = false)}>
					<Icon name="plus" />Ajouter un Ingredient
				</Button>
			</div>
		</El>
	</El>

	<Offcanvas placement="bottom" bind:show>   
		<OffcanvasHeader title="Ajouter un ingrédient" />
		<OffcanvasBody>
			<Autocomplete on:created={onCreated} create {items} bind:value placeholder="Choisissez un ingrédient"
			on:changed={() => {
				if (modify == false) {
					addIngredient(food_id);
				} else {
					changeIngredient(food_id);
				}}}>
			</Autocomplete>
		</OffcanvasBody>
	</Offcanvas>
</main>

<style>
</style>
