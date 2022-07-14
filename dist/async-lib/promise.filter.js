//--------------------------------------------------
export async function filterSeries(iterable, cb) {
    const results = [];
    for (const item of iterable){
        if (await cb(item) === true) results.push(item);
    }
    return typeof iterable === 'string' ? results.join('') : results;
}
//--------------------------------------------------
export async function filterParallel(iterable, cb) {
    const results = [];
    const pending = Array.from(iterable, (item)=>cb(item));
    for (const [i, p] of pending.entries()){
        if (await p === true) results.push(iterable[i]);
    }
    return typeof iterable === 'string' ? results.join('') : results;
} //--------------------------------------------------
