<script lang="ts">import { Button, El, FormInput, Icon, Tooltip } from "yesvelte";
    let hint = "";
    let state = void 0;
    function validate() {
      state = "invalid";
      hint = "Email address is not valid";
    }
    </script>
    <main>

    <div style="margin-left: 20vw; margin-right: 20vw; margin-top:15vh;" class="center">
        <h1 class="title">Connexion</h1>
        <FormInput {state} {hint} label="Email" placeholder="Enter your email...">
            <Icon slot="start-icon" name="mail" />
            <Button slot="end" on:click={validate}>
                <Icon name="check" />
                <Tooltip>Check if email is valid</Tooltip>
            </Button>
        </FormInput>
        <FormInput label="Password" required placeholder="Enter your password...">
            <Icon slot="start-icon" name="key" />
        </FormInput>

        <Button color="success">
            <Icon name="check" />Se connecter
        </Button>
    </div>
</main>