const {series,parallel} = require('gulp');

function clean(cb){
    cb();
}

function cssTranspile(cb){
    cb();
}

function cssMinify(cb){
    cb();
}

function jsTranspile(cb){
    cb();
}

function jsBundle(cb){
    cb();
}

function jsMinify(cb){
    cb();
}

function publish(cb){
    cb();
}

exports.build = series(
    clean,
    parallel(
        cssTranspile,
        series(jsTranspile,jsBundle)
    ),
    parallel(cssMinify,jsMinify),
    publish    
)
