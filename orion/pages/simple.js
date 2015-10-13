orion.pages.addTemplate({
    template: 'pagesSimple', 
    layout: 'layout',
    name: 'Simple',
    description: 'Simple template',
}, {
  parentId: {
    type: String,
    label: "Parent",
    optional: true,
    autoform: {
      options: function() {
          return orion.pages.collection.find().map(function(page) { 
            return { 
              label: page.title, value: page.title 
            }; 
          });
      }
    }
  },
  
  position: {
    type: Number,
    label: 'Position'
  },

  metatitle: {
    type: String,
    label: 'Meta title',
  },

  metadescription: {
    type: String,
    label: 'Meta description',
    optional: true,
    autoform: {
        afFieldInput: {
          type: "textarea",
          rows: 10
        }
      }
  },

  metakeywords:{
    type: String,
    optional: true,
    label: 'Meta keywords',
    autoform: {
        afFieldInput: {
          type: "textarea",
          rows: 10
        }
      }
  },

  content: orion.attribute('froala', {
    label: 'Content'
  }),

  navbar: {
      type: Boolean,
      label: 'Visible inside navbar?',
      defaultValue: true
    },

    footer: {
      type: Boolean,
      label: 'Visible inside footer?',
      defaultValue: true
    }
})