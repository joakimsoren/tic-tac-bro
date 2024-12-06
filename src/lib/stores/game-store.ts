import { writable } from 'svelte/store';
import {initialChat} from '../api/constants';
import type { Chat } from '../api/body';

function createGameStore() {
    const { subscribe, set, update } = writable({
        board: Array(9).fill(null),
        currentPlayer: 'X',
        winner: null,
        isDraw: false,
        chat: initialChat,
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

            const newMessage = { role:'user', content: JSON.stringify({ move:1, takenPositions:[1]})};
            const newChat ={ ...state.chat, messages: [...state.chat.messages, newMessage]};

            return {
                board: newBoard,
                currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X',
                winner,
                isDraw,
                chat: newChat,
            };
        }),

        reset: () => set({
            board: Array(9).fill(null),
            currentPlayer: 'X',
            winner: null,
            isDraw: false,
            chat: initialChat,
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