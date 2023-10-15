<script>
	// Importing components from 'yesvelte'
	import { Button, Icon, El, Label, Offcanvas, OffcanvasBody, OffcanvasHeader, Floating, FormInput } from "yesvelte";
	import { writable } from "svelte/store";

	// Actual value being modified
	let modifiedValue

	// Boolean flag to control the visibility of the Offcanvas
	let show = false

	// Input value for the Autocomplete component
	let value = ''

	// Index for changing ingredients
	let i = 0

	// Flag to indicate if we display the create ingredient input
	let showCreate = false

	// List of available ingredients
	let items = ['Hamburger', 'Frites', 'Pâtes', 'Chili', 'Cazoulette Cendrée']

	// Flag to indicate whether we are adding or modifying an ingredient
	let modify = false

	// ID for tracking the current ingredient being modified for each Stand (Stand 1, Stand 2, Stand 3)
	let Ingredient_id1 = writable([]);
	let Ingredient_id2 = writable([]);
	let Ingredient_id3 = writable([]);

	// ID for tracking the current ingredient being modified for the Offcanvas
	let food_id = writable([]);

	// Function adding or changing ingredient
	function makeIngredient(modifiedValue){
		if (modify == false) {
			addIngredient(food_id);
		} else {
			changeIngredient(food_id, modifiedValue);
		}
	}

	// Function to add an Ingredient
	function addIngredient(idIngredient) {
		idIngredient.update((IngredientIds) => {
			if(!IngredientIds.includes(value)){
				return [...IngredientIds, value];
			} else {
				return IngredientIds;
			}
		});

		show = false;
	}

	// Function to change an ingredient
	function changeIngredient(idIngredient, modifiedValue) {
		idIngredient.update((IngredientIds) => {
			if(!IngredientIds.includes(value)){
				for(i=0; i < IngredientIds.length;i++){
					if(IngredientIds[i]==modifiedValue){
						IngredientIds[i]=value;
					}
				}
			}
			return IngredientIds;
		});

		show = false;
	}

	// Function to delete an Ingredient
	function deleteIngredient(idIngredient, food_value) {
		idIngredient.update((IngredientIds) => {
			return IngredientIds.filter((IngredientId_filter) => IngredientId_filter !== food_value);
		});
	}

	// Function to create an Ingredient
	function createIngredient() {
		if(!items.includes(value)){
			items.push(value);
			addIngredient(food_id);
			document.getElementById("add_toIngredients").style.display = "none";
		}
	}

	// Function to display or not the input for creating ingredients
	function showCreate_Ingredients(){
		if(showCreate){
			document.getElementById("add_toIngredients").style.display = "inline";
		}else{
			document.getElementById("add_toIngredients").style.display = "none";
		}
	}
</script>

<main>
	<El container>
		<El row>

			<!-- Stand 1 -->
			<Label>Stand 1</Label>
			{#each $Ingredient_id1 as idIngredient1 (idIngredient1)}
				<Button color="blue" on:click={() => (modify = true, show = !show, modifiedValue=idIngredient1, showCreate=false, showCreate_Ingredients())}>
					{idIngredient1}
				</Button>
				<Button color="red" on:click={() => (food_id=Ingredient_id1, deleteIngredient(food_id, idIngredient1))}>
					<Icon name="trash" />
				</Button>
			{/each}

			<!-- Button to add an ingredient for Stand 1 -->
			<div id="Ingredient_add">
				<Button color="secondary" on:click={() => (show = !show, modify = false, food_id=Ingredient_id1, showCreate=false, showCreate_Ingredients())}>
					<Icon name="plus" />Ajouter un Ingredient
				</Button>
			</div>

			<!-- Stand 2 -->
			<Label>Stand 2</Label>
			{#each $Ingredient_id2 as idIngredient2 (idIngredient2)}
				<Button color="blue" on:click={() => (modify = true, show = !show, modifiedValue=idIngredient2, showCreate=false, showCreate_Ingredients())}>
					{idIngredient2}
				</Button>
				<Button color="red" on:click={() => (food_id=Ingredient_id2, deleteIngredient(food_id, idIngredient2))}>
					<Icon name="trash" />
				</Button>
			{/each}

			<!-- Button to add an ingredient for Stand 2 -->
			<div id="Ingredient_add">
				<Button color="secondary" on:click={() => (show = !show, modify = false, food_id=Ingredient_id2, showCreate=false, showCreate_Ingredients())}>
					<Icon name="plus" />Ajouter un Ingredient
				</Button>
			</div>

			<!-- Stand 3 -->
			<Label>Stand 3</Label>
			{#each $Ingredient_id3 as idIngredient3 (idIngredient3)}
				<Button color="blue" on:click={() => (modify = true, show = !show, modifiedValue=idIngredient3, showCreate=false, showCreate_Ingredients())}>
					{idIngredient3}
				</Button>
				<Button color="red" on:click={() => (food_id=Ingredient_id3, deleteIngredient(food_id, idIngredient3))}>
					<Icon name="trash" />
				</Button>
			{/each}

			<!-- Button to add an ingredient for Stand 3 -->
			<div id="Ingredient_add">
				<Button color="secondary" on:click={() => (show = !show, modify = false, food_id=Ingredient_id3, showCreate=false, showCreate_Ingredients())}>
					<Icon name="plus" />Ajouter un Ingredient
				</Button>
			</div>
		</El>
	</El>

	<Offcanvas placement="end" bind:show>   
		<OffcanvasHeader title="Ajouter un ingrédient" />
		<OffcanvasBody>
			{#each items as item (item)}
				<Button color="blue" on:click={() =>(value=item, makeIngredient(food_id, modifiedValue))}>
					{item}
				</Button>
			{/each}

			<!-- Button to create a new ingredient -->
			<Button color="secondary" on:click={() =>(showCreate=true, showCreate_Ingredients())}>
				<Icon name="plus" />Créer un Ingredient
			</Button>

			<!-- Input field to create a new ingredient -->
			<div id="add_toIngredients">
				<Floating>
					<FormInput id="createInput" placeholder="Créer un Ingredient" bind:value>
						<Button slot="end" color="green" on:click={() =>(createIngredient())}>Envoyer</Button>
					</FormInput>
				</Floating>
			</div>
		</OffcanvasBody>
	</Offcanvas>
</main>
