<script>
	import tabler from 'yesvelte/css/tabler.min.css?url'
	import Header from '../components/Header.svelte'
	import Footer from '../components/Footer.svelte'
</script>

<svelte:head>
	<link rel='stylesheet' href={tabler}/>
</svelte:head>

<Header/>
<slot/>
<Footer/>




<style>
	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;400&family=Roboto:wght@100&display=swap');

	:global(*){
		font-family: 'Poppins', sans-serif;
	}
	:global(.center){
		text-align: center;
		justify-content: center;
		align-items: center;
	}
	:global(.title){
		text-align: center;
        font-size: xx-large;
	}
	:global(.XS){
		margin-top: 2%;
	}
	:global(.S){
		margin-top: 5%;
	}
	:global(.M){
		margin-top: 10%;
	}
	:global(.L){
		margin-top: 20%;
	}
	:global(.flex){
		display: flex;
	}
	:global(main){
		margin-top: 20px;
		position: relative;
	}

</style>