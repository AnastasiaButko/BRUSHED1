'use strict';

// REQUIRES
///////////////////////////////////////////////

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sync = require('browser-sync');

var path = {
    src:{
        html:'app/*.html',
        css:'app/css/'
    },
    watch:{
        html:'app/**/*.html',
        scss:'app/scss/**/*.scss'
    },
    basedir:'app/'
};

gulp.task('sync:server',function(){
    sync({
        server:{
            basedir:path.basedir
        },
        port:8080,
        open:true,
        notify:false
    });  
});

gulp.task('sync:html',function(){
    return gulp.src(path.watch.html)
    .pipe(sync.reload({
        stream:true
    }));
});

gulp.task ('sync:sass',function(){
          return gulp.src(path.watch.scss)
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest(path.src.css))
            .pipe(sync.reload({
                stream:true
          }));
});

gulp.task('watch',['sync:server', 'sync:sass', 'sync:html'],function(){
            gulp.watch(path.watch.scss,['sync:sass']),
            gulp.watch(path.watch.html,['sync:html']),
                gulp.watch(path.watch.server,['sync:server']);
});






///*'use strict';
//
//// requires
////////////////////////
//var gulp = require('gulp'),
//    sass = require('gulp-sass'),
//    pug = require('gulp-pug'),
//    sync = require('browser-sync'),
//    cleancss = require('gulp-clean-css'),
//    del = require('del');
//
//// path
////////////////////////
//var path = {
//    src: { 
//        html: 'app/*.html',
//        pug: 'app/pug/*.pug',
//        css: 'app/css/',
//        cssinput: 'app/css/**.css'
//    },
//    watch: {
//        html:'dev/**/*.html',
//        pug: 'app/pug/**/*.pug',
//        scss: 'app/scss/**/*.scss'        
//    },
//    build: {
//        basedir: 'dest/',
//        css: 'dest/css/'
//    },
//    basedir: 'app/'
//};
//
//// watch
////////////////////////
//
//// watch:server
//gulp.task('watch:server', function() {
//    sync({
//        server: {
//            baseDir: path.basedir            
//        },
//        port: 8080,
//        open: true,
//        notify: false
//    });
//});
//
//// watch:sass
//gulp.task('watch:sass', function() {
//    return gulp.src(path.watch.scss)
//        .pipe(sass().on('error', sass.logError))
//        .pipe(gulp.dest(path.src.css))
//        .pipe(sync.reload({
//            stream: true
//        }));
//});
//
//// watch:pug
//gulp.task('watch:pug', function() {
//    return gulp.src(path.src.pug)
//        .pipe(pug({
//            pretty: true
//        })
//        .on('error', function(error) {
//            console.log(error);
//            this.end();
//           })
//        )      
//        .pipe(gulp.dest(path.basedir))
//        .pipe(sync.reload({
//            stream: true
//        }));
//});
//
//// watch all
//gulp.task('watch', ['watch:server','watch:pug','watch:sass', 'watch:html'], function() {
//    gulp.watch(path.watch.pug, ['watch:pug']);
//     gulp.watch(path.watch.html,['sync:html']),
//    gulp.watch(path.watch.scss, ['watch:sass']);    
//})
//
//// build
////////////////////////
//
//// build:html
//gulp.task('build:css', function() {
//    gulp.src(path.src.cssinput)
//        .pipe(cleancss())        
//        .pipe(gulp.dest(path.build.css));
//});
//
//// build:clean
//gulp.task('build:clean', function() {
//    return del.sync(path.build.basedir);
//});
//
//// build all
//gulp.task('build', ['build:clean', 'build:css']);*/*/