<script>
    import { El, Navbar, NavbarItem, Avatar, Dropdown, DropdownItem, DropdownMenu } from 'yesvelte'
</script>

<header>
    <!-- svelte-ignore a11y-missing-attribute -->
    <img src="/logo.png"  class="logo" />
    <span class="avatar">
        <Dropdown arrow={false} style="background:none">
            <Avatar size="md" shape="circle">
                <!-- svelte-ignore a11y-missing-attribute -->
                Ps
            </Avatar>
            <DropdownMenu>
                <DropdownItem href="/user">Mon profil</DropdownItem>
                <DropdownItem>Paramètres</DropdownItem>
                <DropdownItem href="/connection">Déconnexion</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    </span>
        
</header>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;400&family=Roboto:wght@100&display=swap');

    header{
        padding: 10px;
        background: #eeeeee;
        position: relative;
        display: block;
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

</style>