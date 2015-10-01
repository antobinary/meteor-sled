Package.describe({
  summary: 'Mobile first front-end library for creating high performance animations',
  version: '0.0.1',
  git: 'https://github.com/gthacoder/meteor-sled.git',
  documentation: null
});

Package.onUse(function(api) {
  api.use('stevezhu:sass@2.0.0');
  api.use('templating@1.1.4', 'client');
  api.addFiles('sass_include_paths.json', 'server');
  api.add_files('sled.scss', 'client');
  api.add_files('sled.js', 'client');
  api.add_files('slIcon.html', 'client');
  api.add_files('slIcon.js', 'client');
  api.export('toggleLeftDrawer', 'client');
  api.export('toggleRightDrawer', 'client');
  api.export('toggleLeftArrowClockwise', 'client');
  api.export('toggleRightArrowClockwise', 'client');
  api.export('toggleFAB', 'client');
});
