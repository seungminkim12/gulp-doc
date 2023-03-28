const {src,dest} = require('gulp')
const gulpif = require('gulp-if')
const uglify = require('gulp-uglify')
const through2 = require('through2')
const uglify2 = require('uglify-js')

function isJavascript(file) {
    return file.extname === '.js';
}

exports.default = function(){
    // return src(['src/*.js','src/*.css'])
    // .pipe(gulpif(isJavascript,uglify()))
    return src('src/*.js')
    // Instead of using gulp-uglify, you can create an inline plugin
    .pipe(through2.obj(function(file,_,cb){
        if(file.isBuffer()){
            const code = uglify2.minify(file.contents.toString())
            file.contents = Buffer.from(code.code)
        }
        cb(null,file)
    }))    
    .pipe(dest('output/'))
}