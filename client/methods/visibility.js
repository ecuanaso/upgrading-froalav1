Template.orionMaterializePagesIndex.events({
	"change .switch-navbar input": function(event, template) {
	  console.log('switched');
	  Meteor.call('toggleNavbar', event.currentTarget.dataset.id, event.currentTarget.checked);
	},

	"change .switch-footer input": function(event, template) {
	  console.log('switched');
	  Meteor.call('toggleFooter', event.currentTarget.dataset.id, event.currentTarget.checked);
	}
});