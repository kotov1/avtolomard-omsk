$(function() {

	// Mobile menu
	$(".nav").click(function() {
		$(this).toggleClass("nav-expanded");
	});


	// FAQ accordion
	$('.js-accordion').find('.js-accordion-btn.active').next().slideDown();

	$('.js-accordion-btn').click(function() {

		 var dropDown = $(this).closest('li').find('.js-accordion-content');

		 $(this).closest('.js-accordion').find('.js-accordion-content').not(dropDown).slideUp();

		 if ($(this).hasClass('active')) {
			  $(this).removeClass('active');
		 } else {
			  $(this).closest('.js-accordion').find('.js-accordion-btn.active').removeClass('active');
			  $(this).addClass('active');
		 }

		 dropDown.stop(false, true).slideToggle();
	});


	$('#js-slider').slick({
		infinite: false,
		dots: true
	});

	

});