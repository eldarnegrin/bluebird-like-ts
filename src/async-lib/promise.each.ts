
//--------------------------------------------------
import { CallBack } from "./promise.utils.js"

export async function each(iterable: Iterable<any>, cb: CallBack){
    for (const item of iterable) {
        await cb(item);
    }
    return iterable;
}

//--------------------------------------------------

