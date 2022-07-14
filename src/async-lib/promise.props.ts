
interface IObject {
  [key: string]: any;
}

export async function props(promisesObj: Promise<any>[]) {
  const results: IObject = {};
  for (const key in promisesObj) {
    results[key] = await promisesObj[key];
  }  
  return results;
}