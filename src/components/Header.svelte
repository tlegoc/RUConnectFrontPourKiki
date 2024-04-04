<script>
    import { El, Navbar, NavbarItem, Avatar, Dropdown, DropdownItem, DropdownMenu } from 'yesvelte'
    import {connected, usernameS} from "../routes/stores.js";
    import { goto } from "$app/navigation"
    import { signOut} from "aws-amplify/auth";
    import { onMount } from 'svelte';


    async function handleSignOut() {
        try {
            await signOut();
            connected.update((value) => false);
            console.log("signed out");
            goto("/login");
        } catch (error) {
            console.log("error signing out: ", error);
        }
    }

    let pseudo = "Ps";
    let connectedVal = false;

    usernameS.subscribe((value) => {
        pseudo = value.slice(0,2);
    });
    let avatar = null;
    /*onMount(() => {
        let sPath = window.location.pathname;
        let sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
        if(sPage === "login" || sPage === "signup") {
            avatar.disabled = true;
            avatar.classList.remove("visible");
            console.log(avatar.classList);
        }else{
            avatar.classList.add("visible");
            avatar.classList.remove("invisible");
        }
    });*/

</script>

<header>
    <!-- svelte-ignore a11y-missing-attribute -->
    <img src="/logo.png"  class="logo" on:click={() => (window.location.href="/")}/>
    <div class="avatar visible" bind:this={avatar}>
        <Dropdown arrow={false} style="background:none" placement="bottom-end">
            <Avatar size="md" shape="circle">
                <!-- svelte-ignore a11y-missing-attribute -->
                {pseudo}
            </Avatar>
            <DropdownMenu>
                <DropdownItem href="/user">Mon profil</DropdownItem>
                <DropdownItem on:click={handleSignOut}>Déconnexion</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    </div>
        
</header>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;400&family=Roboto:wght@100&display=swap');

    header{
        padding: 10px;
        background: #eeeeee;
        position: relative;
        height: 120px;
        top: 0px;
        width: 100%;
    }
    .logo{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 150px;
    }
    .avatar{
        position: absolute;
        top: 0px;
        right: 0px;
        padding: 25px;
        width: 100px;
    }

    :global(.invisible){
        display: none;
    }

    :global(.visible){
        display: block;
    }


</style>