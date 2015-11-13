Meteor.publish('orionFileSystem', function() {
  return orion.filesystem.collection.find();
});