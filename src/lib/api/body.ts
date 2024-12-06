export interface Chat {
  model:string;
  messages: {
    role: string, 
    content: string | { move: number, message?: string, takenPositions? :number[] }
  }[]
  stream: boolean;
}