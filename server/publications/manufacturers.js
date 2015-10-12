Meteor.publish('manufacturers', function() {
  return Manufacturers.find();
});