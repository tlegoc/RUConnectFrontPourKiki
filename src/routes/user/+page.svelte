<script>
    import {
        Avatar,
        AvatarList,
        Badge,
        Button,
        Dropdown,
        DropdownItem,
        DropdownMenu, Fieldset, FormSlider,
        Icon,
        Input, Modal, ModalBody, ModalFooter, Radio,
        RadioGroup, SliderKnob
    } from 'yesvelte'
    import {connected, usernameS} from "../stores.js";
    import {onMount} from "svelte";
    import { fetchAuthSession } from 'aws-amplify/auth';
    import {goto} from '$app/navigation';

    let pseudo = "Pseudo";
    let inRU = "Dans la queue";
    let friendsinRU = [];
    let friendsinqueue = [];
    let friendshungry = [];
    let allPseudos = [];
    let filteredPseudos = [];
    let shownFriend = "";
    let TOKEN_ID = "";
    let TOKEN_ACCESS = "";
    let friendRequests = [];
    let toggleRU;
    let toggleQueue;
    let toggleOut;


    const searchPseudos = (keyword) => {
        if(keyword!=null || keyword!==""){
            filteredPseudos = allPseudos.filter(pseudo => pseudo.toLowerCase().includes(keyword.toLowerCase()));
        }
    }

    function RU() {
        inRU = "Dans le RU";
        const queryParams = new URLSearchParams({ status: "inside"});
        fetch(`https://qx68e2c3ei.execute-api.eu-west-1.amazonaws.com/prod/self/status?${queryParams}`, {
            headers: {
                'Authorization': 'Bearer ' + TOKEN_ID,
            },
            method: "POST",
        })
        reloadPage();
    }

    function Queue() {
        inRU = "Dans la queue";
        const queryParams = new URLSearchParams({ status: "inqueue"});
        fetch(`https://qx68e2c3ei.execute-api.eu-west-1.amazonaws.com/prod/self/status?${queryParams}`, {
            headers: {
                'Authorization': 'Bearer ' + TOKEN_ID,
            },
            method: "POST",
        })
        reloadPage();
    }

    function Dehors() {
        inRU = "A faim";
        const queryParams = new URLSearchParams({ status: "out"});
        fetch(`https://qx68e2c3ei.execute-api.eu-west-1.amazonaws.com/prod/self/status?${queryParams}`, {
            headers: {
                'Authorization': 'Bearer ' + TOKEN_ID,
            },
            method: "POST",
        })
        reloadPage();
    }

    function showFriendModal(friend){
        shownFriend = friend;
        showFriend = true;
        //console.log(shownFriend);
        //console.log(showFriend);
    }

    usernameS.subscribe((value) => {
        pseudo = value;
    });

    connected.subscribe((value) => {
        if(!value) goto('/login');
    });
    let show = false;
    let showFriend = false;


    function reloadPage() {
        const thisPage = window.location.pathname;
        goto('/').then(
            () => goto(thisPage)
        );
    }

    onMount(async () => {
        await fetch(`https://qx68e2c3ei.execute-api.eu-west-1.amazonaws.com/prod/users`)
            .then(response => response.json())
            .then(data => {
                allPseudos = data;
            });

        try {
            const { accessToken, idToken } = (await fetchAuthSession()).tokens ?? {};
            console.log("Id token: " + idToken);
            TOKEN_ID = idToken;
            TOKEN_ACCESS = accessToken;
            getFriends();

        } catch (err) {
            console.log(err);
        }

    });

    function addFriend(friend){
        const queryParams = new URLSearchParams({ action: "add", friendname: friend});
        fetch(`https://qx68e2c3ei.execute-api.eu-west-1.amazonaws.com/prod/friends?${queryParams}`, {
            headers: {
                'Authorization': 'Bearer ' + TOKEN_ID,
            },
            method: "POST",
        })
        reloadPage();
    }

    function acceptFriend(friend){
        const queryParams = new URLSearchParams({ action: "accept", friendname: friend});
        fetch(`https://qx68e2c3ei.execute-api.eu-west-1.amazonaws.com/prod/friends?${queryParams}`, {
            headers: {
                'Authorization': 'Bearer ' + TOKEN_ID
            },
            method: "POST",
        })
        reloadPage();
    }

    function removeFriend(friend){
        const queryParams = new URLSearchParams({ action: "remove", friendname: friend});
        fetch(`https://qx68e2c3ei.execute-api.eu-west-1.amazonaws.com/prod/friends?${queryParams}`, {
            headers: {
                'Authorization': 'Bearer ' + TOKEN_ID,
            },
            method: "POST",
        })
        reloadPage();
    }

    function getFriends(){
        fetch(`https://qx68e2c3ei.execute-api.eu-west-1.amazonaws.com/prod/self`, {
            headers: {
                'Authorization': 'Bearer ' + TOKEN_ID
            },
        })
            .then(response => response.json())
            .then(data => {
                //console.log(data);
                const friends = data.friends;
                friendsinRU = [];
                friendsinqueue = [];
                friendshungry = [];
                for (let i = 0; i < friends.length; i++) {
                    if (data.friendsstatus[friends[i]]=== "inside") {
                        console.log(friends[i]);
                        friendsinRU.push(friends[i]);
                    } else if (data.friendsstatus[friends[i]]=== "inqueue") {
                        friendsinqueue.push(friends[i]);
                    } else if (data.friendsstatus[friends[i]]=== "out") {
                        friendshungry.push(friends[i]);
                    }
                }
                friendRequests = data.requestsfriends;
                if(data.status === "inside"){
                    inRU = "Dans le RU";
                    toggleRU.checked = "true";
                } else if(data.status === "inqueue"){
                    inRU = "Dans la queue";
                    toggleQueue.checked  = "frue";
                } else if(data.status === "out"){
                    inRU = "A faim";
                    toggleOut.checked  = "true";
                }
            });
    }

