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
        Input, Radio,
        RadioGroup, SliderKnob
    } from 'yesvelte'
    import {connected, usernameS} from "../stores.js";

    let pseudo = "Kilian";
    let inRU = "Dans la queue";

    function RU() {
        inRU = "Dans le RU";
    }

    function Queue() {
        inRU = "Dans la queue";
    }

    function Dehors() {
        inRU = "Dehors :(";
    }

    usernameS.subscribe((value) => {
        pseudo = value;
    });

</script>

<main>
    <div class="flex center">
        <Icon style="margin-bottom: 0.5em; margin-right: 0.6em;" size="2x" name="arrow-left" on:click={() => (window.location.href="/")}/>
        <h2 class="title">PROFIL</h2>
    </div>
    <div class="center">
    
        <span class="flex center XS">
            <Avatar size="md" shape="circle" style="margin-right:20px">
                <!-- svelte-ignore a11y-missing-attribute -->
                {pseudo.slice(0,2)}
            </Avatar>
            <input type="text" class="XS" value={pseudo ?? "Pseudo"} size=5 oninput="this.size = this.value.length/1.7 +1" style="border-color:rgba(0,0,0,0); background: rgba(0,0,0,0); margin-bottom: 25px;"/>
            <Icon name="edit" style="margin-left:-1vw;"/>
        </span>
        <h3 style="margin-bottom: 5px">Je suis</h3>
        <div class="center">
                <div class="tw-toggle">
                    <input type="radio" name="toggle" value="false" on:click={Dehors} style="height: 25px; width:25px">
                    <label class="toggle toggle-yes"><Icon name="transfer-out" /></label>
                    <input checked type="radio" name="toggle" value="-1" on:click={Queue} style="height: 25px; width:25px">
                    <label class="toggle toggle-yes"><Icon name="clock" /></label>
                    <input type="radio" name="toggle" value="true" on:click={RU} style="height: 25px; width:25px">
                    <label class="toggle toggle-yes"><Icon name="tools-kitchen-2" /></label>
                    <span></span>
                </div>
                <p style="margin-left: 5px; margin-top: 5px;">{inRU}</p>
        </div>

        <h2 class="title" style="margin-top: 20px">AMIS</h2>
        <div class="flex center XS">
        <div style="margin-right: 10px">
            <div>
                <Badge pill ghost color="success" style="margin-right: 5px">Dans le RU</Badge>
            </div>
            <div style="margin-top: 25px; margin-bottom: 25px">
                <Badge pill ghost color="warning" style="margin-right: 5px">Dans la queue</Badge>
            </div>
            <div>
                <Badge pill ghost color="danger" style="margin-right: 5px">A faim</Badge>
            </div>
        </div>
        <div>
            <div class="flex friendList">
                <Avatar class="friend" color="success">Re</Avatar>
                <Avatar class="friend" color="success">Ju</Avatar>
                <Avatar class="friend" color="success">Pi</Avatar>
            </div>
            <div class="flex friendList">

                <Avatar class="friend" color="warning">Ar</Avatar>
                <Avatar class="friend" color="warning">Ki</Avatar>
                <Avatar class="friend" color="warning">Be</Avatar>
                <Avatar class="friend" color="warning">Me</Avatar>

            </div>
            <div class="flex friendList">

                <Avatar class="friend" color="danger">Ax</Avatar>
                <Avatar class="friend" color="danger">Ol</Avatar>
            </div>
        </div>


    </div>
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