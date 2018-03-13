//  my way - wrong!!!

// let randomPromise = new Promise(function(resolve, reject) {
//     let newArr = []
//     for(let i = 0; i < 100; i++) {
//         newArr.push(i)
//     }
//     resolve(newArr)

// })

// randomPromise.then((frr) => {
//     for(let i = 0; i < frr.length; i++){
//         setTimeout(function() {
//             console.log("from " + frr[i]);        
//         }, 1000 * i)
//     }
// })

// randomPromise.catch(() => "mess up again")

// good way:
// clueLess

let newArr = []

for (let i = 0; i < 100; i++) {
    newArr[i] = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("from " + i);
            resolve()
        }, 100 * i)
    })
}

Promise.all(newArr).then(function () {
    console.log("all DONE")
});