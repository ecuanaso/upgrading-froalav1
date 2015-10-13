// var onAfterAction = function(title, description, image) {
// 	return function() {
// 		if (!Meteor.isClient) {
// 			return;
// 		}
// 		GAnalytics && GAnalytics.pageview();
// 		SEO.set({
// 			title: (title && (orion.dictionary.get('seo.title') + ' - ' + title)) || orion.dictionary.get('seo.title'),
// 			link: {
// 				icon: orion.dictionary.get('seo.favIcon.url'),
// 			},
// 			meta: {
// 				description: description || orion.dictionary.get('seo.description')
// 			},
// 			og: {
// 				title: title || orion.dictionary.get('seo.title'),
// 				description: description || orion.dictionary.get('seo.description'),
// 				image: image || orion.dictionary.get('seo.image.url')
// 			}
// 		});
// 	}
// }

var onAfterAction = function(title, description, image) {
	return function() {
		if (!Meteor.isClient) {
			return;
		}
		GAnalytics && GAnalytics.pageview();
		SEO.set({
			title: (title && (orion.dictionary.get('home page.title') + ' - ' + title)) || orion.dictionary.get('home page.title'),
			link: {
				icon: orion.dictionary.get('home page.favIcon.url'),
			},
			meta: {
				description: description || orion.dictionary.get('home page.description')
			},
			og: {
				title: title || orion.dictionary.get('home page.title'),
				description: description || orion.dictionary.get('home page.description'),
				image: image || orion.dictionary.get('home page.image.url')
			}
		});
	}
}


Router.route('/', {
	name: 'home',
	layoutTemplate: 'layout',
	onAfterAction: onAfterAction()
});

Router.route('/search', {
  name: 'search',
  layoutTemplate: 'layout',
	onAfterAction: onAfterAction('Buscar')
});

Router.route('/products/:_id', {
  name: 'products.show',
  layoutTemplate: 'layout',
	onAfterAction: function() {
		if (!Meteor.isClient) {
			return;
		}
		var product = Products.findOne(this.params._id);
		product && onAfterAction(product.name, product.description, product.image && product.image.url)();
	}
});

Router.route('/categories', {
  name: 'categories.index',
  layoutTemplate: 'layout',
	onAfterAction: onAfterAction('Categorías')
});

Router.route('/categories/:value/:type?', {
  name: 'categories.show',
  layoutTemplate: 'layout',
	onAfterAction: function() {
		if (!Meteor.isClient) {
			return;
		}
		var current = _.findWhere(topCategories, { value: Router.current().params.value });
		if (!current) return;
    current.image = orion.dictionary.get('images.' + current.value);

		var title = current.label;
		var image = current.image;
		if (this.params.type) {
			var category = Categories.findOne(this.params.type);
			if (!category) return;
			title += ' - ' + category.subcategory + ' - ' + category.type;
		}

		onAfterAction(title, null, image && image.url)();
	}
});

Router.route('/stores', {
  name: 'stores.index',
  layoutTemplate: 'layout',
	onAfterAction: onAfterAction('Tiendas')
});

Router.route('/stores/:_id', {
  name: 'stores.show',
  layoutTemplate: 'layout',
	onAfterAction: function() {
		if (!Meteor.isClient) {
			return;
		}
		var store = Stores.findOne(this.params._id);
		store && onAfterAction(store.name, null, store.logo && store.logo.url)();
	}
});

Router.route('/designers', {
  name: 'designers.index',
  layoutTemplate: 'layout',
	onAfterAction: onAfterAction('Diseñadores')
});



/**
 * Ads
 */
// Router.route('ads/:_id', function() {
//   var ad = Ads.findOne(this.params._id);

//   if (!ad.url) {
//     this.response.end('Error');
//     return;
//   }

//   Ads.update(ad._id, { $inc: { clicks: 1 } });

//   var adUrl = UrlUtils.parse(ad.url, true);

//   var query = {
//     utm_source: 'Decomarias.cl',
//     utm_medium: 'banner',
//     utm_content: ad._id,
//     utm_campaign: ad.location
//   }

//   adUrl.query = _.extend(query, adUrl.query);
//   adUrl.search = null;
//   //this.response.end(UrlUtils.format(adUrl));
//   this.response.end('<script>window.location.replace("' + UrlUtils.format(adUrl) + '");</script>')
// }, { where: 'server', name: 'ad.url' });


/**
 * Admin
 */

Router.route('/admin/projects/:_id/show', {
  name: 'collections.projects.show',
  layoutTemplate: 'orionMaterializeLayout'
});

Router.route('/admin/store', {
  name: 'admin.store.update',
  layoutTemplate: 'orionMaterializeLayout',
  waitOn: function() {
    return Meteor.subscribe('myStore');
  }
});

if (Meteor.isClient) {
  orion.links.add({
    routeName: 'admin.store.update',
    activeRouteRegex: 'admin.store',
    title: 'My Store',
    section: 'top',
    identifier: 'my-store',
    permission: 'updateMyStore'
  });
}
