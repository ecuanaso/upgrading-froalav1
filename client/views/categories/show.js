var getSort = function() {
  if (Session.get('currentOrder') == 'populares') {
    return { views: -1 };
  }
  if (Session.get('currentOrder') == 'menor-a-mayor-precio') {
    return { price: 1 };
  }
  if (Session.get('currentOrder') == 'mayor-a-menor-precio') {
    return { price: -1 };
  }
  if (Session.get('currentOrder') == 'nuevos') {
    return { createdAt: -1 };
  }
  if (Session.get('currentOrder') == 'antiguos') {
    return { createdAt: 1 };
  }
}

Template.categoriesShow.onCreated(function () {
  var self = this;
  self.autorun(function () {
    self.subscribe('categories', Router.current().params.value);
  });
  self.autorun(function() {
    var id = Router.current().params.type || '';
    self.subscribe('productsByCategory', id);
  })
});

Template.categoriesShow.onRendered(function() {
  var self = this;

  if (!Session.get('currentOrder')) {
    Session.set('currentOrder', 'populares');
  }

  self.autorun(function() {
    var current = Router.current();
    Tracker.afterFlush(function() {
      $('.parallax').parallax();
      $('.dropdown-button').dropdown({ constrain_width: false, hover: true, belowOrigin: true });
      $('select:not(.initialized)').material_select();
    })
  })

  self.autorun(function() {
    if (!Template.instance().subscriptionsReady()) return;

    var container = document.querySelector('.masonry');
    var msnry = new Masonry(container, { itemSelector: '.col' });
    var id = Router.current().params.type || '';
    Products.find({ category: id }, { sort: getSort() }).count();
    Tracker.afterFlush(function () {
      $('.dropdown-button').dropdown({ constrain_width: false, hover: true, belowOrigin: true });
      var msnry = new Masonry(container, { itemSelector: '.col' });
      $('img[data-original]').lazyload({
        effect: 'fadeIn',
        placeholder: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
      });
    });
  })
})

Template.categoriesShow.helpers({
  shouldShowTabs: function() {
    return getSubcategories(Router.current().params.value).length > 0;
  },
  getImageHeight: function() {
    rwindow.$width()
    var info = this.image.info;
    var colWidth = $('.example-width').width();
    var finalHeight = (info.height * colWidth) / info.width;
    return finalHeight;
  },
  currentCategory: function() {
    var current = _.findWhere(topCategories, { value: Router.current().params.value });
    current.image = orion.dictionary.get('parallax.' + current.value);
    return current;
  },
  types: function() {
    return getTypes(Router.current().params.value, String(this));
  },
  subcategories: function() {
    return getSubcategories(Router.current().params.value)
  },
  categories: function() {
    var item = _.findWhere(topCategories, { value: Router.current().params.value });
    return Categories.find({ category: item.label });
  },
  productsWithPrice: function() {
    var id = Router.current().params.type || '';
    var products = Products.find({ category: id, price: { $ne: null }}, { sort: getSort() }).fetch();
    return Products.find({ category: id, price: { $ne: null }}, { sort: getSort() }).fetch();
  },
  productsWithoutPrice: function() {
    var id = Router.current().params.type || '';
    return Products.find({ category: id, price: null }, { sort: getSort() }).fetch();
  },
  getIdForSubcategory: function() {
    return String(this).toLowerCase().replace(/\s+/g, '').replace('&', '').replace('/', '');
  },
  getCurrentType: function() {
    return Categories.findOne(Router.current().params.type);
  }
});

Template.categoriesShow.events({
  'change .order-select': function(event, template) {
    Session.set('currentOrder', $('select.order-select').val());
  }
});
