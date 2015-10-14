Template.rotatingBanner.onCreated(function() {
  this.subscribe('banners');
})

Template.rotatingBanner.onRendered(function(){
	this.autorun(function() {
	    if (!Template.instance().subscriptionsReady()) return;

	   	$('.slider').slider({full_width: true, height: 540 });
	 });
});

Template.rotatingBanner.helpers({
	'banner': function(){
		return RotatingBanner.find({ visibility: true }, {sort: { position: 1 }});
	}
});