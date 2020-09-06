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
        res(a + b);
    }, Math.random() * 1000)
    })
}

function sumAll() {
    // asyncSum(1, 1, (result) => {
    //     asyncSum(1, result, (result) => {
    //         asyncSum(1, result, () => {})
    //     })
    // });
    // asyncSum(1, 2);
    // asyncSum(1, 3);
    asyncSum(1, 1).then(result => {
        return asyncSum(1, result);
    }).then(result => {
        return asyncSum(1, result);
    })
}

sumAll();