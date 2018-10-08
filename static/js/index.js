$(document).ready(function() {
	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:15,
		nav:false,
		autoWidth:true,
    responsive:{
        0:{
            items:1
        },
        710:{
            items:2
        },
        1000:{
            items:3
				},
				1300:{
					items:4
			}
    }
	});
});
$(document).ready(function() {
	$('.project-slide').removeClass( ['shadow','move-top'] );
	$('.project-name').removeClass('show');

	$( '.project-slide' ).hover(function() {
		$( this ).toggleClass( ['shadow','move-top'] );
		$( this ).find('.project-name').toggleClass('show');
	});

	$( '.site-team-block-grid' ).hover(function() {
		// $( this ).find('.site-team-block-grid-description').toggleClass('shadow-bottom');
		$( this ).toggleClass('animate-team-block');

	});

});