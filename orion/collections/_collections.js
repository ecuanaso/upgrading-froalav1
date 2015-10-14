RotatingBanner = new orion.collection('rotatingbanner', {
  singularName: 'Banner',
  pluralName: 'Banners',
  title: 'Rotating Banner',
  link: {
    title: 'Rotating Banner',
    parent: 'slideshows'
  },
  tabular: {
    columns: [
      { data: 'title', title: 'Title' },
      orion.attributeColumn('image', 'image', 'Image (size: 1300x500)'),
      { data: 'position', title: 'Order', 
        render: function(val,type,doc){
        return '<input data-id="' + doc._id + '" type="number" value="' + val + '" class="order-banner">'
        }
      },

      { data: 'visibility',className: 'center-align', orderable: false, title: 'Visibility', 
        render: function(val, type, doc) {
          var html = '<div class="switch switch-rotating-banner"><label>Off<input type="checkbox" data-id="' + doc._id + '"';
          html +=  (val) ? ' checked="checked"' : ''; 
          html +='><span class="lever"></span>On</label></div>'
          return html;
        }

      },

      { data: 'actions',className: 'center-align',orderable: false, title: 'Actions',
          render: function (val,type,doc){
            return '<a href="' + Router.path('collections.rotatingbanner.update', doc) +'" class="btn btn-xs waves-effect waves-light light-blue accent-4 user-btn-action">Edit</a>'
          },
          tmpl: Meteor.isClient && Template.actionBtns
     }
    ]
  }
});

Categories = new orion.collection('categories', {
  singularName: 'Category',
  pluralName: 'Categories',
  title: 'Categories',
  link: {
    title: 'Categories'
  },
  tabular: {
    columns: [
      { data: 'category', title: 'Category' },
      { data: 'subcategory', title: 'Sub-Category' },
      { data: 'type', title: 'Type' },
      { data: 'actions',className: 'center-align',orderable: false, title: 'Actions',
        render: function (val,type,doc){
            return '<a href="' + Router.path('collections.categories.update', doc) +'" class="btn btn-xs waves-effect waves-light light-blue accent-4 user-btn-action">Edit</a>'
        },
          tmpl: Meteor.isClient && Template.actionBtns
     }
    ]
  }
});

Products = new orion.collection('products', {
  singularName: 'Product',
  pluralName: 'Products',
  title: 'Products',
  link: {
    title: 'Products'
  },
  tabular: {
    columns: [
      { data: 'name', title: 'Name' },
      { data: 'description', title: 'Description' },
      { data: 'views', title: 'Views' },
      { data: 'actions',className: 'center-align',orderable: false, title: 'Actions',
        render: function (val,type,doc){
            return '<a href="' + Router.path('collections.products.update', doc) +'" class="btn btn-xs waves-effect waves-light light-blue accent-4 user-btn-action">Edit</a>'
        },
          tmpl: Meteor.isClient && Template.actionBtns
     }
    ]
  }
});

Stores = new orion.collection('stores', {
  singularName: 'Brand',
  pluralName: 'Brands',
  title: 'Brands',
  link: {
    title: 'Brands'
  },
  tabular: {
    columns: [
      { data: 'name', title: 'Name' },
      //orion.attributeColumn('user', 'owner', 'Owner'),
      {
        title: 'Export Visits',
        tmpl: Meteor.isClient && Template.adminExportVisits
      },
      { data: 'actions',className: 'center-align',orderable: false, title: 'Actions',
        render: function (val,type,doc){
            return '<a href="' + Router.path('collections.stores.update', doc) +'" class="btn btn-xs waves-effect waves-light light-blue accent-4 user-btn-action">Edit</a>'
        },
          tmpl: Meteor.isClient && Template.actionBtns
     }
    ]
  }
});

Projects = new orion.collection('projects', {
  singularName: 'Proyects',
  pluralName: 'Proyects',
  title: 'Proyects',
  //link: {
    //title: 'Proyects'
  //},
  tabular: {
    columns: [
      { data: 'name', title: 'Name' },
    ]
  }
});

Favorites = new orion.collection('favorites', {
  singularName: 'Favorite',
  pluralName: 'Favorites',
  link: {
    title: 'Favoritos'
  },
  tabular: {
    columns: [
      orion.attributeColumn('hasOne', 'product', 'Product')
    ]
  }
});

// Designers = new orion.collection('designers', {
//   singularName: 'Diseñador',
//   pluralName: 'Diseñadores',
//   title: 'Diseñadores',
//   link: {
//     title: 'Diseñadores'
//   },
//   tabular: {
//     columns: [
//       { data: 'name', title: 'Name' },
//       { data: 'email', title: 'Email' },
//     ]
//   }
// });

if ( Meteor.isClient ){
  orion.links.add({
    identifier: 'slideshows',
    title: 'Slideshows',
    index: 40,
    activeRouteRegex: 'slideshows'
  });
}

Manufacturers = new orion.collection('manufacturers', {
  singularName: 'Manufacturer',
  pluralName: 'Manufacturers',
  title: "Manufacturers",
  link: {
    title: "Manufacturers",
    parent: "slideshows"
  },

  tabular: {
    columns: [
      orion.attributeColumn('image', 'image', 'Logo(max-width: 160px)'),
      { data: 'website', title: 'Website',
          render: function(val, type, doc){
            return '<a href=" ' + val + ' " target="_BLANK">' + val + '</a>'
          }
       },

       { data: 'visibility',className: 'center-align', orderable: false, title: 'Visibility', 
        render: function(val, type, doc) {
          var html = '<div class="switch switch-manufacturer"><label>Off<input type="checkbox" data-id="' + doc._id + '"';
          html +=  (val) ? ' checked="checked"' : ''; 
          html +='><span class="lever"></span>On</label></div>'
          return html;
        }

      },

      { data: 'actions',className: 'center-align',orderable: false, title: 'Actions',
        render: function (val,type,doc){
            return '<a href="' + Router.path('collections.manufacturers.update', doc) +'" class="btn btn-xs waves-effect waves-light light-blue accent-4 user-btn-action">Edit</a>'
        },
          tmpl: Meteor.isClient && Template.actionBtns
     }
    ]
  }
});

// Ads = new orion.collection('ads', {
//   singularName: 'anuncio',
//   pluralName: 'anuncios',
//   title: 'Anuncios',
//   link: {
//     title: 'Anuncios'
//   },
//   tabular: {
//     columns: [
//       { data: 'title', title: 'Titulo' },
//       orion.attributeColumn('image', 'image', 'Imagen'),
//       { data: 'count', title: 'Probabilidad' },
//       { data: 'clicks', title: 'Clicks' },
//       { data: 'views', title: 'Vistas' },
//       orion.attributeColumn('createdAt', 'createdAt', 'Fecha de creación'),
//     ]
//   }
// });


ProductViews = new Mongo.Collection('product_views');
