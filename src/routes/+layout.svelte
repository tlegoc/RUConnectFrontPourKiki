<script>
	import Header from '../components/Header.svelte'
</script>

<svelte:head>
	<Header/>
	<h1 class="title">RU CONNECT</h1>
</svelte:head>

<slot/>
<style>
	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;400&family=Roboto:wght@100&display=swap');

	:global(*){
		font-family: 'Poppins', sans-serif;
	}
	:global(.center){
		text-align: center;
	}
	:global(.title){
		text-align: center;
        font-size: xx-large;
	}
</style>