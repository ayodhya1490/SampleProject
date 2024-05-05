jQuery(function($) {
$(document).ready( function() {
  //enabling stickUp on the '.navbar-wrapper' class
	$('.navbar-wrapper').stickUp({
		parts: {
			0: 'banner',
			1: 'aboutus',
			2: 'skillset',
			3: 'experience',
			4: 'ourwork',
			5: 'caseStudies',
			6: 'projects',
			7: 'contact'
		},
		itemClass: 'menuItem',
		itemHover: 'active',
		topMargin: 'auto'
		});
	});

	$( ".navbar.navbar-inverse.navbar-static-top a" ).click(function() {
	  $( ".navbar-collapse" ).addClass( "hideClass" );
	});


	$( ".navbar.navbar-inverse.navbar-static-top a" ).click(function() {
	  $( ".navbar-collapse" ).addClass( "collapse" );
	});


	$( ".navbar.navbar-inverse.navbar-static-top a" ).click(function() {
	  $( ".navbar-collapse" ).removeClass( "in" );
	});

	$( ".navbar-toggle" ).click(function() {
	  $( ".navbar-collapse" ).removeClass( "hideClass" );
	});

	$('#banner').superslides({
	  animation: 'fade',
	  play: 5000
	});

});
