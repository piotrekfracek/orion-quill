Package.describe({
  name:    'piotrekfracek:orion-quill',
  summary: 'Quill.js plugin for orion.js',
  version: '0.1.5',
  git:     'https://github.com/piotrekfracek/orion-quill'
});

Package.onUse(function(api) {

  api.versionsFrom('1.0');

  api.use([
    'blaze-html-templates@1.0.1',
    'orionjs:base@1.8.0',
    'orionjs:attributes@1.8.0',
    'orionjs:filesystem@1.8.0',
    'jquery'
  ]);

  api.addFiles('node_modules/quill/dist/quill.js',       'client');
  api.addFiles('node_modules/quill/dist/quill.core.css', 'client');
  api.addFiles('node_modules/quill/dist/quill.snow.css', 'client');

  api.addFiles(['attribute.js']);

  api.addFiles('quill.html', 'client');
  api.addFiles('quill.js',   'client');
  api.addFiles('quill.css',  'client');

});
