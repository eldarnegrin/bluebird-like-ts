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
export function race(promises) {
    return new Promise((resolve)=>{
        promises.forEach(async (p)=>{
            resolve(await p);
        });
    });
}
//--------------------------------------------------
// same here - you have to use the Promise object
export function some(promises, num) {
    const results = [];
    return new Promise((resolve)=>{
        promises.forEach(async (p)=>{
            results.push(await p);
            if (results.length === num) resolve(results);
        });
    });
}
