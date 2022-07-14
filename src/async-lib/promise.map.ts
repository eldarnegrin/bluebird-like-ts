
//--------------------------------------------------

import { CallBack } from "./promise.utils.js";

//
export async function mapParallel(iterable: Iterable<any>, cb: CallBack){
    const results = [];
    const pending = Array.from(iterable, item => cb(item));
    // const array = Array.from(iterable);
    // const pending = array.map(item => cb(item));

    for (const p of pending) {
        results.push(await p); 
    }
    return results;
}

//--------------------------------------------------

export async function mapSeries(iterable: Iterable<any>, cb: CallBack){
    const results = [];
    for (const item of iterable) {
        results.push(await cb(item));
    }
    return typeof iterable === 'string' ? results.join('') : results;
}

//--------------------------------------------------
