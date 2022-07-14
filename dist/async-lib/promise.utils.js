export const delay = (ms)=>new Promise((resolve)=>setTimeout(resolve, ms));
//--------------------------------------------------
export const echo = async (msg, ms)=>{
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

*/ //--------------------------------------------------
export const random = (max, min = 0)=>min + Math.round(Math.random() * (max - min));
