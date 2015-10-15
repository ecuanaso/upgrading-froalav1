Template.adminHeaderReplace.replaces("orionMaterializeHeaderContainer");

Template.adminHeaderReplace.events({
  'click .logout': function() {
    Meteor.logout();
  }
});

