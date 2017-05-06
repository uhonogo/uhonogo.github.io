
$(window).resize(function () {
var width = $('body').innerWidth();

	if (+width <= 700) {
		$('.pict').addClass('lookMore');
		$('.lookMore').removeClass('pict');
	} else {
		$('.lookMore').addClass('pict');
		$('.pict').removeClass('lookMore');
	}
});

$(document).ready(function() {
	$('#f-lookMore').click( function(event) {

		$('#f-content').toggleClass('mobileDarkBg');
		
	})
});

$(document).ready(function() {
	$('#s-lookMore').click( function(event) {

		$('#s-content').toggleClass('mobileDarkBg');
		
	})
});
$(document).ready(function() {
	$('#t-lookMore').click( function(event) {

		$('#t-content').toggleClass('mobileDarkBg');
		
	})
});
$(document).ready(function() {
	$('#four-lookMore').click( function(event) {

		$('#four-content').toggleClass('mobileDarkBg');
		
	})
});
$(document).ready(function() {
	$('#fif-lookMore').click( function(event) {

		$('#fif-content').toggleClass('mobileDarkBg');
		
	})
});
$(document).ready(function() {
	$('#six-lookMore').click( function(event) {

		$('#six-content').toggleClass('mobileDarkBg');
		
	})
});

$(document).click(function(event) {
	if($(event.target).closest(".lookMore").length) return;
	$('.dark').removeClass('mobileDarkBg');
	indexClick = 0;
	event.stopPropagation();
});

$(window).scroll(function() { 
    var the_top = $(document).scrollTop();
    if (the_top > 90) {
        $('#menu').addClass('modMenuHeight');
    }
    else {
        $('#menu').removeClass('modMenuHeight');
    }
});


$(document).ready(function() {
    $("head").append("<link rel='stylesheet' type='text/css' href='sass/style.css' />");
});

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-96020876-1', 'auto');
  ga('send', 'pageview');

// opacity

$(document).scroll(function() {
  var dHeight = $(this).height();
  var opacityCalc = $(this).scrollTop() / dHeight*6;

    if ( opacityCalc > 1 ) {
  	var opacityCalc = 1;
  } else if ( opacityCalc <= 0.4 ) {
  	var opacityCalc = 0.4;
  }

  if (dHeight >= $(this).scrollTop()) {
    $('header').css('background', 'rgba(0,0,0,' + opacityCalc + ')');
    $('.menu').css('background', 'rgba(23,95,138,' + opacityCalc + ')');
  } return;

});

$(document).scroll(function() {
  var dHeight = $(this).height();
  var opacityCalc = $(this).scrollTop() / dHeight*6;

    if ( opacityCalc > 1 ) {
  	var opacityCalc = 1;
  } else if ( opacityCalc <= 0.4 ) {
  	var opacityCalc = 0;
  }

  if (dHeight >= $(this).scrollTop()) {
    $('.menu').css('background', 'rgba(23,95,138,' + opacityCalc + ')');
  } return;

});


// END opacity

$(document).ready(function() {
	$(".around-circle").on("click", "a", function(event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			navHeight = 76;
		scroll_el = $(this).attr('href');
		if($(scroll_el).length != 0) {
			$('html, body').animate({
				scrollTop: $(scroll_el).offset().top - +navHeight
			}, 1000)
		}
		return false
	})
});
$(document).ready(function() {
	$(".item").on("click", "a", function(event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			navHeight = 76;
		scroll_el = $(this).attr('href');
		if($(scroll_el).length != 0) {
			$('html, body').animate({
				scrollTop: $(scroll_el).offset().top - +navHeight
			}, 1000)
		}
		return false
	})
});
$(document).ready(function() {
	$(".a").on("click", "a", function(event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			navHeight = 76;
		scroll_el = $(this).attr('href');
		if($(scroll_el).length != 0) {
			$('html, body').animate({
				scrollTop: $(scroll_el).offset().top - +navHeight
			}, 1000)
		}
		return false
	})
});
var join = $('.show-hide'),
	joinLink = $('#touch-menu'),
	indexClick = 0;
$(function() {
	joinLink.click(function(event) {
		if(indexClick === 0) {
			join.addClass('display-block');
			join.removeClass('show-hide');
			indexClick = 1;
			$('#button-menu').removeClass('mobile-menu');
			$('#button-menu').addClass('line')
		} else {
			join.addClass('show-hide');
			join.removeClass('display-block');
			indexClick = 0;
			$('#button-menu').addClass('mobile-menu');
			$('#button-menu').removeClass('line')
		}
		event.stopPropagation();
		event.preventDefault();
	})
});
$(document).click(function(event) {
	if($(event.target).closest(".show-hide").length) return;
	join.addClass('show-hide');
	join.removeClass('display-block');
	indexClick = 0;
	$('#button-menu').addClass('mobile-menu');
	$('#button-menu').removeClass('line');
	event.stopPropagation();
});
var $animation_elements = $('.bop', '.skill1');
var $window = $(window);

function check_if_in_view() {
	var window_height = $window.height();
	var window_top_position = $window.scrollTop();
	var window_bottom_position = (window_top_position + window_height);
	$.each($animation_elements, function() {
		var $element = $(this);
		var element_height = $element.outerHeight();
		var element_top_position = $element.offset().top;
		var element_bottom_position = (element_top_position + element_height);
		if((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
			jQuery('.t').addClass('start');
			jQuery('.t').removeClass('text');
			jQuery('.t').removeClass('end');
			$element.addClass('anim');
			$element.removeClass('anim-rev');
		} else {
			jQuery('.t').addClass('end');
			jQuery('.t').removeClass('text');
			jQuery('.t').removeClass('start');
			$element.removeClass('anim');
			$element.addClass('anim-rev');
		}
	})
}
$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');