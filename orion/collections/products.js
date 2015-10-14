Products.attachSchema(new SimpleSchema({
  hidden: {
    type: Boolean,
    label: 'Hidden',
    optional: true,
    autoform: {
      omit: true
    }
  },
  name: {
    type: String,
    label: 'Name'
  },
  category: orion.attribute('hasMany', { label: 'Category' }, {
    collection: Categories,
    publicationName: 'productsPosts',
    titleField: 'type',
    additionalFields: ['category', 'subcategory'],
    render: {
      item: function(item, escape) {
        return '<div class="product-category">' +
        '<span class="category">' + escape(item['category']) + ' > </span>' +
        '<span class="subcategory">' + escape(item['subcategory']) + ' > </span>' +
        '<span class="type">' + escape(item['type']) + '</span>' +
        '</div>';
      },
      option: function(item, escape) {
        return '<div class="product-category">' +
        '<span class="category">' + escape(item['category']) + ' > </span>' +
        '<span class="subcategory">' + escape(item['subcategory']) + ' > </span>' +
        '<span class="type">' + escape(item['type']) + '</span>' +
        '</div>';
      }
    },
  }),
  storeId: orion.attribute('hasOne', {
    label: 'Brand',
    autoValue: function() {
      if (Roles.userHasRole(this.userId, 'store-owner')) {
        return Stores.findOne({ owner: this.userId })._id;
      }
    }
  }, {
    collection: Stores,
    publicationName: 'productsStores',
    titleField: 'name',
    filter: function(userId) {
      return Roles.userHasRole(userId, 'admin') ? {} : { owner: userId };
    },
    additionalFields: ['owner']
  }),
  image: orion.attribute('image', {
    label: 'Primary Image'
  }),
  image1: orion.attribute('image', {
    label: 'Secondary Image 1',
    optional: true
  }),
  image2: orion.attribute('image', {
    label: 'Secondary Image 2',
    optional: true
  }),
  image3: orion.attribute('image', {
    label: 'Secondary Image 3',
    optional: true
  }),
  image4: orion.attribute('image', {
    label: 'Secondary Image 4',
    optional: true
  }),
  description: {
    type: String,
    label: 'Description'
  },
  price: {
    type: Number,
    label: 'Price (Only Numbers)',
    optional: true
  },
  dimensions: {
    type: String,
    label: 'Dimensions'
  },
  material: {
    type: String,
    label: 'Material'
  },
  views: {
    type: Number,
    label: 'Views',
    defaultValue: 0,
    autoform: {
      omit: true
    }
  },
  createdAt: orion.attribute('createdAt'),
  discount: {
    type: Number,
    min: 1,
    max: 100,
    optional: true,
    label: 'Discount',
    autoform: {
      omit: true
    }
  }
}));

Products.helpers({
  store: function () {
    return Stores.findOne(this.storeId);
  },
  isInFavorites: function(userId) {
    return Favorites.find({ product: this._id, userId: userId }).count() != 0;
  }
});

Products.initEasySearch(['name', 'description'], {
  limit: 20,
  use: 'mongo-db',
  query: function(searchString, opts) {
    var categories = _.pluck(Categories.find({ $or: [ { category: new RegExp(searchString, 'i') }, { subcategory: new RegExp(searchString, 'i') }, { type: new RegExp(searchString, 'i') } ] }, { fields: { _id: 1 } }).fetch(), '_id');
    var query = EasySearch.getSearcher(this.use).defaultQuery(this, searchString);

    if (_.isArray(query.$or) && _.isArray(categories) && categories) {
      query.$or.push({ category: { $in: categories } });
    }

    return query;
  }
});
