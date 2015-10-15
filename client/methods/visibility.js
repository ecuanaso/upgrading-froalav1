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

Template.orionMaterializeLayout.events({

	"change .switch-rotating-banner input": function(event, template) {
	  Meteor.call('toggleRotatingBanner', event.currentTarget.dataset.id, event.currentTarget.checked);
	},

	"change .switch-manufacturer input": function(event, template) {
	  Meteor.call('toggleManufacturer', event.currentTarget.dataset.id, event.currentTarget.checked);
	},

	// "change .switch-photogallery input": function(event, template) {
	//   Meteor.call('togglePhotoGallery', event.currentTarget.dataset.id, event.currentTarget.checked);
	// },

	// "change .switch-boxes input": function(event, template) {
	//   Meteor.call('toggleBoxes', event.currentTarget.dataset.id, event.currentTarget.checked);
	// },

	"change .switch-brands input": function(event, template) {
	  Meteor.call('toggleBrands', event.currentTarget.dataset.id, event.currentTarget.checked);
	}
});