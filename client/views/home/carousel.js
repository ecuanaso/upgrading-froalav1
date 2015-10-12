Template.carousel.onCreated(function() {
  this.subscribe('manufacturers');
})

Template.carousel.helpers({
	manufacturerItem: function(){
		return Manufacturers.find({ visibility: true });
	}
});

Template.carousel.onRendered(function(){
	Meteor.setTimeout(function(){
      $("#owl-example").owlCarousel({
		autoPlay: 2000,
		items: 4,
		itemsMobile: [479,2]
	    });
    }, 100)   
});