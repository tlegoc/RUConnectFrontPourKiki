<script>
	// Importing components from 'yesvelte'
	import { Button, Icon, El, Label,  Floating, FormInput, Divider, Modal, ModalBody } from "yesvelte";
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

	// Name of each Stand
	let name_stand1 = "1"
	let name_stand2 = "2"
	let name_stand3 = "3"

	// ID for tracking the current ingredient being modified for the Offcanvas
	let food_id = writable([]);

	// Function to toggle the visibility of the Modal
	let open = false;
	function toggle() {
  		open = !open;
	}

	// Function toggle the display of the input for changing the name of a stand
	let openName = false;
	function toggleName(class_name) {
		openName = !openName;
		if(openName){
			document.getElementsByClassName(class_name)[0].style.display = "inline"
			document.getElementsByClassName(class_name+"Button")[0].style.display = "inline"
		} else{
			document.getElementsByClassName(class_name)[0].style.display = "none"
			document.getElementsByClassName(class_name+"Button")[0].style.display = "none"
		}
	}

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
				toggle()
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
		value=""
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

	<!-- Return to main page -->
	<div class="flex center">
		<Icon style="margin-bottom: 0.5em; margin-right: 0.6em;" size="2x" name="arrow-left" on:click={() => (window.location.href="/")}/>
		<h1 class="title" style="margin-right: 1.6em;">Stands</h1>
	</div>

	<!-- Container of all stands -->
	<El container>
		<El row>

			<!-- Stand 1 -->
			<Label class="center">Stand {name_stand1}
				<Icon name="pencil" on:click={() =>(toggleName("change_standName1"))}/>
				<br>
					<input class="change_standName1" placeholder="Changez le nom du stand"/>
					<Button class="change_standName1Button" color="green" on:click={() => (name_stand1=document.getElementsByClassName("change_standName1")[0].value, toggleName("change_standName1"))}>
						<Icon name="check" />
					</Button>
			</Label>

			<!-- Display each ingredient of stand 1 -->
			{#each $Ingredient_id1 as idIngredient1 (idIngredient1)}
				<div class="flex center">
					<Button class="ingredientBtn" color="info" on:click={() => (modify = true, show = !show, modifiedValue=idIngredient1, showCreate=false, showCreate_Ingredients())}>
						{idIngredient1}
					</Button>
					<Button color="red" on:click={() => (food_id=Ingredient_id1, deleteIngredient(food_id, idIngredient1))}>
						<Icon name="trash" />
					</Button>
				</div>
			{/each}

			<!-- Button to add an ingredient for Stand 1 -->
			<div class="center" id="Ingredient_add">
				<Button color="green" on:click={() => (show = !show, modify = false, food_id=Ingredient_id1, showCreate=false, showCreate_Ingredients())}>
					<Icon name="plus" />Ajouter un Ingredient
				</Button>
			</div>

			<Divider/>

			<!-- Stand 2 -->
			<Label class="center">Stand {name_stand2}
				<Icon name="pencil" on:click={() =>(toggleName("change_standName2"))}/>
					<br>
					<input class="change_standName2" placeholder="Changez le nom du stand"/>
					<Button class="change_standName2Button" color="green" on:click={() => (name_stand2=document.getElementsByClassName("change_standName2")[0].value, toggleName("change_standName2"))}>
						<Icon name="check" />
					</Button>
			</Label>

			<!-- Display each ingredient of stand 2 -->
			{#each $Ingredient_id2 as idIngredient2 (idIngredient2)}
				<div class="flex center">
					<Button class="ingredientBtn" color="info" on:click={() => (modify = true, show = !show, modifiedValue=idIngredient2, showCreate=false, showCreate_Ingredients())}>
					{idIngredient2}
				</Button>
				<Button color="red" on:click={() => (food_id=Ingredient_id2, deleteIngredient(food_id, idIngredient2))}>
					<Icon name="trash" />
				</Button>
				</div>
			{/each}

			<!-- Button to add an ingredient for Stand 2 -->
			<div class="center" id="Ingredient_add">
				<Button color="green" on:click={() => (show = !show, modify = false, food_id=Ingredient_id2, showCreate=false, showCreate_Ingredients())}>
					<Icon name="plus" />Ajouter un Ingredient
				</Button>
			</div>

			<Divider/>

			<!-- Stand 3 -->
			<Label class="center">Stand {name_stand3}
				<Icon name="pencil" on:click={() =>(toggleName("change_standName3"))}/>
					<br>
					<input class="change_standName3" placeholder="Changez le nom du stand"/>
					<Button class="change_standName3Button" color="green" on:click={() => (name_stand3=document.getElementsByClassName("change_standName3")[0].value, toggleName("change_standName3"))}>
						<Icon name="check" />
					</Button>
			</Label>

			<!-- Display each ingredient of stand 3 -->
			{#each $Ingredient_id3 as idIngredient3 (idIngredient3)}
				<div class="flex center">
					<Button class="ingredientBtn" color="info" on:click={() => (modify = true, show = !show, modifiedValue=idIngredient3, showCreate=false, showCreate_Ingredients())}>
					{idIngredient3}
				</Button>
				<Button color="red" on:click={() => (food_id=Ingredient_id3, deleteIngredient(food_id, idIngredient3))}>
					<Icon name="trash" />
				</Button>
				</div>
			{/each}

			<!-- Button to add an ingredient for Stand 3 -->
			<div class="center" id="Ingredient_add">
				<Button color="green" on:click={() => (show = !show, modify = false, food_id=Ingredient_id3, showCreate=false, showCreate_Ingredients())}>
					<Icon name="plus" />Ajouter un Ingredient
				</Button>
			</div>
		</El>
	</El>

	<!-- Modal displaying all possible ingredients to add to a stand and the create ingredient button -->
	<Modal title="Ajoutez un ingrédient !" size="lg" autoClose backdrop={false} placement="center" bind:show>
		<ModalBody class="center">
			{#each items as item (item)}
				<Button color="info" on:click={() =>(open=false, value=item, makeIngredient(modifiedValue))}>
					{item}
				</Button>
				<br>
			{/each}

			<!-- Button to create a new ingredient -->
			<br>
			<Button color="green" on:click={() =>(showCreate=true, showCreate_Ingredients())}>
				<Icon name="plus" />Créer un Ingredient
			</Button>

			<!-- Input field to create a new ingredient -->
			<div id="add_toIngredients">
				<Floating>
					<FormInput id="createInput" placeholder="Créer un Ingredient" bind:value>
						<Button slot="end" color="green" on:click={() =>(open=false, createIngredient())}>Envoyer</Button>
					</FormInput>
				</Floating>
			</div>
		</ModalBody>
	</Modal>

</main>

<style>
	:global(.change_standName1){
		display: none;
	}
	:global(.change_standName1Button){
		display: none;
	}
	:global(.change_standName2){
		display: none;
	}
	:global(.change_standName2Button){
		display: none;
	}:global(.change_standName3){
		display: none;
	}
	:global(.change_standName3Button){
		display: none;
	}

</style>
