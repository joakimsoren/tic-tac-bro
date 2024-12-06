<script>
  import SpeechBubble from "./SpeechBubble.svelte";
  import { gameStore } from '../stores/game-store';
</script>

<div class="avatar-container">
  <SpeechBubble/>
  <img class="opponent" src="{$gameStore.opponent}.webp" alt="opponent"/>
</div>

<style>
  .avatar-container{
    position: relative;
  }
  .opponent{
  cursor:pointer;
  width: 300px;
  border:solid 2px black;
}
</style>