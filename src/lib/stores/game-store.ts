import { writable } from 'svelte/store';
import {initialChat, llamaPrompt, mistralPrompt} from '../api/constants';
import type { Chat } from '../api/body';

function createGameStore() {
    const { subscribe, set, update } = writable({
        board: Array(9).fill(null),
        currentPlayer: 'X',
        winner: null,
        isDraw: false,
        chat: initialChat,
        takenPositions: [],
        currentMessage: '',
        opponent:'',
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

            const newMessage = {role: 'user', content:'Return the message in the same format with move and message.'};
            const newTakenPositions = [...state.takenPositions, index + 1];

            if(winner === 'X'){
                newMessage.content += ' The user has won the game, be upset';
            } else if (winner === 'O'){
                newMessage.content += ' You won the game, gloat!';
            } else if (isDraw){
                newMessage.content += ' The game is a draw, be indifferent';
            } else {
                 newMessage.content = JSON.stringify({ move: index + 1, takenPositions:newTakenPositions});
            }

            const model = state.opponent === 'llama' ? 'llama3.2' : 'mistral'; 
                console.log(newMessage.content);
            const newChat: Chat ={ ...state.chat, messages: [...state.chat.messages, newMessage], model  };
            newChat.messages[0].content = state.opponent === 'llama' ? llamaPrompt : mistralPrompt;

            return {
                ...state,
                board: newBoard,
                currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X',
                winner,
                isDraw,
                chat: newChat,
                takenPositions: newTakenPositions,
            };
        }),

        setMessage: (message) => update(state => {
            return {
                ...state, currentMessage: message,
            }
        }),

        setOpponent: (opponent) => update(state => {
            return {...state, opponent}
        }),
        reset: () => set({
            board: Array(9).fill(null),
            currentPlayer: 'X',
            winner: null,
            isDraw: false,
            chat: initialChat,
            takenPositions: [],
            currentMessage:'',
            opponent:'',
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