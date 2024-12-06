import type { Chat } from "./body";


export const getMove = async(body:any): Promise<any> => {
  try {
    const data: any = await fetch(`http://localhost:11434/api/chat`, {method: 'POST', body: JSON.stringify(body)});
    console.log(data.message.content);
    const { move, message } = JSON.parse(data.message.content);
    console.log(move, message);
  } 
  catch(e){
  }
}