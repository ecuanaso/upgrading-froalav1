Package.describe({
  name: 'orionjs:froala',
  summary: 'Froala editor for orion',
  version: '1.5.0',
  git: 'https://github.com/orionjs/orion'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    'orionjs:base@1.5.0',
    'orionjs:attributes@1.5.0',
    'less@2.5.0_1',
    'orionjs:filesystem@1.5.0',
    'froala:editor@2.0.0-rc.3-2',
    ]);

  api.imply([
    'froala:editor',
    ]);

  api.addFiles([
    'attribute.js',
    ]);

  api.addFiles([
    'froala.html',
    'froala.js',
    'froala.less',
    ], 'client');
});
