var less = require('gulp-less');
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var concatCss = require('gulp-concat-css');
var minimiseCss = require('gulp-clean-css');


//////                    ****>>>   LESS (less)  <<<*****

gulp.task('less', function () {                                      //new task
    return gulp.src('./less/*.less')                            //open file *.less
        .pipe(less())                                                //use less plugin
//        .pipe(concatCss("main.css"))                     //new file have name main.css
//        .pipe(minimiseCss())
        .pipe(gulp.dest('./css'))                               //write file
        .pipe(browserSync.reload({
                stream:true
            })
        )
});


///////                      ****>>> Browser-Sync <<<******

gulp.task('browserSync', function() {
  browserSync.init({
    proxy: 'localhost/MyProjectSite/site/index.php',
    files: 'localhost/MyProjectSite/site/index.php'
  })
});


///////                  *****>>>    Watch(less + browserSync)   <<<<<*******

gulp.task('watch', function() {
    gulp.watch('./less/*.less', gulp.parallel('less'));
    gulp.watch('./*.php', gulp.parallel('browserSync'));             // watch( path, [options], [task])
    // gulp.watch('./*.php', 'images');
});

