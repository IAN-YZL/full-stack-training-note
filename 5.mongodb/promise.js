// function asyncSum(a, b, cb) {
//     setTimeout(() => {
//         console.log(a + b);
//         cb(a + b);
//     }, Math.random() * 1000)
// }

function asyncSum(a, b) {
    return new Promise((res, rej) => {

        setTimeout(() => {
        console.log(a + b);
        if(Math.random() > 0.5) {
            res(a + b);
        }
        rej("no!");
    }, Math.random() * 1000)
    })
}

// function sumAll() {
    // asyncSum(1, 1, (result) => {
    //     asyncSum(1, result, (result) => {
    //         asyncSum(1, result, () => {})
    //     })
    // });
    // asyncSum(1, 2);
    // asyncSum(1, 3);
    // asyncSum(1, 1).then(result => {
    //     return asyncSum(1, result);
    // }).then(result => {
    //     return asyncSum(1, result);
    // }).catch(error => {
    //     console.log(error);
    // })
// }

//async await
async function sumAll() {
    try {
        let result = await asyncSum(1, 1);
        result = await asyncSum(1, result);
        result = await asyncSum(1, result);
    } catch (error) {
        console.log(error);
    }
    
}



sumAll();