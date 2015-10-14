RotatingBanner.attachSchema(new SimpleSchema({
	title: {
		type: String,
		label: 'Title'
	},

	position: {
	    type: Number,
	    label: 'Order',
	    optional: true,
	    autoValue: function(){
	      var pos = this.field('position');

	      if (!pos.isSet ){
	        return 0;
	    }
	  }
	},

	bigSlogan: {
	    type: String,
	    label: 'Big Slogan',
	    optional: true
	},

	smallSlogan: {
		type: String,
		label: 'Small Slogan',
		optional: true
	},

	link : {
		type: String,
		label: 'Link for small slogan',
		optional: true
	},

	image: orion.attribute('image', {
		label: 'Image'
	}),

	visibility: {
	    type: Boolean,
	    label: 'Check to add inside slideshow',
	    defaultValue: true
	}
}));