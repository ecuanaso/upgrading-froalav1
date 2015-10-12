orion.pages.addTemplate({
    template: 'pagesSimple', 
    layout: 'layout',
    name: 'Simple',
    description: 'Simple template',
}, {
  position: {
    type: Number,
    label: 'Position'
  },
  content: orion.attribute('froala', {
    label: 'Content'
  })
})