import gulp from 'gulp';
import task from './lib/task';
import config from '../credentials';

var s3 = require('gulp-s3-upload')(config.s3);

export default task(async function deploy() {
  process.argv.push('release');
  await require('./build')();

  gulp.src("./build/**")
    .pipe(s3({
      Bucket: 'www.pingthings.io',
      ACL: 'public-read'
    }, {
      maxRetries: 5
    }));

});