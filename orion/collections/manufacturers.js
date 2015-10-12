Manufacturers.attachSchema(new SimpleSchema({
	image: orion.attribute('image', {
		label: 'Manufacturer logo'
	}),
	website: {
		type: String,
		label: "Website",
		optional: true
	},

	visibility: {
	    type: Boolean,
	    label: 'Check to turn Manufacturer On/Off',
	    defaultValue: true
	}
}));