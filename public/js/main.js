 // Click outside of offcanvass
 var mobileMenuOutsideClick = function() {
    
	$(document).click(function (e) {
	var container = $("#colorlib-aside, .js-colorlib-nav-toggle");
	if (!container.is(e.target) && container.has(e.target).length === 0) {

		if ( $('body').hasClass('offcanvas') ) {

			$('body').removeClass('offcanvas');
			$('.js-colorlib-nav-toggle').removeClass('active');
		
		}
		
	}
	});

	$(window).scroll(function(){
		if ( $('body').hasClass('offcanvas') ) {

			$('body').removeClass('offcanvas');
			$('.js-colorlib-nav-toggle').removeClass('active');
		
		}
	});

};
mobileMenuOutsideClick();