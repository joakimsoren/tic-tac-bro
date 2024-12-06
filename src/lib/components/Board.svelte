<script>
    import Square from './Square.svelte';
    import { gameStore } from '../stores/game-store';
    import { get } from 'svelte/store';


    function getComputerMove(gameStore) {
        if (gameStore.currentPlayer === 'X') {
            return;
        }

        const availableSquares = gameStore.board
            .map((square, index) => square === null ? index : null)
            .filter(index => index !== null);

            // replace this random move with a move gotten from the local api
        const randomIndex = Math.floor(Math.random() * availableSquares.length);
        const index = availableSquares[randomIndex];

        return index;
    }

    function handleClick(index) {
        gameStore.makeMove(index);
        const computerMove = getComputerMove(get(gameStore));
        if (computerMove !== undefined) {
            gameStore.makeMove(computerMove);
        }
    }
</script>

<div class="board">
    {#each $gameStore.board as square, i}
        <Square 
            value={square} 
            onSquareClick={() => handleClick(i)}
        />
    {/each}
</div>

<style>
    .board {
        display: grid;
        grid-template-columns: repeat(3, 60px);
        grid-template-rows: repeat(3, 60px);
        gap: 4px;
        margin: 20px 0;
        background-color: #213547;
        padding: 4px;
        border-radius: 8px;
    }
</style>