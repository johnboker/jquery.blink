(function ($) {
	$.fn.blink = function (options) {
		var defaults = { delay: 500 };
		var options = $.extend(defaults, options);
		return $(this).each(function (idx, itm) {
			setInterval(function () {
				if ($(itm).css("visibility") === "visible") {
					$(itm).css('visibility', 'hidden');
				}
				else {
					$(itm).css('visibility', 'visible');
				}
			}, options.delay);
		});
	}
} (jQuery))