import { CallBack } from "./promise.utils.js";

export async function reduce(iterable:Array<any>, cb: CallBack, initial: any){

    let i = 0;
    let aggregator = initial || iterable[i++];

    // for (const item of iterable) {
    for (;i<iterable.length;i++) {
        aggregator = await cb(aggregator,iterable[i]);
    }
    
    return aggregator
}

