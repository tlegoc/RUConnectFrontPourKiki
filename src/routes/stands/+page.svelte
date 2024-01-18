<script>
	import { Card, CardBody, CardTitle, CardMedia, El, Icon } from 'yesvelte'
	import { Button, ButtonGroup } from 'yesvelte'

	/** @type {import('./$types').PageData} */
	export let data;



</script>
<main>
<!-- Return to main page -->
<div class="flex center">
	<Icon style="margin-bottom: 0.5em; margin-right: 0.6em;" size="2x" name="arrow-left" on:click={() => (window.location.href="/")}/>
	<h1 class="title" style="margin-right: 0.5em;">Stands</h1>
	<h1 class="title">data</h1>
</div>

<div class="center" style="height: 50vh;">
	<p>Le menu s'affichera ici</p>
</div>
</main>