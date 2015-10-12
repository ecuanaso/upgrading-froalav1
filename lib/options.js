Options.set('forbidClientAccountCreation', false);

Options.set('profileSchema', {
  picture: orion.attribute('image', {
      label: 'Picture',
      optional: true
  }),
  name: {
    type: String
  }
});

Options.set('defaultRoles', ['users']);

Options.set('siteName', 'Bylers')

Options.set('materialize.headerColor', 'marias-green-with-text')

ReactiveTemplates.set('collections.projects.index', 'adminProjectsIndex');

ReactiveTemplates.set('collections.favorites.index', 'favoritesIndex');
