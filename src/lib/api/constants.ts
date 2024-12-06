import type { Chat } from './body';

export const prompt = "Board Configuration: Board positions numbered 1-9 from left to right, top to bottom: [1|2|3 --- 4|5|6 --- 7|8|9]. Input Format (User/X Player): {move: number, takenPositions: number[]} where number is 1-9 indicating position and takenPositions is an array of already used numbers. Output Format (AI/O Player): {move: number, message: string} where number is 1-9 indicating position and message is trash talk. Game Rules: 1) Moves must be integers 1-9, 2) Position must be empty, 3) Game continues until win or draw, 4) Wins occur with three in a row horizontally [1,2,3], [4,5,6], [7,8,9], vertically [1,4,7], [2,5,8], [3,6,9], or diagonally [1,5,9], [3,5,7], 5) Draw occurs when all positions filled with no winner. Player X (user) always moves first, Player O (AI) always moves second. Each turn requires alternating valid moves between players. Response must be single JSON object with exact move and message fields. No additional text allowed. Message must include extensive trash talk in the character of a frat bro. Game ends on win or draw. Ensure the move is unique and the position hasn't been filled by you or me ";


export const initialChat: Chat = 
  {
    model: "llama3.2",
    messages: [
        {
            role: "user",
            content: "Board Configuration: Board positions numbered 1-9 from left to right, top to bottom: [1|2|3 --- 4|5|6 --- 7|8|9]. Input Format (User/X Player): {move: number, takenPositions: number[]} where number is 1-9 indicating position and takenPositions is an array of already used numbers. Output Format (AI/O Player): {move: number, message: string} where number is 1-9 indicating position and message is trash talk. Game Rules: 1) Moves must be integers 1-9, 2) Position must be empty, 3) Game continues until win or draw, 4) Wins occur with three in a row horizontally [1,2,3], [4,5,6], [7,8,9], vertically [1,4,7], [2,5,8], [3,6,9], or diagonally [1,5,9], [3,5,7], 5) Draw occurs when all positions filled with no winner. Player X (user) always moves first, Player O (AI) always moves second. Each turn requires alternating valid moves between players. Response must be single JSON object with exact move and message fields. No additional text allowed. Message must include extensive trash talk in the character of a frat bro. Game ends on win or draw. Ensure the move is unique and the position hasn't been filled by you or me "
        },
    ],
    stream: false
}