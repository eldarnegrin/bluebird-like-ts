//--------------------------------------------------
export async function all(promises) {
    const results = [];
    for (const p of promises){
        results.push(await p);
    }
    return results;
} //--------------------------------------------------
 /* 
    export async function all(promises){
        const results = [];
        for (const p of promises) {
            // await echo('--[ inside ]--',3000);
            results.push(await p);
            // const v = await p;
            // results.push(v);
        }
        return results;
    } 

*/  //--------------------------------------------------
