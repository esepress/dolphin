$(document).ready(function(){
	$("#blog-carousel").owlCarousel({
		items:3,
		itemsDesktop : [1170,4], //5 items between 1000px and 901px
      	itemsDesktopSmall : [768,2], // betweem 900px and 601px
      	itemsTablet: [600,2],
		itemsMobile :[479,1],
		pagination:true
	});
});