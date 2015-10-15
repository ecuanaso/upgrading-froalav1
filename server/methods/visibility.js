Meteor.methods({
	'toggleRotatingBanner': function(imageid, imagehidden){
		check(imageid, String);
		check(imagehidden, Boolean);
		RotatingBanner.update({_id: imageid}, { $set : { visibility: imagehidden }});
	},

	'toggleManufacturer': function(imageid, imagehidden){
		check(imageid, String);
		check(imagehidden, Boolean);
		Manufacturers.update({_id: imageid}, { $set : { visibility: imagehidden }});
	},
	
	'toggleNavbar' : function(pageid, pagehidden){
	    check(pageid, String);
	    check(pagehidden, Boolean);
	    console.log(pageid, pagehidden);
	    orion.pages.collection.update({_id: pageid}, {$set: { navbar: pagehidden }});		
	},

	'toggleFooter' : function(pageid, pagehidden){
	    check(pageid, String);
	    check(pagehidden, Boolean);
	    console.log(pageid, pagehidden);
	    orion.pages.collection.update({_id: pageid}, {$set: { footer: pagehidden }});		
	},
	'toggleBrands': function(imageid, imagehidden){
		check(imageid, String);
		check(imagehidden, Boolean);
		Stores.update({_id: imageid}, { $set : { hidden: imagehidden }});
	}
});