// smooth scroll
$(function() {
	$('a').smoothScroll({
		offset: -50
	});

// flickity
$('.carousel').flickity({
		wrapAround: true,
		freeScroll: true
	});

// start date minimum set to "today"
var today = new Date().toISOString().split('T')[0];
	document.getElementsByName("start")[0].setAttribute('min', today);
});