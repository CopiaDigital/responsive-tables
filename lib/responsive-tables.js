 $(function () {
	$("table").wrap("<div class='scrollable'><div class='scroll-wrap'></div>");
	$(".scroll-wrap").before("</div><span class='swipe-icon'></span>");

	$(window).on("resize", function () {

    	if ($(".scroll-wrap").prop('scrollWidth') > $(".scroll-wrap").width() ) {

    		$(".scroll-wrap").addClass("scroll");

	    	$(".scroll-wrap").on("scroll", function () {
		    	var cur = $(this).scrollLeft();
		        if (cur == 0) {
		            $(this).addClass('shadow-right').removeClass('shadow-left');
		        }
		        else {
		            var max = $(this)[0].scrollWidth - $(this).width();
		            if (cur == max) {
		                $(this).addClass('shadow-left').removeClass('shadow-right');
		            } else {
		                $(this).addClass('shadow-right shadow-left');
		            }
		        }
		   	});
		   	$(".scroll-wrap").trigger("scroll");
	   	} else{
	   		$(".scroll-wrap").removeClass("scroll shadow-right shadow-left");
	   	}
	}).resize();
});