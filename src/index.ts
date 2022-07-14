import log from "@ajar/marker";
// import { 
//     echo, 
//     random, 
//     all, 
//     props, 
//     each, 
//     mapParallel, 
//     mapSeries,
//     filterParallel, 
//     filterSeries,
//     reduce,
//     race,
//     some
// } from './async-lib/index.js'
import * as P from './async-lib/index.js'

log.blue("------------------------------------->");

// --------------------------------------------------

// const promise1 = P.echo("1 first resolved value", 3000);
// const promise2 = P.echo("2 second resolved value", 3000);
// const promise3 = P.echo("3 third resolved value", 3000);

// let run = async () => console.log(await P.all([ promise1, promise2, promise3 ]));
// // let run = async () => console.log(await P.props({ promise1, promise2, promise3 }));

// run();  

// (async ()=> {

    
//     console.log(await P.all([ promise1, promise2, promise3 ]));
//     // console.log(await P.props({ promise1, promise2, promise3 }));
// })()


// //--------------------------------------------------

// let run = async () => console.log(await all([
//     P.echo('1 first resolved value',3000),
//     P.echo('2 second resolved value',3000),
//     P.echo('3 third resolved value',3000)
// ]));

// run();

// //--------------------------------------------------


;(async ()=> {

    const promise1 = P.echo("1 first resolved value", 3000);
    const promise2 = P.echo("2 second resolved value", 3000);
    const promise3 = P.echo("3 third resolved value", 3000);

/**   P.all()  **/
    // console.log(await P.all([ promise1, promise2, promise3 ]));

/**   P.props()  **/
    // console.log(await P.props({ promise1, promise2, promise3 }));

/**   P.each()  **/
    // log.yellow(

    //     await P.each('Geronimo', async char => {
    //         log.cyan(`${char} -->`);
    //         await P.delay( P.random(2000,500) );
    //         log.magenta(`<-- ${char}`);
    //         return char.toUpperCase(); // No effect...
    //     }) 

    // )

/**   P.mapParallel()  **/
    // log.yellow(

    //     await P.mapParallel('Geronimo', async char => {
    //         await char;
    //         log.cyan(`${char} -->`);
    //         await P.delay( P.random(2000,500) );
    //         log.magenta(`<-- ${char}`);
    //         return char.toUpperCase(); // Modify each item in the iterable
    //     }) 

    // ) 
    // log.yellow(

    //     await P.mapParallel('Geronimo', async char => {
    //         log.cyan(`${char} -->`);
    //         await P.delay( P.random(2000,500) );
    //         log.magenta(`<-- ${char}`);
    //         return char.toUpperCase(); // Modify each item in the iterable
    //     }) 

    // ) 

/**   P.mapSeries()  **/
    // log.yellow(

    //     await P.mapSeries('Geronimo', async char => {
    //         log.cyan(`${char} -->`);
    //         await P.delay( P.random(2000,500) );
    //         log.magenta(`<-- ${char}`);
    //         return char.toUpperCase(); // Modify each item in the iterable
    //     }) 

    // )

/**   P.filterParallel()  **/
    // log.yellow(
    //     // filter only alphabetic characters
    //     await P.filterParallel('G<4!e3ro0ni1mo', async char => {
    //         log.cyan(`${char} -->`);
    //         await P.delay( P.random(2000,500) );
    //         log.magenta(`<-- ${char}`);
    //         return /^[A-Za-z]+$/.test(char); // test for alphabetic characters
    //     }) 

    // )

/**   P.filterSeries()  **/
    // log.yellow(
    //     // filter only alphabetic characters
    //     await P.filterSeries('G<4!e3ro0ni1mo', async char => {
    //         log.cyan(`${char} -->`);
    //         await P.delay( P.random(1000,100) );
    //         log.magenta(`<-- ${char}`);
    //         return /^[A-Za-z]+$/.test(char); // test for alphabetic characters
    //     }) 

    // )


/**   P.reduce()  **/
    // log.yellow(
    //     // filter only alphabetic characters
    //     await P.reduce([51,64,25,12,93], async (total,num) => {
    //         log.cyan(`${num} -->`);
    //         await P.delay( P.random(1000,100) );
    //         log.magenta(`<-- ${num}`);
    //         return total + num;
    //     },0) 

    // )

/**   P.race()  **/
    // log.yellow( 
    //     // filter only alphabetic characters
    //     await P.race([
    //             P.echo('first',4000),
    //             P.echo('second',1000),
    //             P.echo('third',3000)
    //         ]) 
    // )

/**   P.some()  **/
    log.yellow(
        // filter only alphabetic characters
        await P.some([
                P.echo('first',4000),
                P.echo('second',400),
                P.echo('third',3000),
                P.echo('forth',3000),
                P.echo('fifth',500),
            ],2) 
        )

})()


