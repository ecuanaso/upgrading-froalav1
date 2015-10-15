orion.dictionary.addDefinition('logo', 'home', 
	/**
	 * The file attribute is a custom orion attribute
	 * This is where orion do the magic. Just set 
	 * the attribute type and it will automatically
	 * create the form for the file.
	 * WARNING: the url of the image will not be saved in
	 * logo, it will be saved in logo.url.
	 */
	orion.attribute('file', {
	    label: 'Site Logo',
	    optional: true
	})
);

orion.dictionary.addDefinition('topHeadline', 'home', {
	type: String,
	label: 'Top headline'
});

orion.dictionary.addDefinition('hop1', 'home', {
	type: String,
	label: 'Hours of Operation line 1'
});

orion.dictionary.addDefinition('hop2', 'home', {
	type: String,
	label: 'Hours of Operation line 2'
});

orion.dictionary.addDefinition('hop3', 'home', {
	type: String,
	label: 'Hours of Operation line 3'
});

orion.dictionary.addDefinition('address', 'home', {
	type: String,
	label: 'Street Address'
});

orion.dictionary.addDefinition('city', 'home', {
	type: String,
	label: 'City'
});

orion.dictionary.addDefinition('state', 'home', {
	type: String,
	label: 'State'
});

orion.dictionary.addDefinition('zipcode', 'home', {
	type: String,
	label: 'Zipcode'
});

orion.dictionary.addDefinition('phone', 'home', {
	type: String,
	label: 'Phone Number'
});

// orion.dictionary.addDefinition('hop', 'home', {
// 	type: String,
// 	label: 'Hours of Operation',
// 	autoform: {
// 	    afFieldInput: {
// 	      type: "textarea",
// 	      rows: 10,
// 	      class:'materialize-textarea'
// 	    }
// 	  }
// });



orion.dictionary.addDefinition('middleHeadline', 'home', {
	type: String,
	label: 'Headline Above Left/Right Content'
});

orion.dictionary.addDefinition('middleHeadlineLink', 'home', {
	type: String,
	label: 'Headline Link'
});

orion.dictionary.addDefinition('middleHeadlineColor', 'home', {
	type: String,
	label: "Headline Color",
	optional: true,
	autoform: {
		type: 'color'
	}
});

orion.dictionary.addDefinition('left', 'home',
  orion.attribute('froala', {
  	label: 'Left Content'
  })
);

orion.dictionary.addDefinition('right', 'home',
  orion.attribute('froala', {
  	label: 'Right Content'
  })
);

orion.dictionary.addDefinition('title', 'home', {
	type: String,
	label: 'Title of the home (SEO)'
});

orion.dictionary.addDefinition('description', 'home', {
	type: String,
	label: 'Description (SEO)',
	autoform: {
	    afFieldInput: {
	      type: "textarea",
	      rows: 10,
	      class:'materialize-textarea'
	    }
	  }
});

orion.dictionary.addDefinition('favIcon', 'home',
  orion.attribute('image')
);

orion.dictionary.addDefinition('footerTitle', 'home', {
	type: String,
	label: 'Title (Footer)'
});

orion.dictionary.addDefinition('copyright', 'home', {
	type: String,
	label: 'Copyright Info (Footer)'
});