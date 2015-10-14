Meteor.methods({
	'removeRow':  function(id){
		var pagesRemove = orion.pages.collection.remove({_id: id }),
			manufacturersRemove = Manufacturers.remove({_id : id }),
			//photoGalleryRemove = PhotoGallery.remove({_id : id}),
			rotatingBannerRemove = RotatingBanner.remove({_id : id }),
			storesRemove = Stores.remove({_id : id }), 
			CategoriesRemove = Categories.remove({_id : id }),
			productsRemove = Products.remove({_id : id }),
			//docsRemove = Docs.remove({_id : id }),
			//recipientRemove = Recipients.remove({_id : id }),
			myCollections = {
				pages: pagesRemove,
				manufacturers : manufacturersRemove,
				//photogallery : photoGalleryRemove,
				rotatingbanner : rotatingBannerRemove,
				stores: storesRemove,
				categories: CategoriesRemove,
				products: productsRemove,
				//docs: docsRemove,
				//recipients: recipientRemove
		   }

		return myCollections;
	    
	}
});