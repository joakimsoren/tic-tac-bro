import { writable } from 'svelte/store';

function createGameStore() {
    const { subscribe, set, update } = writable({
        board: Array(9).fill(null),
        currentPlayer: 'X',
        winner: null,
        isDraw: false
    });

    return {
        subscribe,
        makeMove: (index) => update(state => {
            if (state.board[index] || state.winner || state.isDraw) {
                return state;
            }

            const newBoard = [...state.board];
            newBoard[index] = state.currentPlayer;

            const winner = calculateWinner(newBoard);
            const isDraw = !winner && newBoard.every(cell => cell !== null);

            return {
                board: newBoard,
                currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X',
                winner,
                isDraw
            };
        }),
        reset: () => set({
            board: Array(9).fill(null),
            currentPlayer: 'X',
            winner: null,
            isDraw: false
        })
    };
}

function calculateWinner(board) {
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6] // diagonals
    ];

    for (const [a, b, c] of lines) {
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    return null;
}

export const gameStore = createGameStore();