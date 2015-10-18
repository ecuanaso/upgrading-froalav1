Template.header.onRendered(function() {
  // $(".button-collapse").sideNav({
  //   closeOnClick: true
  // });

  this.$('.button-collapse').sideNav({
      menuWidth: 300, // Default is 240
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );
});

Template.headerItems.onRendered(function(){
	  var config = {    
         sensitivity: 3, // number = sensitivity threshold (must be 1 or higher)    
         interval: 200,  // number = milliseconds for onMouseOver polling interval    
         over: doOpen,   // function = onMouseOver callback (REQUIRED)    
         timeout: 200,   // number = milliseconds delay before onMouseOut    
         out: doClose    // function = onMouseOut callback (REQUIRED)    
    };
    
    function doOpen() {
        $(this).addClass("hover");
        $('ul:first',this).css('visibility', 'visible');
    }
 
    function doClose() {
        $(this).removeClass("hover");
        $('ul:first',this).css('visibility', 'hidden');
    }
});

Template.header.helpers({
  getPath: function() {
    return Router.path('categories.show', { value: this.value });
  },
  pages: function () {
    return orion.pages.collection.find({}, { sort: { position: 1 } });
  }
});

Template.headerItems.helpers({
  'parentPage': function(){
		return orion.pages.collection.find({ navbar: { $ne: false }, parentId: { $exists: false }}, { sort: { position: 1 }});
	},
  'childPage': function(parent){
		return orion.pages.collection.find({ navbar: { $ne: false }, parentId: parent }, { sort: { position: 1 }});
	},
  'grandChildPage': function(parent){
    return orion.pages.collection.find({ navbar: { $ne: false },  parentId: parent }, { sort: { position: 1 }});
  }
});
