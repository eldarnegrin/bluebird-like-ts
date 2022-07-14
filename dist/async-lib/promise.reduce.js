export async function reduce(iterable, cb, initial) {
    let aggregator = initial || iterable[0];
    for (const item of iterable){
        aggregator = await cb(aggregator, item);
    }
    return aggregator;
}