</script>

<main>
    <div class="flex center">
        <Icon style="margin-bottom: 0.5em; margin-right: 0.6em;" size="2x" name="arrow-left" on:click={() => (window.location.href="/")}/>
        <h2 class="title">PROFIL</h2>
    </div>
    <div class="center">
    
        <span class="flex center XXS">
            <Avatar size="md" shape="circle" style="margin-right:20px">
                <!-- svelte-ignore a11y-missing-attribute -->
                {pseudo.slice(0,2)}
            </Avatar>
            <h3 style="margin-top: 10px">{pseudo}</h3>
            <!--<input type="text" class="XS" value={pseudo ?? "Pseudo"} size=5 oninput="this.size = this.value.length/1.7 +1" style="border-color:rgba(0,0,0,0); background: rgba(0,0,0,0); margin-bottom: 25px;"/>-->
            <!--<Icon name="edit" style="margin-left:-1vw;"/>-->
        </span>
        <h3 class="XXS" style="margin-bottom: 5px">Je suis</h3>
        <div class="center">
                <div class="tw-toggle">
                    <input type="radio" name="toggle" value="false" on:click={Dehors} style="height: 25px; width:25px" bind:this={toggleOut}>
                    <label class="toggle toggle-yes"><Icon name="transfer-out" /></label>
                    <input checked type="radio" name="toggle" value="-1" on:click={Queue} style="height: 25px; width:25px" bind:this={toggleQueue}>
                    <label class="toggle toggle-yes"><Icon name="clock"/></label>
                    <input type="radio" name="toggle" value="true" on:click={RU} style="height: 25px; width:25px" bind:this={toggleRU}>
                    <label class="toggle toggle-yes"><Icon name="tools-kitchen-2" /></label>
                    <span></span>
                </div>
                <p style="margin-left: 5px; margin-top: 5px;">{inRU}</p>
        </div>

        <h2 class="title" style="margin-top: 20px">AMIS</h2>
        <div class="flex center XS">
        {#if friendsinRU.length === 0 && friendsinqueue.length === 0 && friendshungry.length === 0}
            <p>Vous n'avez pas encore d'amis. Ajoutez-en !</p>
        {:else }
        <div style="margin-right: 10px">
            {#if friendsinRU.length !== 0}
            <div>
                <Badge pill ghost color="success" style="margin-right: 5px">Dans le RU</Badge>
            </div>
            {/if}
            {#if friendsinqueue.length !== 0}
            <div style="margin-top: 25px; margin-bottom: 25px">
                <Badge pill ghost color="warning" style="margin-right: 5px">Dans la queue</Badge>
            </div>
            {/if}
            {#if friendshungry.length !== 0}
            <div>
                <Badge pill ghost color="danger" style="margin-right: 5px">A faim</Badge>
            </div>
            {/if}
        </div>
        <div>
            <div class="flex friendList">
                {#each friendsinRU as fr}
                    <Avatar class="friend" color="success" on:click={() => showFriendModal(fr)}>{fr.slice(0,2)}</Avatar>
                {/each}
            </div>
            <div class="flex friendList">

                {#each friendsinqueue as fr}
                    <Avatar class="friend" color="warning" on:click={() => showFriendModal(fr)}>{fr.slice(0,2)}</Avatar>
                {/each}

            </div>
            <div class="flex friendList">

                {#each friendshungry as fr}
                    <Avatar class="friend" color="danger" on:click={() => showFriendModal(fr)}>{fr.slice(0,2)}</Avatar>
                {/each}
            </div>
        </div>
        {/if}
    </div>

        <Button color="primary" class="XXS" on:click={() => (show = !show)}>
            <Icon name="plus" />Ajouter
        </Button>

        <h2 class="title" style="margin-top: 20px">DEMANDES</h2>
        <div class="center">
        {#if friendRequests.length === 0}
            <p>Vous n'avez pas de nouvelles demandes d'amis.</p>
        {:else }
            {#each friendRequests as fr}
                <div class="flex center"><p style="margin-right: 5px; margin-top: 15px">{fr}</p> <Button size="sm" color="success" on:click={acceptFriend(fr)}><Icon name="plus"/></Button> <Button size="sm" color="red" on:click={removeFriend(fr)}><Icon name="x"/></Button></div>
            {/each}
        {/if}


        </div>

    <Modal scrollable title="Mais où sont mes amis ??" placement="center" bind:show>
        <ModalBody>
            <Input placeholder="Pseudo" on:input={(e) => searchPseudos(e.target.value)}>
                <Icon slot="start" name="search" />
            </Input>
            <div class="center XS">
            {#each filteredPseudos as fr}
                <div class="flex center"><p style="margin-right: 5px; margin-top: 15px">{fr}</p> <Button size="sm" color="success" on:click={addFriend(fr)}><Icon name="plus"/></Button></div>
            {/each}
            </div>
        </ModalBody>
        <ModalFooter>
            <div><Button me="auto" on:click={() => (show = false)}>Fermer</Button></div>
        </ModalFooter>
    </Modal>

    <Modal placement="center" bind:show={showFriend}>
        <ModalBody>
            <div class="center">
                <Avatar size="lg">{shownFriend.slice(0,2)}</Avatar>
                <h3>{shownFriend}</h3>
            </div>
            <div class="center"><Button color="warning" on:click={removeFriend(shownFriend)}>Retirer</Button></div>
            <div class="center"><Button me="auto" on:click={() => (showFriend = false)}>Fermer</Button></div>
        </ModalBody>
    </Modal>
    </div>
</main>

<style>
    :global(.friendList){
        margin-bottom: 5px;
    }
    :global(.friend){
        margin-left: -10px;
    }

    .tw-toggle {
        /* background: #95A5A6; */
        display: inline-block;
        padding: 3px 3px;
        border-radius: 20px;
        position:relative;
        border: 2px solid #95A5A6;
    }

    .tw-toggle label {
        text-align: center;
        font-family: sans-serif;
        display: inline-block;
        color: #95A5A6;
        position:relative;
        z-index:2;
        margin: 0;
        text-align: center;
        padding: 2px 3px;
        font-size: 15px;
        /* cursor: pointer; */
    }

    .tw-toggle input {
        /* display: none; */
        position: absolute;
        z-index: 3;
        opacity: 0;
        cursor: pointer;
    }

    .tw-toggle span {
        height: 25px;
        width: 25px;
        line-height: 21px;
        border-radius: 50%;
        background:#fff;
        display:block;
        position:absolute;
        left: 22px;
        top: 4px;
        transition:all 0.3s ease-in-out;
    }

    .tw-toggle input[value="false"]:checked ~ span{
        background:#e74c3c;
        left:4px;
        color:#fff;
    }

    .tw-toggle input[value="true"]:checked ~ span{
        background:#27ae60;
        left: 63px;
    }
    .tw-toggle input[value="-1"]:checked ~ span{
        background:#ff9900;
        left: 33px;
    }

    .tw-toggle input[value="false"]:checked + label,.tw-toggle input[value="true"]:checked + label{
        color:#fff;
    }
    .tw-toggle input[value="-1"]:checked + label{
        color:#fff;
    }


</style>