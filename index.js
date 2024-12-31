const start = () => {
   return new Promise((resolve, reject) => {
        setTimeout(function a() {
            console.log('Start');
            resolve(1);
        }, 1500)
   });
}

const doing = () => {
    return new Promise((resolve, reject) => {
        setTimeout(function b() {
            console.log('Doing');
            resolve(2);
        }, 500)
    });
   
}


const end = () => {
    return new Promise((resolve, reject) => {
        setTimeout(function c(){
            console.log('End');
            resolve(3);
        }, 1000)
    });
   
}

// async 
// start().then(r1 => {
//     console.log(r1);
//     doing().then(r2 => {
//         console.log(r2);
//         end().catch(err3 => {});
//     }).catch(err2 => {});
// }).catch(e1 => {

// })

async function init() {
    const r1 = await start();
    const r2 = await doing();
    const r3 = await end();
}

init().catch(err => {
    
});
 


