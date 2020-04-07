const
    {src, dest} = require('gulp')
    pug = require('gulp-pug')

module.exports = function pages() {
    return src('src/pages/*.pug')
        .pipe(pug())
        .pipe(dest('build'))
}