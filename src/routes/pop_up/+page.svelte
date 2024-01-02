<script>
  import { Card, CardBody, Button } from 'yesvelte'
  let showPopup = true;

  function togglePopup() {
    showPopup = !showPopup;
  }
</script>

{#if showPopup}
  <div class="popup">
    <Card>
      <CardBody>Es-tu dans la queue du RU ?
        <Button color="green" ms="auto" on:click={togglePopup}>Oui</Button>
        <Button color="red" on:click={togglePopup}>Non</Button>
      </CardBody>
    </Card>
    
  </div>
{/if}

<style>
.popup {
  width: 90%;
  height: 70%;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
