<script>
	// Importing components from 'yesvelte'
	import { Button, Icon, El, Label } from "yesvelte";
	import { writable } from "svelte/store";

	// Count of currently displayed buttons
	let buttonCount = 0;

	// ID for tracking the current ingredient being modified
	let stand_id1 = writable([]);
	let stand_id2 = writable([]);
	let stand_id3 = writable([]);

	// Function to add a stand
	function addStand(idStand) {
		stand_id.update((standIds) => {
			buttonCount += 1;
			const newId = `stand_added${buttonCount}`;
			return [...standIds, newId];
		});

		if (buttonCount >= 3) {
			document.getElementById("stand_add").style.display = "none";
		}
	}

	// Function to delete an stand
	function deleteStand(id) {
		stand_id.update((standIds) => {
			buttonCount -= 1;
			return standIds.filter((standId) => standId !== id);
		});

		if (buttonCount < 3) {
			document.getElementById("stand_add").style.display = "inline";
		}
	}
</script>

<main>
	<El container>
		<El row>
			<Label>Stand 1</Label>
			{#each $stand_id1 as idStand1 (idStand1)}
				<Button color="blue" href="/add_meal/add_ingredients">
					{idStand1}
				</Button>
				<Button color="red" on:click={() => deleteStand(idStand1)}>
					<Icon name="trash" />
				</Button>
			{/each}
			<!-- Button to add a stand -->
			<div id="stand_add">
				<Button color="secondary" on:click={() => addStand()}>
					<Icon name="plus" />Ajouter un stand
				</Button>
			</div>
			<Label>Stand 2</Label>
			{#each $stand_id2 as idStand2 (idStand2)}
				<Button color="blue" href="/add_meal/add_ingredients">
					{idStand2}
				</Button>
				<Button color="red" on:click={() => deleteStand(idStand2)}>
					<Icon name="trash" />
				</Button>
			{/each}
			<!-- Button to add a stand -->
			<div id="stand_add">
				<Button color="secondary" on:click={() => addStand()}>
					<Icon name="plus" />Ajouter un stand
				</Button>
			</div>
			<Label>Stand 3</Label>
			{#each $stand_id3 as idStand3 (idStand3)}
				<Button color="blue" href="/add_meal/add_ingredients">
					{idStand3}
				</Button>
				<Button color="red" on:click={() => deleteStand(idStand3)}>
					<Icon name="trash" />
				</Button>
			{/each}
			<!-- Button to add a stand -->
			<div id="stand_add">
				<Button color="secondary" on:click={() => addStand()}>
					<Icon name="plus" />Ajouter un stand
				</Button>
			</div>
		</El>
	</El>
</main>

<style>
</style>
