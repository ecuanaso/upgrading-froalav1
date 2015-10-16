Template.footer.onCreated(function() {
  this.subscribe('pages');
})

Template.footer.helpers({
  pages: function () {
    return orion.pages.collection.find({}, { sort: { position: 1 } });
  },
  'parentPage': function(){
		return orion.pages.collection.find({ footer: { $ne: false }, parentId: { $exists: false }}, { sort: { position: 1 }});
  },
	'childPage': function(parent){
		return orion.pages.collection.find({ footer: { $ne: false }, parentId: parent }, { sort: { position: 1 }});
  },
	'grandChildPage': function(parent){
	return orion.pages.collection.find({ footer: { $ne: false }, parentId: parent }, { sort: { position: 1 }});
  }
});