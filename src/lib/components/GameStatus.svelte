<script>
    import { gameStore } from '../stores/game-store';
</script>

<div class="status">
    {#if $gameStore.winner}
        <p>Winner: {$gameStore.winner}!</p>
    {:else if $gameStore.isDraw}
        <p>Game ended in a draw!</p>
    {:else}
    {#if $gameStore.currentPlayer === 'O'}
        <p>Waiting for opponent</p>
    {:else}
        <p>Your turn! </p>
    {/if}
    {/if}
</div>

<button class="reset" on:click={() => gameStore.reset()}>
    New Game
</button>

<style>
    .status {
        margin: 20px 0;
        font-size: 1.2em;
        font-weight: bold;
    }

    .reset {
        background-color: #ff3e00;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 4px;
        cursor: pointer;
        font-weight: bold;
        transition: background-color 0.2s;
    }

    .reset:hover {
        background-color: #ff2d00;
    }
</style>