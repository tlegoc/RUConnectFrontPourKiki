<script lang="ts">
    import {Alert, Button, El, FormInput, Icon, Spinner, Tooltip} from "yesvelte";
    import { goto } from "$app/navigation";
    import {connected, usernameS} from '../stores.js';
    import {signUp} from "aws-amplify/auth";

    let username = "";
    let password = "";
    let hint = "";
    let hint2 = "";
    let hint3 = "";
    let mdp = "";
    let state = void 0;
    let state2 = void 0;
    let state3 = void 0;
    let fill = [false,false,false];
    let disabled = true;
    let loading = null;
    let cantConnect = null;

    async function handleSignUp() {

        try {
            loading.classList.remove("invisible")
            loading.classList.add("visible");
            const { isSignUpComplete, nextStep } = await signUp({ username, password });
            usernameS.update((value) => username);
            connected.update((value) => true);
            goto("/tinderbeau");

        } catch (error) {
            console.log(error);
            cantConnect.classList.remove("invisible")
            cantConnect.classList.add("visible");
            loading.classList.add("invisible")
            loading.classList.remove("visible");

        }

    }

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
        }else{
            fill[1] = false;
            state2="invalid"
            hint2 = "Doit dépasser 7 caractères"
        }
        isDisabled();
    }

    const validateRepeatMDP =(e)=> {
        if(e.target.value == mdp){
            fill[2] = true;
            state3=""
            hint3 = ""
            password = e.target.value;
        }else{
            fill[2] = false;
            state3="invalid"
            hint3 = "Mot de passe pas identique"
        }
        isDisabled();
    }

    function isDisabled(){
        disabled = !(fill.every(element => element === true));
    }
    
    </script>
    <main>

    <div class="connexion">
        <h1 class="title">Créer mon compte</h1>
        <FormInput on:blur={validatePseudo} {hint} {state} label="Pseudo" placeholder="Entrez votre pseudo..." required>
            <Icon slot="start-icon" name="user" />
        </FormInput>
        <FormInput type="password" on:blur={validateMDP} hint={hint2} state={state2} label="Mot de passe" required placeholder="Entrez votre mot de passe...">
            <Icon slot="start-icon" name="key" />
        </FormInput>

        <FormInput type="password" on:blur={validateRepeatMDP} hint={hint3} state={state3} label="Répéter mot de passe" required placeholder="Entrez à nouveau votre mot de passe...">
            <Icon slot="start-icon" name="key" />
        </FormInput>

        <Button color="success" bind:disabled on:click={handleSignUp}>
            <Icon name="check" />Créer mon compte
        </Button>
    </div>
    <div class="connexion XS invisible" bind:this={loading}>
        <Spinner color="cyan"/>
    </div>

    <div class="connexion invisible" bind:this={cantConnect}>
        <Alert dismissible important icon="alert-circle" color="danger" class="S">
            Pseudo déjà existant.
        </Alert>
    </div>
</main>

<style>
    @media screen and (min-width: 1000px) {
        .connexion{
            margin-left: 38vw; 
            margin-right: 38vw;
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