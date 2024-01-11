<script>
	import tabler from 'yesvelte/css/tabler.min.css?url'
	import Header from '../components/Header.svelte'
	import Footer from '../components/Footer.svelte'
	import { Amplify } from 'aws-amplify';


	Amplify.configure({

		Auth: {
			Cognito: {
				//  Amazon Cognito User Pool ID
				userPoolClientId: '5iglfegkdlo91a5o4anbvue5f6',
				userPoolId: 'eu-west-1_myIa5BMdP',
				loginWith: {
						redirectSignIn: ['http://localhost:5173/'],
						redirectSignOut: ['http://localhost:5173/login'],
						responseType: 'token' // or 'code', note that REFRESH token will only be generated when the responseType is code
					}
				}
			}
	});

	// You can get the current config object
	const currentConfig = Amplify.getConfig();
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
		margin-bottom: 20px;
		height: max-content;
	}

</style>