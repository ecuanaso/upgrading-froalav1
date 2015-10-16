Meteor.publish('boxes', function() {
  return Boxes.find();
});