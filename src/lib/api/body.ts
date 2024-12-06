export interface Body {
  model:string;
  messages: {role: 'user' | 'assistant', content: string | {move: number, message?:string, takenPositions?:number[]}}[]
  stream: boolean;
}