topCategories = [
  { label: 'Fireplaces',
     value: 'fireplaces',
     categoryImage: 'images/white_fireplace.jpg'
  },
  { label: 'Stoves',
     value: 'stoves',
     categoryImage: 'images/Layer-6.jpg'
  },
  { label: 'Outdoor Living Products',
     value: 'outdoorlivingproducts',
     categoryImage: 'images/country-garden-collection.png'
  },
  { label: 'Portable & Built-In Grills',
     value: 'protableandbuiltingrills',
     categoryImage: 'images/Layer-4.jpg'
  },
  { label: 'Playsets',
     value: 'playsets',
     categoryImage: 'images/cliff-climb-playset.jpg'
  },
  { label: 'Sheds & Animal Enclosures',
     value: 'shedsandanimalenclosures',
     categoryImage: 'images/homeslide3.jpg'
  },
  { label: 'Liberty Safes',
     value: 'libertysafes',
     categoryImage: 'images/vault-door-black.jpg'
  },
  { label: 'Furnaces & Boilers',
     value: 'furnacesandboilers',
     categoryImage: 'images/480ekfurnace-1.jpg'
  }
];

getSubcategories = function(category) {
  var item = _.findWhere(topCategories, { value: category });
  var items = Categories.find({ category: item.label }, { sort: { subcategory: 1 } }).fetch();
  return _.compact(_.uniq(_.pluck(items, 'subcategory')));
}

getTypes = function(category, subcategory) {
  var category = _.findWhere(topCategories, { value: category }).label;
  return Categories.find({ category: category, subcategory: subcategory }, { sort: { type: 1 } }).fetch();
}

getFirstTypeIdWithCategory = function(category) {
  var item = _.findWhere(topCategories, { value: category });
  var category = Categories.findOne({ category: item.label });
  return category && category._id;
}

if (Meteor.isClient) {
  Template.registerHelper('topCategories', function() {
    return topCategories;
  })
}
