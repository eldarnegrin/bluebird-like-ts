export async function props(promisesObj) {
    const results = {};
    for(const key in promisesObj){
        results[key] = await promisesObj[key];
    }
    return results;
}