// const people = [
//     {"id":1,"name":"Guillema Jurek","age":84,"card":"china-unionpay"},
//     {"id":2,"name":"Hailee Steeden","age":66,"card":"instapayment"},
//     {"id":3,"name":"Othelia Loughren","age":30,"card":"instapayment"},
//     {"id":4,"name":"Rafaello Nanni","age":76,"card":"instapayment"},
//     {"id":5,"name":"Roxie Capelen","age":80,"card":"jcb"},
//     {"id":6,"name":"Sue Trench","age":88,"card":"mastercard"},
//     {"id":7,"name":"Galvin Resun","age":46,"card":"diners-club-international"},
//     {"id":8,"name":"Evonne Dudeney","age":84,"card":"china-unionpay"},
//     {"id":9,"name":"Camala Dalgardno","age":37,"card":"diners-club-international"},
//     {"id":10,"name":"Lorne Brackstone","age":69,"card":"diners-club-international"},
//     {"id":11,"name":"Richart Ajam","age":27,"card":"diners-club-international"},
//     {"id":12,"name":"Noellyn Stranks","age":68,"card":"americanexpress"},
//     {"id":13,"name":"Deirdre Morrowe","age":24,"card":"instapayment"},
//     {"id":14,"name":"Denny Fabri","age":23,"card":"mastercard"},
//     {"id":15,"name":"Adriane Splevings","age":57,"card":"visa"},
//     {"id":16,"name":"Deana Marcinkowski","age":51,"card":"china-unionpay"},
//     {"id":17,"name":"Lynette Goulden","age":39,"card":"visa"},
//     {"id":18,"name":"Petronilla Mulvin","age":83,"card":"mastercard"},
//     {"id":19,"name":"Rupert Djokovic","age":38,"card":"visa"},
//     {"id":20,"name":"Florian Bremmell","age":80,"card":"jcb"},
//     {"id":21,"name":"Baldwin Tremain","age":22,"card":"mastercard"},
//     {"id":22,"name":"Kilian Brise","age":44,"card":"mastercard"},
//     {"id":23,"name":"Hettie Brechin","age":46,"card":"americanexpress"},
//     {"id":24,"name":"Daune Vaisey","age":75,"card":"americanexpress"},
//     {"id":25,"name":"Izaak Hamper","age":41,"card":"visa"}
// ];

// console.table(
//     people.reduce((tally,{card,age})=> {
//         if(! (card in tally) ) tally[card] = {count:0,minAge:0,maxAge:0,avgAge:0,sumAge:0};
//         tally[card].count++;
//         tally[card].sumAge += age;
//         const {minAge,maxAge,sumAge,count} = tally[card]; // extract;
//         if(!minAge || age < minAge) tally[card].minAge = age; // assign
//         if(!maxAge || age > maxAge) tally[card].maxAge = age; // assign
//         if(!maxAge || age > maxAge) tally[card].maxAge = age; // assign
//         tally[card].avgAge = Math.ceil(sumAge / count); // assign
//         return tally;
//     },{})
// )
