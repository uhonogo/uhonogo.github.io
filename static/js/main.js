$(document).ready( function () {

	$('.responsive').slick({
		dots: true,
		infinite: false,
		speed: 300,
		slidesToShow: 2,
		slidesToScroll: 2,
		arrows: false,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
});