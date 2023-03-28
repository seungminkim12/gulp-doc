const {src,dest,parallel} = require('gulp');
const {EventEmitter} = require('events');
const {exec} = require('child_process');
const {Observable} = require('rxjs');

function streamTask() {
    return src('*.js')
    .pipe(dest('output'));
}

function promiseTask(){
    return Promise.resolve('the value is ignored');
}

function eventEmitterTask(){
    const emitter = new EventEmitter();
    setTimeout(() => emitter.emit('finish'),250);
    return emitter;
}

function childProcessTask(){
    return exec('date')
}

// function observableTask(){
//     return Observable.of(1,2,3);
// }


exports.build = parallel(streamTask,promiseTask,eventEmitterTask,childProcessTask)
exports.default = streamTask;