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
      <CardBody>Are you in a queue for the university restaurant ?
        <Button color="red" on:click={togglePopup}>No</Button>
			  <Button color="green" ms="auto" on:click={togglePopup}>Yes</Button>
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
