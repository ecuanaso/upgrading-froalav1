Meteor.publish('banners', function() {
  return RotatingBanner.find({}, { sort: { position: 1 } });
});