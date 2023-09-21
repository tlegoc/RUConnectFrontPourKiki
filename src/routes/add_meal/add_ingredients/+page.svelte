<script>
	import { Button, Icon, El, Offcanvas, OffcanvasBody, OffcanvasHeader, Input  } from 'yesvelte'
    let show = false
</script>

<El container>
	<El row rowCols="1">
		<El col>
			<Button color="green">
				Hamburger
			</Button>
		</El>
        <El col>
			<Button color="green">
				Frites
			</Button>
		</El>
		<El col>
			<Button color="secondary" on:click={() => (show = !show)}>
				<Icon name="plus" />Ajouter un ingrédient
			</Button>
		</El>
	</El>
</El>

<Offcanvas bind:show>   
	<OffcanvasHeader title="Ajouter un ingrédient" />
	<OffcanvasBody>
        <Input placeholder="Cherchez un ingrédient">
            <Icon slot="food" name="pajamas:food" />
        </Input>
	</OffcanvasBody>
</Offcanvas>