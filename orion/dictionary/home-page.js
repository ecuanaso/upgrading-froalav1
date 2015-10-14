orion.dictionary.addDefinition('logo', 'home page', 
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

orion.dictionary.addDefinition('topHeadline', 'home page', {
	type: String,
	label: 'Top headline'
});

orion.dictionary.addDefinition('hop1', 'home page', {
	type: String,
	label: 'Hours of Operation line 1'
});

orion.dictionary.addDefinition('hop2', 'home page', {
	type: String,
	label: 'Hours of Operation line 2'
});

orion.dictionary.addDefinition('hop3', 'home page', {
	type: String,
	label: 'Hours of Operation line 3'
});

orion.dictionary.addDefinition('address', 'home page', {
	type: String,
	label: 'Street Address'
});

orion.dictionary.addDefinition('city', 'home page', {
	type: String,
	label: 'City'
});

orion.dictionary.addDefinition('state', 'home page', {
	type: String,
	label: 'State'
});

orion.dictionary.addDefinition('zipcode', 'home page', {
	type: String,
	label: 'Zipcode'
});

orion.dictionary.addDefinition('phone', 'home page', {
	type: String,
	label: 'Phone Number'
});

// orion.dictionary.addDefinition('hop', 'home page', {
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



orion.dictionary.addDefinition('middleHeadline', 'home page', {
	type: String,
	label: 'Headline Above Left/Right Content'
});

orion.dictionary.addDefinition('middleHeadlineLink', 'home page', {
	type: String,
	label: 'Headline Link'
});

orion.dictionary.addDefinition('middleHeadlineColor', 'home page', {
	type: String,
	label: "Headline Color",
	optional: true,
	autoform: {
		type: 'color'
	}
});

orion.dictionary.addDefinition('left content', 'home page',
  orion.attribute('froala')
);

orion.dictionary.addDefinition('right content', 'home page',
  orion.attribute('froala')
);


orion.dictionary.addDefinition('title', 'home page', {
	type: String,
	label: 'Title of the home page (SEO)'
});

orion.dictionary.addDefinition('description', 'home page', {
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

orion.dictionary.addDefinition('favIcon', 'home page',
  orion.attribute('image')
);

orion.dictionary.addDefinition('footerTitle', 'home page', {
	type: String,
	label: 'Title (Footer)'
});

orion.dictionary.addDefinition('copyright', 'home page', {
	type: String,
	label: 'Copyright Info (Footer)'
});