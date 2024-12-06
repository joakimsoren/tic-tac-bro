<script>
    import { gameStore } from '../stores/game-store';

</script>
{#if !!$gameStore.currentMessage}
<div class="speech-bubble">
  {$gameStore.currentMessage}
</div>
{/if}

<style>
  .speech-bubble {
	position: absolute;
	background: #00aabb;
	border-radius: .4em;
  padding: 20px;
  width: 200px;
  right: -220px;
}

.speech-bubble:after {
	content: '';
	position: absolute;
	left: 0;
	top: 50%;
	width: 0;
	height: 0;
	border: 20px solid transparent;
	border-right-color: #00aabb;
	border-left: 0;
	border-bottom: 0;
	margin-top: -10px;
	margin-left: -20px;
}
</style>