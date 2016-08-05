Package.describe({
  name: 'jss:sweetalert',
  version: '1.0.0',
  summary: 'A beautiful replacement for JavaScript\'s \"alert\".',
  git: 'https://github.com/JSSolutions/meteor-sweetalert',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom("METEOR@0.9.1.1");

  api.add_files([
    'dist/sweetalert.css',
    'dist/sweetalert-dev.js'
  ], ['client']);
});