<script>
    import Square from './Square.svelte';
    import { gameStore } from '../stores/game-store';

    function handleClick(index) {
        gameStore.makeMove(index);
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