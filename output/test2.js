function test(){
    return setTimeout(() => {Promise.resolve('test')},300)
}

test()
.then((rs) => {
    console.log('rs',rs)
})