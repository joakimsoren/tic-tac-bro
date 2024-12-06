<script>
    import Board from './lib/components/Board.svelte';
    import GameStatus from './lib/components/GameStatus.svelte';
</script>

<main>
    <h1>Tic Tac Toe</h1>
    <div class="game">
        <GameStatus />
        <Board />
    </div>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;
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