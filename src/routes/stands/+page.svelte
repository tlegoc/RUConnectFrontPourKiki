<script>
	import { Card, CardBody, CardTitle, CardMedia, El, Icon } from 'yesvelte'
	import { Button, ButtonGroup } from 'yesvelte'

	/** @type {import('./$types').PageData} */
	export let data;

	
</script>

<!-- Return to main page -->
<div class="flex center">
	<Icon style="margin-bottom: 0.5em; margin-right: 0.6em;" size="2x" name="arrow-left" on:click={() => (window.location.href="/")}/>
	<h1 class="title" style="margin-right: 1.6em;">Stands</h1>
	<h1 class="title" style="margin-right: 1.6em;">data</h1>

</div>