Template.orionMaterializeLayout.onCreated(function(){
  this.subscribe('pages');
});

Template.pagesSimple.onCreated(function(){
	this.subscribe('boxes');
});

Template.orionMaterializeLayout.onCreated(function(){
  this.subscribe('boxes');
  this.subscribe('orionFileSystem');
});