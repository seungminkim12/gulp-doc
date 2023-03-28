const {watch, series} = require('gulp');

function clean(cb){
    cb();
}

function javascript(cb){
    cb()
}

function css(cb){
    cb()
}

exports.default = function(){
    watch('src/*.css',css)

    // watch('src/*.js',series(clean,javascript))
    watch('src/*.js',{events : 'all'},function(cb){
        cb()
    })
}