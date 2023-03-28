function test(){
    return setTimeout(() => {Promise.resolve('test')},300)
}

function test2(){
    return setTimeout(() => {Promise.resolve('test2')},300)
}

test()
.then((rs) => {
    console.log('rs',rs)
})

test2.then((rs) => console.log('rs2',rs))