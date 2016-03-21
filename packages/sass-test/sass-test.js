import sass from 'node-sass';
//const sass = Npm.require('node-sass');

Plugin.registerCompiler({
  extensions: ['scss'],
  archMatching: 'web'
}, function () {
  return new ScssBuildPlugin();
});

class ScssBuildPlugin {
  processFilesForTarget(files) {
    console.log('scss')
    files.forEach(file =>file.addStylesheet({
      data: sass.renderSync({data: file.getContentsAsString()}).css.toString('utf-8'),
      path: file.getPathInPackage()
    }));
  }
}