import task from './lib/task';
import upload from 's3-upload'

export default task(async function deploy() {
  process.argv.push('release');
  await require('./build')();
  upload();


});
