<script>
    import Square from './Square.svelte';
    import { gameStore } from '../stores/game-store';
    import { get } from 'svelte/store';
    import {getMove} from '../api/api';


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

    async function  handleClick(index) {
        gameStore.makeMove(index);
        const chat = get(gameStore).chat;
        const response = await getMove(chat);
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
        grid-template-columns: repeat(3, 80px);
        grid-template-rows: repeat(3, 80px);
        gap: 4px;
        margin: 20px 0;
        background-color: #213547;
        padding: 4px;
        border-radius: 8px;
    }
</style>