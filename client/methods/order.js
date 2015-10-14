Template.orionMaterializePagesIndex.events({
	'keyup .order-pages' : function(event, template){
	  if (event.which === 27 || event.which === 13 ){		
		var savedid = event.currentTarget.dataset.id;
		var savedval = $(event.target).val();
		console.log(savedid, savedval);
		Meteor.call('changePageOrder', savedid, savedval);
	  }
	}
});

Template.orionMaterializeLayout.events({
	'keyup .order-banner' : function(event, template){
		if (event.which === 27 || event.which === 13 ){		

			var savedid = event.currentTarget.dataset.id;
			var savedval = $(event.target).val();
			console.log(savedid, savedval);
			Meteor.call('changeBannerOrder', savedid, savedval);
		}
	},
});