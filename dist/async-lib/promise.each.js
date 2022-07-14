//--------------------------------------------------
export async function each(iterable, cb) {
    for (const item of iterable){
        await cb(item);
    }
    return iterable;
} //--------------------------------------------------
