
<script>
  let showPopup = true;

  function togglePopup() {
    showPopup = !showPopup;
  }
</script>

{#if showPopup}
  <div class="popup">
    <p>Are you in a queue for the university restaurant?</p>
    <button on:click={togglePopup}>No</button>
    <button on:click={togglePopup}>Yes</button>
  </div>
{/if}

<style>
  .popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    border: 1px solid black;
    z-index: 9999;
  }
</style>
