$(document).ready(function() {
	$(".around-circle").on("click", "a", function(event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			navHeight = $('#menu').height();
		scroll_el = $(this).attr('href');
		if($(scroll_el).length != 0) {
			$('html, body').animate({
				scrollTop: $(scroll_el).offset().top - navHeight
			}, 1000)
		}
		return false
	})
});
$(document).ready(function() {
	$(".item").on("click", "a", function(event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			navHeight = $('#menu').height();
		scroll_el = $(this).attr('href');
		if($(scroll_el).length != 0) {
			$('html, body').animate({
				scrollTop: $(scroll_el).offset().top - navHeight
			}, 1000)
		}
		return false
	})
});
$(document).ready(function() {
	$(".a").on("click", "a", function(event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			navHeight = $('#menu').height();
		scroll_el = $(this).attr('href');
		if($(scroll_el).length != 0) {
			$('html, body').animate({
				scrollTop: $(scroll_el).offset().top - navHeight
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