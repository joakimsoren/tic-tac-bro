import type { Chat } from "./body";


export const getMove = async(body:any): Promise<any> => {
  try {
    const data = await fetch(`http://localhost:11434/api/chat`, {method: 'POST', body: JSON.stringify(body)});
    const hej = await data.json();
    const {move, message} = JSON.parse(hej.message.content);
    return {move, message};
  } 
  catch(e){
    console.error(e);
  }
}