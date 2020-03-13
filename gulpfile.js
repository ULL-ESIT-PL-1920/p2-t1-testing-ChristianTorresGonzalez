let gulp = require('gulp');
let shell = require('gulp-shell');

gulp.task("get-guttenberg-files", shell.task(
  'cd../data &&' + 
  'curl -O https://www.gutenberg.org/cache/epub/feeds/rdf-files.tar.bz2 &&' + 
  'tar -xvjf rdf-files.tar.bz2'
));
