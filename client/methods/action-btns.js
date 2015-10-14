Template.actionBtns.events({
	"click  #deleteRow": function(){
		Meteor.call('removeRow',this._id);
	}

});