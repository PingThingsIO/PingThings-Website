import gulp from 'gulp';
import task from './lib/task';
import config from '../credentials';

var s3 = require('gulp-s3-upload')(config.s3);
var s3Buckets = ['www.pingthings.io', 'www.pingthings.ai', 'www.predictivegrid.ai'];

var pushToBucket = (bucketName) => {
  gulp.src("./build/**")
    .pipe(s3({
      Bucket: bucketName,
      ACL: 'public-read'
    }, {
      maxRetries: 5
    }));

};

export default task(async function deploy() {
  process.argv.push('release');
  await require('./build')();

  s3Buckets.map(bucketName => pushToBucket(bucketName));
  
});