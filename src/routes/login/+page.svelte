<script lang="ts">import { Button, El, FormInput, Icon, Tooltip } from "yesvelte";
     let hint = "";
    let hint2 = "";
    let mdp = "";
    let state = void 0;
    let state2 = void 0;
    let fill = [false,false];
    let disabled = true;

    const validateMail =(e)=> {
        var valid = e.target.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if(valid){
            state=""
            hint="";
            fill[0] = true;
        }else{
            fill[0] = false;
            state = "invalid";
            hint = "L'adresse mail n'est pas valide";
        }
        isDisabled();
    }

    const validateMDP =(e)=> {
        mdp = e.target.value;
        if(e.target.value.length > 6){
            fill[1] = true;
            state2=""
            hint2 = ""
        }else{
            fill[1] = false;
            state2="invalid"
            hint2 = "Doit dépasser 6 caractères"
        }
        isDisabled();
    }

    function isDisabled(){
        disabled = !(fill.every(element => element === true));
    }
    
    </script>
    <main>

    <div class="connexion">
        <h1 class="title">Connexion</h1>
        <FormInput on:blur={validateMail} {state} {hint} label="Email" placeholder="Entrez votre mail..."  required>
            <Icon slot="start-icon" name="mail" />
        </FormInput>
        <FormInput type="password" on:blur={validateMDP} hint={hint2} state={state2} label="Mot de passe" required placeholder="Entrez votre mot de passe...">
            <Icon slot="start-icon" name="key" />
        </FormInput>

        <Button color="success" bind:disabled>
            <Icon name="login" />Se connecter
        </Button>
        <Button href="/signin">
            <Icon name="user-check" />Créer un compte
        </Button>
    </div>
</main>

<style>
    @media screen and (min-width: 1000px) {
        .connexion{
            margin-left: 40vw; 
            margin-right: 40vw;
            margin-top:15vh;
            text-align: center;
        }
    }

    @media screen and (max-width: 1000px) {
        .connexion{
            margin-left: 20vw; 
            margin-right: 20vw;
            margin-top:15vh;
            text-align: center;
        }
    }
</style>