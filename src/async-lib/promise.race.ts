//--------------------------------------------------
    // Doesn't work!
    // export async function race(promises) {
    //     const results = [];
    //     // for (const p of promises) {
    //     //     results.push(await p);
    //     // }

    //       promises.forEach(async p => {
    //         results.push(await p);
    //       });

    //     return  results[0];
    // }
//--------------------------------------------------
    // you have to use the Promise object
    export function race(promises: Promise<any>[]): Promise<any> {
        return new Promise((resolve)=>{
            promises.forEach(async p => {
                resolve(await p);
            });
        })
    } 
//--------------------------------------------------
    // same here - you have to use the Promise object
export function some(promises: Promise<any>[],num: number): Promise<any> {
    const results: Array<any> = [];
    return new Promise((resolve)=>{
        promises.forEach(async p => {
            results.push(await p);
            if(results.length === num) resolve(results); 
        });
    })
}