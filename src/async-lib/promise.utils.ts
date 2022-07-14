
export type CallBack = (...args: any[]) => any;

export const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

//--------------------------------------------------

export const echo = async (msg: string, ms: number) => {
  await delay(ms);
  return msg;
};

//--------------------------------------------------
/*

    const echo = async (msg, ms)=> {
        console.log(`--> start ${msg}`)
        await delay(ms);
        log.magenta(`finish <-- ${msg}`)
        return msg;
    } 

*/
//--------------------------------------------------

export const random = (max: number,min: number = 0)=> min + Math.round(Math.random() * (max - min));