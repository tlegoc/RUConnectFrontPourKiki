<script lang="ts">
    import {Alert, Button, El, FormInput, Icon, Spinner, Tooltip} from "yesvelte";
    import { goto } from "$app/navigation";
    import {connected} from '../stores.js';
    import { signIn, signOut } from 'aws-amplify/auth';

    let hint = "";
    let hint2 = "";
    let mdp = "";
    let state = void 0;
    let state2 = void 0;
    let fill = [false,false];
    let disabled = true;
    let username = "";
    let password = "";
    let loading = null;
    let cantConnect = null;
    const validatePseudo =(e)=> {
        //Contient que des lettres, chiffres, tirets et underscores
        var valid = e.target.value.match(/^[a-zA-Z0-9-_]+$/);
        if(valid){
            state=""
            hint="";
            fill[0] = true;
            username = e.target.value;
        }else{
            fill[0] = false;
            state = "invalid";
            hint = "Le pseudo contient des caractères non autorisés";
        }
        isDisabled();
    }

    const validateMDP =(e)=> {
        mdp = e.target.value;
        if(e.target.value.length > 7){
            fill[1] = true;
            state2=""
            hint2 = ""
            password = e.target.value;
        }else{
            fill[1] = false;
            state2="invalid"
            hint2 = "Doit dépasser 7 caractères"
        }
        isDisabled();
    }

    function isDisabled(){
        disabled = !(fill.every(element => element === true));
    }

    async function handleSignIn() {

        try {
            loading.classList.remove("invisible")
            loading.classList.add("visible");
            const { isSignedIn, nextStep } = await signIn({ username, password });
            connected.update((value) => isSignedIn);
            goto("/");
        } catch (error) {
            cantConnect.classList.remove("invisible")
            cantConnect.classList.add("visible");
            loading.classList.add("invisible")
            loading.classList.remove("visible");
        }

    }
    
    </script>

    <main>

    <div class="connexion">
        <h1 class="title">Connexion</h1>
        <FormInput on:blur={validatePseudo} {state} {hint} label="Pseudo" placeholder="Entrez votre pseudo..."  required>
            <Icon slot="start-icon" name="user" />
        </FormInput>
        <FormInput type="password" on:blur={validateMDP} hint={hint2} state={state2} label="Mot de passe" required placeholder="Entrez votre mot de passe...">
            <Icon slot="start-icon" name="key" />
        </FormInput>

        <Button color="success" bind:disabled on:click={handleSignIn}>
            <Icon name="login" />Se connecter
        </Button>

        <Button href="/signin">
            <Icon name="user-check" />Créer un compte
        </Button>


    </div>
    <div class="connexion XS invisible" bind:this={loading}>
        <Spinner color="cyan"/>
    </div>

    <div class="connexion invisible" bind:this={cantConnect}>
        <Alert dismissible important icon="alert-circle" color="danger" class="S">
            Pseudo ou mot de passe incorrect.
        </Alert>
    </div>


</main>

<style>
    @media screen and (min-width: 1000px) {
        .connexion{
            margin-left: 40vw; 
            margin-right: 40vw;
            text-align: center;
        }
    }

    @media screen and (max-width: 1000px) {
        .connexion{
            margin-left: 20vw; 
            margin-right: 20vw;
            text-align: center;
        }
    }

    .invisible {
        display: none;
    }
    .visible {
        text-align: center;
        display: block;
    }
</style>