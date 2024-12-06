<script>
    import Board from './lib/components/Board.svelte';
    import GameStatus from './lib/components/GameStatus.svelte';
    import Avatar from './lib/avatar/Avatar.svelte';
    import {gameStore} from './lib/stores/game-store';
    import OpponentPicker from './lib/components/OpponentPicker.svelte';
</script>

<main>
    <h1>Tic Tac Bro</h1>
    {#if !!$gameStore.opponent}
    <div class="game-container">
        <div class="game">
            <GameStatus />
            <Board />
        </div>
        <Avatar />
    </div>
    {:else}
    <OpponentPicker />
    {/if}
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
    }

    .game-container{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
    }

    .game {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 2em;
        font-weight: 100;
        margin-bottom: 1em;
    }
</style>