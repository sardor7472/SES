const   gulp        = require('gulp'),
        sass        = require('gulp-sass'),
        rename      = require('gulp-rename'),
        browsersync = require('browser-sync').create(),
        cleanCSS    = require('gulp-clean-css'),
        notify      = require("gulp-notify");


function Sass () {
    return gulp.src('./app/scss/**/*.scss')
        .pipe(sass({outputStyle: 'expand'}).on("error", notify.onError()))
        .pipe(rename({ suffix: '.min' }))
        .pipe(cleanCSS())
        .pipe(gulp.dest('./app/css'))
        .pipe(browsersync.reload({
            stream: true
        }))
}
function browserSync (done) {
    browsersync.init({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
    done()
}

function watchFiles () {
    gulp.watch("./app/scss/**/*", Sass);
    gulp.watch('./app/*.html', browserSyncReload);
    gulp.watch('./app/js/*.js', browserSyncReload);
}

function browserSyncReload(done) {
    browsersync.reload();
    done();
}

const watch = gulp.parallel(watchFiles, browserSync);

exports.default = watch;
