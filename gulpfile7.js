const {rollup} = require('rollup')

exports.default = async function(){
    const bundle = await rollup({
        input: 'src/index.js'
    })

    return bundle.write({
        file:'output/bundle.js',
        format: 'iife'
    })
}