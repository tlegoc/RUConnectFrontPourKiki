<script>
    import { El, Navbar, NavbarItem, Avatar, Dropdown, DropdownItem, DropdownMenu } from 'yesvelte'
</script>

<header>
        <img src="/logo.png"  class="logo" />
        <span class="avatar">
            <Dropdown arrow={false} style="background:none">
            <Avatar>
                <img src="/avatar.png"/>
            </Avatar>
            <DropdownMenu>
                <DropdownItem>Mon profil</DropdownItem>
                <DropdownItem>Paramètres</DropdownItem>
                <DropdownItem>Déconnexion</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    </span>
        
</header>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;400&family=Roboto:wght@100&display=swap');

    header{
        padding: 10px;
        background: #eeeeee;
        position: absolute;
        top: 0px;
        width: 100%;
    }
    h1{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        text-align: center;
        font-size: xx-large;
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
        padding: 35px;
        width: 100px;
    }

</style>