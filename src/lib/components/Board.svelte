<script>
    import Square from './Square.svelte';
    import { gameStore } from '../stores/game-store';
    import { get } from 'svelte/store';
    import {getMove} from '../api/api';

    async function  handleClick(index) {
        gameStore.makeMove(index);
        const chat = get(gameStore).chat;
        const {move, message} = await getMove(chat);
        gameStore.setMessage(message);
        const { winner} = get(gameStore);
        if(winner === 'X'){
            return;
        }
        gameStore.makeMove(move-1);
        const {winner: newWinner} = get(gameStore);
        if(newWinner === 'O'){
            const newChat = get(gameStore).chat;
            const { message } = await getMove(newChat);
            gameStore.setMessage(message);
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