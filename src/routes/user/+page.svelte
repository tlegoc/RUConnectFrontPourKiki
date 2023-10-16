<script>
	import { Avatar, AvatarList, Icon, Input  } from 'yesvelte'
    let value = "pseudo";
    let width = value.length*15.5+"px";

    const handleChange = val => {
        value=val;
        width = val.length*15.5+'px';
  };
</script>

<main>
    <h1 class="title">PROFIL</h1>
    <div class="center">
    
    <span class="flex center XS">
        <Avatar size="lg"shape="circle" style="margin-right:20px">
            <!-- svelte-ignore a11y-missing-attribute -->
            <img src="/avatar.png"/>
        </Avatar>
        <Input class="XS" value={value ?? "Pseudo"} size="lg" on:change={e => handleChange(e.target.value)} style="width:{width}; border-color:rgba(0,0,0,0); background: rgba(0,0,0,0);"/>
        <Icon name="edit" style="margin-left:-1vw;"/>
    </span>

    <div class="flex center XS">
        <h2 style="margin-right: 20px;">Mes amis</h2>
        <AvatarList stacked mb="3">
            <Avatar>
                <img src="https://preview.tabler.io/static/avatars/000m.jpg" alt="" />
            </Avatar>
            <Avatar>
                <img src="https://preview.tabler.io/static/avatars/002f.jpg" alt="" />
            </Avatar>
            <Avatar>
                <Icon name="plus" />
            </Avatar>
        </AvatarList>
    </div>
</div>
</main>

<style>

</style>