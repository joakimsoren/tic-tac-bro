<script>
  import { gameStore } from '../stores/game-store';

  function selectOpponent(opponent){
    gameStore.setOpponent(opponent);
  }
</script>


<h2>Pick your opponent</h2>
<div class="opponents">
  <div class="opponent-wrapper">
    <img class="opponent" src="llama.webp" on:click={() => selectOpponent('llama')} alt="llama"/>
    <p><b>Llama</b></p>
    <p>The ultimate frat bro with an insufferable attitude</p>
  </div>
  <div class="opponent-wrapper">
    <img class="opponent" src="mistral.webp" on:click={() => selectOpponent('mistral')} alt="mistral"/> 
    <p><b>Mistral</b></p>
    <p>A mystical player who approaches the sacred grid with ethereal wisdom</p>
  </div>
</div>

<style>
.opponents {
  display:flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.opponent{
  cursor:pointer;
  width: 300px;
  border:solid 2px black;
}
.opponent:hover{
  border-color:  yellow;
}
.opponent-wrapper{
  display:flex;
  flex-direction: column;
  align-items: center;
  width:50%;
  padding: 20px;
}
h2 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size:1.5em;
        font-weight: 100;
        margin-bottom: 1em;
    }
</style>