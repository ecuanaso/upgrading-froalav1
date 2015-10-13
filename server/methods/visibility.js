Meteor.methods({
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
	}
});