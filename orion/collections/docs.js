Docs = new orion.collection('docs', {
  singularName: 'Doc',
  pluralName: 'Docs',
  title: 'Docs',
  link: {
    title: 'Docs',
    index: 70
    // parent: 'media'
  },
  tabular: {
    columns: [
      { data: 'title', title: 'Title'},
      orion.attributeColumn('file', 'image', 'Image'),
      // { data: 'description', title: 'Description' },
      orion.attributeColumn('createdAt', 'createdAt', 'Date'),
      { data: 'actions',className: 'center-align',orderable: false, title: 'Actions',
        render: function (val,type,doc){
          return '<a href="' + Router.path('collections.docs.update', doc) +'" class="btn btn-xs waves-effect waves-light light-blue accent-4 user-btn-action">Edit</a>'
        },
        tmpl: Meteor.isClient && Template.actionBtns
     }
    ]
  }
});

Docs.attachSchema(new SimpleSchema({
  title: {
    label: 'Title',
    type: String
  },
  
  image: orion.attribute('file', {
    label: 'Menu',
    optional: true
  }),
  // description: {
  //   type: String
  // },
  createdAt: orion.attribute('createdAt')
}));