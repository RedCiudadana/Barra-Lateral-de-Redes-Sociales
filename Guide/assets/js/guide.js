$(document).ready(function() {
	var thewindow = $(window);
	var container = $("body > .container");
	var contents = $("#contents");
	var limit = contents.offset().top - parseInt(contents.css("margin-top"));
	
	verifyLimit();
	thewindow.on("scroll", verifyLimit);
	
	resize();
	thewindow.on("resize", resize);

	function verifyLimit() {
		var pos = thewindow.scrollTop();
		if (pos > limit) contents.addClass("sticky");
		else contents.removeClass("sticky");
	}

	function resize() {
		contents.css("width", 17 / 100 * parseInt(container.css("width")));
	}
});