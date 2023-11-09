<script>
    import {Avatar, AvatarList, Badge, Icon, Input} from 'yesvelte'
    let value = "Pseudo";
</script>

<main>
    <h1 class="title">PROFIL</h1>
    <div class="center">
    
    <span class="flex center XS">
        <Avatar size="md"shape="circle" style="margin-right:20px">
            <!-- svelte-ignore a11y-missing-attribute -->
            Ps
        </Avatar>
        <input type="text" class="XS" value={value ?? "Pseudo"} size=5 oninput="this.size = this.value.length/1.7 +1" style="border-color:rgba(0,0,0,0); background: rgba(0,0,0,0); margin-bottom: 25px;"/>
        <Icon name="edit" style="margin-left:-1vw;"/>
    </span>


        <h2 style="margin-right: 20px;">Mes amis</h2>
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

</style>