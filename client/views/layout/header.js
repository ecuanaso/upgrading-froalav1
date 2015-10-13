Template.header.onRendered(function() {
  $(".button-collapse").sideNav({
    closeOnClick: true
  });
})

Template.header.helpers({
  getPath: function() {
    return Router.path('categories.show', { value: this.value });
  },
  pages: function () {
    return orion.pages.collection.find({}, { sort: { position: 1 } });
  }
})
