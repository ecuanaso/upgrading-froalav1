Categories.attachSchema(new SimpleSchema({
  category: {
    type: String,
    label: 'Category',
    allowedValues: _.pluck(topCategories, 'label')
  },
  subcategory: {
    type: String,
    label: 'Sub-category'
  },
  type: {
    type: String,
    label: 'Type'
  },

  // content: orion.attribute('froala', {
  //     label: 'Content'
  //   })
}));

Categories.helpers({
  getCategoryValue: function() {
    var top = _.findWhere(topCategories, { label: this.category });
    return top && top.value;
  }
})
