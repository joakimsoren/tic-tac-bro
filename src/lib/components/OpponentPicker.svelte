<script>
  import { gameStore } from '../stores/game-store';

  function selectOpponent(opponent){
    gameStore.setOpponent(opponent);
  }
</script>


<h1>Pick your opponent</h1>
<div class="opponents">
  <div>
    <img class="opponent" src="llama.webp" on:click={() => selectOpponent('llama')} alt="llama"/>
    <caption>The ultimate frat bro with an insufferable attitude, never seen without his Meta smart glasses that he won't shut up about. This party animal brings obnoxious energy, lame jokes, and annoying shenanigans to every scene - especially when challenging people to games of tic-tac-toe that he insists on playing through his glasses. A big fan of crypto and Mark Zuckerberg, he's always ready to brag about the next big thing while making his next move in the game.</caption>
  </div>
  <div>
    <img class="opponent" src="mistral.webp" on:click={() => selectOpponent('mistral')} alt="mistral"/> 
    <caption>A mystical player who approaches the sacred grid with ethereal wisdom. Sees the game board not as nine mere squares, but as a cosmic alignment of energies waiting to be channeled. Views X's and O's as ancient symbols of duality dancing through the divine patterns of fate.</caption>
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
caption{
  width:300px;
  text-align: left;
}
</style>