const {series} = require('gulp');

function minify(cb){
    cb();
}

function transpile(cb){
    cb();
}

function livereload(cb){
    cb();
}

if(process.env.NODE_ENV === 'production'){
    exports.build = series(transpile,minify)
}else {
    exports.build = series(transpile, livereload)
}