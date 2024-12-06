import {Response} from './response';

export const getMove = async(payload:any): Promise<any> => {
  console.log(payload);
  try {
    const data: any = await fetch(`http://localhost:11434/api/chat`,payload);
    console.log('data',data); 

  } 
  catch(e){}
}